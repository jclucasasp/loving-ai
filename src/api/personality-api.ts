import { PersonalityTypeInterface, PersonalityDescriptionInterface } from "@/lib/interfaces";

export async function GetPersonalityTypes(): Promise<PersonalityTypeInterface[]> {
    return await fetch('http://127.0.0.1:8080/api/personality/types', {
        headers: {
            'Authorization': import.meta.env.VITE_AUTHORISE_HEADER,
            'Content-Type': 'application/json'
        },
    }).then((res) => {
        if (!res.ok) {
            return null;
        }
        return res.json();
    }).then((data) => {
        return data;
    }).catch((err) => {
        console.log(err);
        throw new Error('Failed to GetPersonalityTypes: \n' + err);
    });
} 

export async function GetPersonalityDescriptions(): Promise<PersonalityDescriptionInterface[]> {
    return await fetch('http://127.0.0.1:8080/api/personality/descriptions', {
        headers: {
            'Authorization': import.meta.env.VITE_AUTHORISE_HEADER,
            'Content-Type': 'application/json'
        },
    }).then((res) => {
        if (!res.ok) {
            return null;
        }
        return res.json();
    }).then((data) => {
        return data;
    }).catch((err) => {
        console.log(err);
        throw new Error('Failed to GetPersonalityDescriptions: \n' + err);
    });
}