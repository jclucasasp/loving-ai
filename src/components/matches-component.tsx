import { ConversationInterface, MatchInterface, ProfileInterface } from "../lib/interfaces";
import deleteMatchById, { GetMatchedProfiles } from "../api/matches";
import { GetConversationFromTo } from "../api/conversation";
import React, { useEffect, useState } from "react"
import { useToast } from "@/hooks/use-toast";
import { XCircle } from "lucide-react";
import { ToastAction } from "./ui/toast";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import SkeletonMatches from "./skeleton-matches";

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

    const userId = sessionStorage.getItem('userId');
    // const { matches, setMatches } = matchState;
    const { toast } = useToast();

    const viewConversations = async (profileId: string, toProfileId: string) => {
        const conversation = await GetConversationFromTo(profileId, toProfileId);
        setCurrentConversation(conversation);
        screen('chat');
    }

    // TODO: profiles state need to be in App to prefent lost state
    const [profiles, setProfiles] = useState<ProfileInterface[]>([]);
    const [loading, setLoading] = useState(false);

    const handleChat = async (profileId: string, toProfileId: string) => {
        await viewConversations(profileId, toProfileId);
    }

    const handleDelete = async (userId: string) => {

        toast({
            title: 'Deleting match',
            description: 'Are you sure you want to do that?',
            action: <ToastAction altText="Delete" onClick={async () => {
                const res = await deleteMatchById(userId);
                if (!res.ok) {
                    toast({
                        variant: 'destructive',
                        description: 'Something went wrong',
                    });
                } else {
                    setMatchedProfiles();
                }
            }}>Delete</ToastAction>
        });
    };

    const setMatchedProfiles = async () => {
        setLoading(true);
        const data = await GetMatchedProfiles(userId!);
        setProfiles(data);
        setLoading(false);
    };

    //TODO: matchedProfiles state is lost when navigating to another page
    useEffect(() => {
        if (!!profiles) {
            setMatchedProfiles();
        }
    }, []);

    // TODO: Find a way to iterate over both the profiles and the matches
    const MatchesList = () => {
        return (
            <Card className="p-2">
                <ul className="flex h-[80vh] flex-col gap-3 overflow-y-scroll p-2">
                    {loading && <SkeletonMatches />}
                    {
                        profiles.map((profile) => (
                            <li key={profile.userId} className="flex items-center justify-between">
                                <section className="flex gap-3 items-center">
                                    <button onClick={() => { setCurrentProfile(profile); screen('profile') }}>
                                        <img src={"http://localhost:8080/images/" + profile.imageUrl} width={55} height={55} className="rounded-full" />
                                    </button>
                                    <h3>{profile.firstName} {profile.lastName}</h3>
                                </section>
                                <section className="flex gap-6">
                                    <Button variant={"secondary"} size={'default'} className="gap-2"
                                        onClick={() => { handleChat(userId!, profile.userId); setCurrentProfile(profile) }}><XCircle />Chat</Button>
                                    <Button variant={"destructive"} size={'default'}
                                        onClick={() => { handleDelete(profile.userId) }}
                                        className="bg-red-500 gap-2">
                                        <XCircle />Del</Button>
                                </section>
                            </li>
                        ))
                    }
                </ul>
            </Card>
        );
    };



    return (
        <ul className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold border-b-2 border-gray-300">Current Matches</h2>
            <MatchesList />
        </ul>
    );
}