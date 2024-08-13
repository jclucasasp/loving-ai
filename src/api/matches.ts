import { MatchInterface, ProfileInterface } from "../lib/interfaces";

export async function GetMatches(): Promise<MatchInterface[]> {
    return await fetch('http://127.0.0.1:8080/matches/all')
        .then((res) => {
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            return res.json();
        }).then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
            throw new Error('Failed to GetMatches: \n' + err);
        });
}

export async function GetMatchesProfile(): Promise<ProfileInterface[]> {

    const data = await GetMatches();

    return await fetch('http://127.0.0.1:8080/match/profiles', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            return res.json();
        }).then((data) => {
            console.log("Profiles: \n", data);
            return data;
        })
        .catch((err) => {
            console.log(err);
            throw new Error('Failed to GetMatchesProfile: \n' + err);
        });
}

export async function CreateMatch(fromProfileId: string, toProfileId: string): Promise<MatchInterface> {

    if(!fromProfileId || !toProfileId) {
        throw new Error('fromProfileId and toProfileId are required');
    }

    return await fetch('http://127.0.0.1:8080/match/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({fromProfileId, toProfileId})
    }).then((res) => {
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        return res.json();
    }).then((data) => {
        return data;
    }).catch((err) => {
        console.log(err);
        throw new Error('Failed to CreateMatch: \n' + err);
    });
}