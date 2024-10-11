import { ProfileInterface } from "@/lib/interfaces";

export async function LoginAuth(email: string, password: string) {
    return await fetch('http://127.0.0.1:8080/user/login', {
        method: 'POST',
        headers: {
            'Authorization': import.meta.env.VITE_AUTHORISE_HEADER,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }).then((res) => {
        if (!res.ok) {
            return null;
        }
        return res.json();
    }).then((data: ProfileInterface) => {
        return data;
    }).catch((err) => {
        console.error(err);
        throw new Error('Failed to Authorization: \n' + err);
    });
}

export async function LogoutAuth(id: string) {
    return await fetch('http://127.0.0.1:8080/user/logout', {
        method: 'POST',
        headers: {
            'Authorization': import.meta.env.VITE_AUTHORISE_HEADER,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    }).then((res) => {
        if (res.ok) {
            sessionStorage.clear();
        }
    })
        .catch((err) => {
            console.log(err);
            throw new Error('Failed to LogoutAuth: \n' + err);
        });
}

export async function OTPRequest(email: string) {
    return await fetch('http://127.0.0.1:8080/user/otp', {
        method: 'POST',
        headers: {
            'Authorization': import.meta.env.VITE_AUTHORISE_HEADER,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    }).then((res) => {
        return res;
    }).catch((err) => {
        console.log(err);
        throw new Error('Failed to OTPRequest: \n' + err);
    });
}

export async function VerifyAndResetPassword(email:string, otp: string, password: string) {
    return await fetch('http://127.0.0.1:8080/user/reset', {
        method: 'POST',
        headers: {
            'Authorization': import.meta.env.VITE_AUTHORISE_HEADER,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, otp, password })
    }).then((res) => {
        if (!res) {
            return null;
        }
        return res.json();
    }).then((data) => {
        return data;
    }).catch((err) => {
        console.log(err);
        throw new Error('Failed to VerifyAndResetPassword: \n' + err);
    });
}