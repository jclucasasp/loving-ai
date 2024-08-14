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
    profileId: string;
    messages: Message[]
}

interface Message {
    messageText: string;
    profileId: string;
    messageTime: string;
}