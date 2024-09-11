import { ConversationInterface, MatchInterface, ProfileInterface } from "../lib/interfaces";
import deleteMatchById, { GetMatchedProfiles } from "../api/matches";
import { GetConversationFromTo } from "../api/conversation";
import React, { useEffect, useState } from "react"
import { XCircle } from "lucide-react";

type StateTypes = 'profile' | 'match' | 'chat' | 'login';

type MachesProps = {
    screen: React.Dispatch<React.SetStateAction<StateTypes>>;
    setCurrentProfile: React.Dispatch<React.SetStateAction<ProfileInterface | null>>;
    setCurrentConversation: React.Dispatch<React.SetStateAction<ConversationInterface>>;
    matchState: MatchState;
}

type MatchState = {
    setMatches: React.Dispatch<React.SetStateAction<MatchInterface[]>>;
    matches: MatchInterface[];
}


export default function Matches({ screen, setCurrentProfile, setCurrentConversation, matchState }: MachesProps) {

    const userId = localStorage.getItem('userId');
    // const { matches, setMatches } = matchState;

    const viewConversations = async (profileId: string, toProfileId: string) => {
        const conversation = await GetConversationFromTo(profileId, toProfileId);
        setCurrentConversation(conversation);
        screen('chat');
    }

    const [profiles, setProfiles] = useState<ProfileInterface[]>([]);

    const handleChat = async (profileId: string, toProfileId: string) => {
        await viewConversations(profileId, toProfileId);
    }

    const handleDelete = async (userId: string) => {
        const res = await deleteMatchById(userId);
        if (res.ok) {
            window.alert('Match deleted successfully');
        } else {
            window.alert('Unable to delete match');
        }
        setMatchedProfiles();
    };

    const setMatchedProfiles = async () => {
        const data = await GetMatchedProfiles(userId!);
        setProfiles(data);
    };

    //TODO: Move the seeding to App.tsx to avoid re-rendering
    useEffect(() => {
        if (profiles.length == 0) {
            console.log("setMatchedProfiles called from matches-component");
            setMatchedProfiles();
        }
    }, []);

    // TODO: Find a way to iterate over both the profiles and the matches
    const MatchesList = () => {
        return (
            profiles.map((profile) => (
                <li key={profile.userId} className="flex items-center justify-between">
                    <section className="flex gap-2 items-center">
                        <button onClick={() => { setCurrentProfile(profile); screen('profile') }}>
                            <img src={"http://localhost:8080/images/" + profile.imageUrl} width={50} height={50} className="rounded-full" />
                        </button>
                        <h3>{profile.firstName} {profile.lastName}</h3>
                    </section>
                    <section className="flex gap-6">
                        <button className="rounded-lg bg-green-500 text-white p-2 h-11 hover:shadow-lg flex gap-2 items-center"
                            onClick={() => { handleChat(userId!, profile.userId); setCurrentProfile(profile) }}><XCircle />Chat</button>
                        <button onClick={() => { handleDelete(profile.userId) }} className="rounded-lg bg-red-500 text-white p-2 h-11 hover:shadow-lg flex gap-2 items-center"><XCircle />Del</button>

                    </section>
                </li>
            ))
        );
    };



    return (
        <ul className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold border-b-2 border-gray-300">Current Matches</h2>
            <MatchesList />
        </ul>
    );
}