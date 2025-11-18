// queryFetcher.ts – FINAL PURE COOKIE VERSION
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export const fetcher = async (url: string, options: RequestInit = {}): Promise<any> => {
    const headers = new Headers(options.headers || {});
    headers.set("Content-Type", "application/json");

    const res = await fetch(API_URL + url, {
        ...options,
        headers,
        credentials: "include", // ← this is the ONLY thing that matters now
    });

    // Silent refresh on 401 – refresh endpoint just sets a new access_token cookie
    if (res.status === 401 && !url.includes("/refresh") && !url.includes("/login")) {
        const refreshRes = await fetch(API_URL + "/api/user/refresh", {
            method: "POST",
            credentials: "include",
        });

        if (refreshRes.ok) {
            // Retry original request – new access_token cookie is now attached automatically
            const retryRes = await fetch(API_URL + url, {
                ...options,
                headers,
                credentials: "include",
            });
            if (!retryRes.ok) throw new Error("Retry failed");
            return retryRes.json();
        } else {
            // Real logout
            sessionStorage.clear();
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