import {AUTH_HEADER, HOST} from "@/lib/constants";
import {ProfileInterface} from "@/lib/interfaces";

export async function LoginAuth(email: string, password: string) {
    return await fetch(HOST + "/api/user/login", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
        credentials: "include"
    })
        .then((res) => {
            if (!res.ok) {
                return null;
            }
            return res.json();
        })
        .then((data: { accessToken: string, profile: ProfileInterface }) => {
            return data;
        })
        .catch((err) => {
            console.error(err);
            return null;
        });
}

export async function LogoutAuth(id: string) {
    return await fetch(HOST + "/api/user/logout", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        keepalive: true,
        body: JSON.stringify({id}),
        credentials: "include",
    })
        .then((res) => {
            if (res.ok) {
                sessionStorage.clear();
                localStorage.clear();
            }
        })
        .catch((err) => {
            console.log(err);
            throw new Error("Failed to LogoutAuth: \n" + err);
        });
}

export async function OTPRequest(identifier: string) {
    if (identifier.includes("@")) {
        return await fetch(HOST + "/api/user/otp", {
            credentials: "include",
            method: "POST",
            headers: {
                Authorization: AUTH_HEADER,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email: identifier}),
        })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log(err);
                return null;
            });
    }

    return await fetch(HOST + "/api/user/otp", {
        credentials: "include",
        method: "POST",
        headers: {
            Authorization: AUTH_HEADER,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id: identifier}),
    })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.log(err);
            return null;
        });
}

export async function VerifyAndResetPassword(
    email: string,
    otp: string,
    password: string
) {
    return await fetch(HOST + "/api/user/reset", {
        credentials: "include",
        method: "POST",
        headers: {
            Authorization: AUTH_HEADER,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, otp, password}),
    })
        .then((res) => {
            if (!res) {
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

export async function VerifyOTP(userId: string, otp: string) {
    return await fetch(HOST + "/api/user/verify", {
        credentials: "include",
        method: "POST",
        headers: {
            Authorization: AUTH_HEADER,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({userId, otp}),
    })
        .then((res) => {
            if (!res) {
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
