import {AUTH_HEADER, HOST} from "@/lib/constants";
import {ProfileInterface} from "@/lib/interfaces";
import {getAuthToken} from "@/hooks/use-auth-token.ts";

export async function GetRandomProfile(
    gender: string
): Promise<ProfileInterface> {
    const token = getAuthToken();
    return await fetch(HOST + "/api/profile/random", {
        method: "POST",
        credentials: "include",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        cache: "force-cache",
        body: JSON.stringify({gender}),
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

export async function GetProfileById(
    userId: string
): Promise<ProfileInterface> {
    return await fetch(HOST + "/api/profile/id", {
        method: "POST",
        headers: {
            Authorization: AUTH_HEADER,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({userId}),
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

export async function CreateNewUserProfile(newUser: FormData) {
    return await fetch(HOST + "/api/user/create", {
        method: "POST",
        headers: {
            Authorization: AUTH_HEADER,
        },
        body: newUser,
        cache: "force-cache",
    })
        .then((res) => {
            if (!res.ok) {
                return null;
            }
            return res;
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