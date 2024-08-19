export interface ProfileInterface {
    id: string;
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
    matchId: string;
    createDate: string;
    fromProfileId: string;
    toProfileId: string;
    conversationId: string;
}

export interface ConversationInterface {
    id: string;
    fromProfileId: string;
    toProfileId: string;
    messages: MessageInterface[]
}

export interface MessageInterface {
    messageText: string;
    toProfileId?: string;
    messageTime?: string;
}