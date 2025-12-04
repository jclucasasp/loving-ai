import {getAuthToken} from "@/hooks/use-auth-token.ts";
import refreshApi from "@/api/refresh-api.ts";
import {HttpMethod} from "@/lib/interfaces";

export type Payload<P extends object> =
    | Record<string, P | string | number | boolean>
    | Array<Record<string, P | string | number>>
    | P[];

export async function customFetch<T, P extends object = object>(endpoint: string, method: HttpMethod, payload?: Payload<P>): Promise<T | null> {
    const token = getAuthToken();

    const headers: HeadersInit = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    }

    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    const body =
        method === "GET"
            ? undefined
            : payload
                ? JSON.stringify(payload)          // <-- array or plain object
                : undefined;

    const requestInit: RequestInit = {
        method,
        mode: "cors",
        credentials: "include",
        headers: headers,
        body
    };

    let resp = await fetch(endpoint, requestInit);

    if ((resp.status === 401 || resp.status === 403) && token) {
        if (!(await refreshApi())) return null;

        const newToken = getAuthToken();
        const retryHeaders = {
            ...headers,
            Authorization: `Bearer ${newToken}`,
        };

        resp = await fetch(endpoint, {...requestInit, headers: retryHeaders});
    }

    if (!resp.ok) {
        console.error(`Request failed – ${resp.status}`);
        return null;
    }

    return (await resp.json()) as T;
}