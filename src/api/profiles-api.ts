import { ProfileInterface } from "@/lib/interfaces";

export async function GetRandomProfile(gender: string): Promise<ProfileInterface> {
    return await fetch('http://127.0.0.1:8080/profile/random', {
        method: 'POST',
        headers: {
            'Authorization': import.meta.env.VITE_AUTHORISE_HEADER,
            'Content-Type': 'application/json'
        }, cache: 'force-cache',
        body: JSON.stringify({gender}),
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
            return null;
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
        return null;
    });
}

export async function CreateNewUserProfile(newUser: FormData) {
    return await fetch('http://127.0.0.1:8080/user/create', {
        method: 'POST',
        headers: {
            'Authorization': import.meta.env.VITE_AUTHORISE_HEADER,
        },
        body: newUser,
        cache: 'force-cache',

    }).then((res) => {
        if (!res.ok) {
            return null;
        }
        return res;
    }).catch((err) => {
        console.log(err);
        return null;
    });
}

export async function UpdateUserProfile(profile: ProfileInterface): Promise<ProfileInterface> {
    return await fetch('http://127.0.0.1:8080/profile/update', {
        method: 'POST',
        headers: {
            'Authorization': import.meta.env.VITE_AUTHORISE_HEADER,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(profile),
        cache: 'force-cache',
    }).then((res) => {
        if (!res.ok) {
            return null;
        }
        return res.json();
    }).then(data => data)
    .catch((err) => {
        console.log(err);
        return null;
    });
}   