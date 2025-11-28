import {setAuthToken} from "@/hooks/use-auth-token.ts";
import {HOST} from "@/lib/constants.ts";

export default async function refreshApi() {
try {
    const res = await fetch(`${HOST}/api/user/refresh`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
    });

    if (!res.ok) {
      console.error("Refresh failed – HTTP ", res.status);
      return false;
    }

    const data = await res.json() as { accessToken: string };

    setAuthToken(data.accessToken);   // save it in your cookie/local‑storage helper
    return true;
  } catch (e) {
    console.error("Refresh API error:", e);
    return false;
  }
}