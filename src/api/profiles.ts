import { ProfileInterface } from "../lib/interfaces";

export async function GetRandomProfile(): Promise<ProfileInterface> {
    return await fetch('http://127.0.0.1:8080/profile/random', {
        headers: {
            'Authorization': import.meta.env.VITE_AUTHORISE_HEADER,
            'Content-Type': 'application/json'
        },
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            return res.json();
        }).then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
            throw new Error('Failed to GetRandomProfile: \n' + err);
        });
}

export async function GetProfileById(id: string): Promise<ProfileInterface> {
    return await fetch('http://127.0.0.1:8080/profile/id', {
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
        console.log(res.json());
        return res.json();

    }).catch((err) => {
        console.log(err);
        throw new Error('Failed to GetProfileById: [' + id + ']' + err);
    });
}