import { NewUserProfileInterface, ProfileInterface } from "@/lib/interfaces";

export async function GetRandomProfile(): Promise<ProfileInterface> {
    return await fetch('http://127.0.0.1:8080/profile/random', {
        headers: {
            'Authorization': import.meta.env.VITE_AUTHORISE_HEADER,
            'Content-Type': 'application/json'
        }, cache: 'force-cache',
    })
        .then((res) => {
            if (!res.ok) {
                return null;
            }
            return res.json();
        }).then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
            throw new Error('Failed to GetRandomProfile: \n' + err);
        });
}

export async function GetProfileById(userId: string): Promise<ProfileInterface> {
    return await fetch('http://127.0.0.1:8080/profile/id', {
        method: 'POST',
        headers: {
            'Authorization': import.meta.env.VITE_AUTHORISE_HEADER,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId }),

    }).then((res) => {
        if (!res.ok) {
            return null;
        }
        return res.json();

    }).then((data) => {
        return data;
    }).catch((err) => {
        console.log(err);
        throw new Error('Failed to GetProfileById: [' + userId + ']' + err);
    });
}

export async function CreateNewUserProfile(newUser: NewUserProfileInterface) {
    console.log(newUser);
    return await fetch('http://127.0.0.1:8080/user/create', {
        method: 'POST',
        headers: {
            'Authorization': import.meta.env.VITE_AUTHORISE_HEADER,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser),
        cache: 'force-cache',

    }).then((res) => {
        if (!res.ok) {
            return null;
        }
        return res.json();
    }).catch((err) => {
        console.log(err);
        throw new Error('Failed to CreateNewUserProfile: \n' + err);
    });
}