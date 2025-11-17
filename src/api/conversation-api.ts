import {ConversationInterface, ResponseInterface} from "@/lib/interfaces";
import { HOST} from "@/lib/constants";

export async function GetConversationFromTo(
    profileId: string,
    toProfileId: string,
    token: string
): Promise<ConversationInterface> {
    return await fetch(HOST + "/api/conversation/from-to", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({profileId, toProfileId}),
        cache: "force-cache",
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

export async function CreateMessage(
    matchId: string,
    response: ResponseInterface,
    token: string
): Promise<ConversationInterface> {
    return await fetch(HOST + "/api/conversation/add/" + matchId, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(response),
        cache: "force-cache",
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