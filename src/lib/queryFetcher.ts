import { getAccessToken, setAccessToken } from "@/auth/authQuery.ts";

const API_URL =  import.meta.env.VITE_API_URL || "http://localhost:8080";

export const fetcher = async (url: string, options: RequestInit = {}): Promise<any> => {
  const token = getAccessToken();

  const headers = new Headers(options.headers);
  headers.set("Content-Type", "application/json");
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const res = await fetch(API_URL + url, {
    ...options,
    headers,
    credentials: "include", // crucial for HttpOnly refresh cookie
  });

  // Auto refresh on 401
  if (res.status === 401) {
    const refreshRes = await fetch(API_URL + "/api/user/refresh", {
      method: "POST",
      credentials: "include",
    });

    if (refreshRes.ok) {
      const data = await refreshRes.json();
      setAccessToken(data.accessToken);

      // Retry original request with new token
      headers.set("Authorization", `Bearer ${data.accessToken}`);
      const retryRes = await fetch(API_URL + url, {
        ...options,
        headers,
        credentials: "include",
      });
      if (!retryRes.ok) throw new Error("Retry failed");
      return retryRes.json();
    } else {
      // Force logout
      setAccessToken(null);
      sessionStorage.removeItem("loggedInUser");
      window.location.href = "/login";
      throw new Error("Session expired");
    }
  }

  if (!res.ok) {
    const err = new Error("API Error");
    // @ts-ignore
    err.status = res.status;
    throw err;
  }

  return res.json();
};