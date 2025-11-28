import {getAuthToken} from "@/hooks/use-auth-token.ts";
import {HOST} from "@/lib/constants";
import {HttpMethod, PayLoadInterface} from "@/lib/interfaces";
import refreshApi from "@/api/refresh-api.ts";

export async function customFetch<T>(url: string, method: HttpMethod, payload?: PayLoadInterface): Promise<T | null> {
    const token = getAuthToken();
    const fullUrl = `${HOST}${url}`;

    const init: RequestInit = {
        method,
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            ...(token ? {Authorization: `Bearer ${token}`} : {}),
        },
        ...(payload && method !== "GET" && method !== "DELETE"
            ? {body: JSON.stringify({ [payload.key] : payload.value })}
            : {}),
    };

    let resp = await fetch(fullUrl, init);

    if ((resp.status === 401 || resp.status === 403) && token) {
        if (!(await refreshApi())) return null;

        const newToken = getAuthToken();
        const retryInit = {
            ...init,
            headers: {
                ...init.headers,
                Authorization: `Bearer ${newToken}`,
            },
        };
        resp = await fetch(fullUrl, retryInit);
    }

    if (!resp.ok) {
        console.error(`Request failed – ${resp.status}`);
        return null;
    }

    return (await resp.json()) as T;
}