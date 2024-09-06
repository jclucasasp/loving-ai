export interface ProfileInterface {
    userId: string;
    firstName: string;
    lastName: string;
    age: number;
    ethnicity: string;
    gender: string;
    bio: string;
    imageUrl: string;
    myersBriggsPersonalityType: string;
}

export interface MatchInterface {
    id: string;
    matchedDate: string;
    profileId: string;
    toProfileId: string;
}

export interface ConversationInterface {
    matchId: string;
    messages: MessageInterface[]
}

export interface MessageInterface {
    id?: string;
    senderProfileId?: string;
    receiverProfileId?: string;
    sendDate?: string;
    messageText: string;
}

export interface ResponseInterface {
    messagePrompt: string;
    name: string;
    age: number;
    bio: string;
}
