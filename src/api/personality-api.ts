import {HOST} from "@/lib/constants";
import {
    PersonalityTypeInterface,
    PersonalityDescriptionInterface,
} from "@/lib/interfaces";


export async function GetPersonalityTypes(): Promise<
    PersonalityTypeInterface[]
> {
    return await fetch(HOST + "/api/personality/types", {
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            if (!res.ok) {
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

export async function GetPersonalityDescriptions(): Promise<
    PersonalityDescriptionInterface[]
> {
    return await fetch(HOST + "/api/personality/descriptions", {
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            if (!res.ok) {
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