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
        });
}

export async function GetMatchesProfile(): Promise<ProfileInterface[]> {
    return await fetch('http://127.0.0.1:8080/match/profiles', {
        body: JSON.stringify([
            { "id": "8b0e4a15-95c2-45bd-937d-f001a8bfbfec" },
            { "id": "a4e6d728-17e2-48ca-ba4c-6b980dee7001" }
        ]), method: 'GET'
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
        });
}