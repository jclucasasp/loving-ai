import React, { useEffect, useState, useContext, useCallback } from "react"
import deleteMatchById, { GetMatchesProfile } from "../api/matches";
import { ConversationInterface, ProfileInterface } from "../lib/interfaces";
import { GetConversationFromTo } from "../api/conversation";
import { XCircle } from "lucide-react";
import UserProfile from "../context/loged-in-user";

type SetScreenProps = React.Dispatch<React.SetStateAction<StateTypes>>;
type ViewProfileProps = React.Dispatch<React.SetStateAction<ProfileInterface | null>>;
type CurrentConversationProps = React.Dispatch<React.SetStateAction<ConversationInterface>>;
type StateTypes = 'profile' | 'match' | 'chat' | 'login';


export default function Matches({ screen, viewProfile: setMatchedProfile, currentConversation }:
    { screen: SetScreenProps, viewProfile: ViewProfileProps, currentConversation: CurrentConversationProps }) {

    const { id } = useContext(UserProfile);
    const logedinUserId = id;

    const viewConversations = async (fromProfileId: string, toProfileId: string) => {
        const conversation = await GetConversationFromTo(fromProfileId, toProfileId);
        currentConversation(conversation);
        screen('chat');
    }

    const handleDelete = async (id: string) => {
        const res = await deleteMatchById(id);
        if (res.ok) {
            window.alert('Match deleted successfully');
        } else {
            window.alert('Unable to delete match');
        }
    }

    const [profiles, setProfiles] = useState<ProfileInterface[]>([]);

    const handleChat = async (fromProfileId: string, toProfileId: string) => {
        await viewConversations(fromProfileId, toProfileId);
    }

    const setMatchedProfiles = useCallback(async () => {
        return await GetMatchesProfile();
    }, [handleDelete]);

    useEffect(() => {
        setMatchedProfiles().then((data) => {
            setProfiles(data);
        })
    }, [setMatchedProfiles]);

    return (
        <ul className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold border-b-2 border-gray-300">Current Matches</h2>
            {profiles.map((profile) => (
                <li className="flex items-center justify-between" key={profile.id}>
                    <section className="flex gap-2 items-center">
                        <button onClick={() => { setMatchedProfile(profile); screen('profile') }}>
                            <img src={"http://localhost:8080/images/" + profile.imageUrl} width={50} height={50} className="rounded-full" />
                        </button>
                        <h3>{profile.firstName} {profile.lastName}</h3>
                    </section>
                    <section className="flex gap-6">
                        <button className="rounded-lg bg-green-500 text-white p-2 h-11 hover:shadow-lg flex gap-2 items-center"
                            onClick={() => { handleChat(logedinUserId, profile.id); setMatchedProfile(profile) }}><XCircle />Chat</button>
                        <button onClick={() => { handleDelete(profile.id) }} className="rounded-lg bg-red-500 text-white p-2 h-11 hover:shadow-lg flex gap-2 items-center"><XCircle />Del</button>
                    </section>
                </li>
            ))}
        </ul>
    );
}