export interface ProfileInterface {
    userId: string;
    firstName: string;
    lastName: string;
    age: number;
    ethnicity: string;
    gender: string;
    bio: string;
    image?: File;
    imageUrl: string;
    myersBriggsPersonalityType: string;
}

export interface NewUserProfileInterface {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    otp:string;
    age: number;
    ethnicity: string;
    gender: string;
    bio: string;
    image?: File;
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
    userId: string;
    name: string;
    age: number;
    ethnicity: string;
    gender: string;
    bio: string;
    personality: string;
}

export interface PersonalityTypeInterface {
    id: string;
    type: string;
}

export interface PersonalityDescriptionInterface {
    id: string;
    description: string;
}

export interface PasswordResetInterface {
    email: string;
    password: string;
}