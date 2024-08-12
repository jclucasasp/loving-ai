import { ProfileInterface } from "../lib/interfaces";

export async function GetRandomProfile(): Promise<ProfileInterface> {
    return await fetch('http://127.0.0.1:8080/profile/random')
        .then((res) => {
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            return res.json();
        }).then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
        });
}