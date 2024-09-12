import { ProfileInterface } from "../lib/interfaces";

export async function LoginAuth(email: string, password: string) {
    return await fetch('http://127.0.0.1:8080/user/login', {
        method: 'POST',
        headers: {
            'Authorization': import.meta.env.VITE_AUTHORISE_HEADER,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    }).then((res) => {
        if (!res.ok) {
            throw new Error('Failed to fetch data with error: \n'+ res.statusText);
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
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        return res.json();
    }).then((data: string) => {
        return data;
    }).catch((err) => {
        console.log(err);
        throw new Error('Failed to LogoutAuth: \n' + err);
    });
}