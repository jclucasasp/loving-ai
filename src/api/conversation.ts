import { ConversationInterface, MessageInterface } from "../lib/interfaces";

export async function GetConversationFromTo(fromProfileId: string, toProfileId: string): Promise<ConversationInterface> {
    return await fetch('http://127.0.0.1:8080/conversation/from-to', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fromProfileId, toProfileId })
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
            throw new Error('Failed to GetChatMessages: \n' + err);
        });
}

export async function CreateMessage(conversationId: string, message: MessageInterface): Promise<ConversationInterface> {
    return await fetch('http://127.0.0.1:8080/conversation/add/' + conversationId, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message)
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
            throw new Error('Failed to CreateMessage: \n' + err);
        });
}