import {getAuthToken} from "@/hooks/use-auth-token.ts";
import {AUTH_HEADER, HOST} from "@/lib/constants";
import {ProfileInterface} from "@/lib/interfaces";

export async function GetRandomProfile(
    gender: string
): Promise<ProfileInterface> {
    const token = getAuthToken();
    return await fetch(HOST + "/api/profile/random", {
        method: "POST",
        mode: "cors",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({gender}),
        credentials: "include",
    })
        .then(async (res) => {

            console.log("HTTP Status: ", res.status);

            if (!res.ok) {
                return null;
            }

            return res.json();
        })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log(err);
            return null;
        });
}

export async function GetProfileById(
    userId: string
): Promise<ProfileInterface> {
    return await fetch(HOST + "/api/profile/id", {
        method: "POST",
        mode: "cors",
        headers: {
            Authorization: AUTH_HEADER,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({userId}),
        credentials: "include",
    })
        .then((res) => {
            if (!res.ok) {
                return null;
            }
            return res.json();
        })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log(err);
            return null;
        });
}

export async function UpdateUserProfile(
    profile: ProfileInterface
): Promise<ProfileInterface> {
    return await fetch(HOST + "/api/profile/update", {
        method: "POST",
        headers: {
            Authorization: AUTH_HEADER,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
        cache: "force-cache",
    })
        .then((res) => {
            if (!res.ok) {
                return null;
            }
            return res.json();
        })
        .then((data) => data)
        .catch((err) => {
            console.log(err);
            return null;
        });
}