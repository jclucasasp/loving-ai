import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import deleteMatchById, { GetMatchedProfiles } from "@/api/matches-api";
import { GetConversationFromTo } from "@/api/conversation-api";
import ComponentHeading from "@/components/component-heading";
import SkeletonMatches from "@/components/skeleton-matches";
import { ProfileInterface } from "@/lib/interfaces";
import { XCircle, CheckCircle } from "lucide-react";
import { ToastAction } from "@/components/ui/toast";
import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";

type MatchesProps = {
    setCurrentProfile: React.Dispatch<React.SetStateAction<ProfileInterface | null>>;
    setIsMatched: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Matches({ setCurrentProfile, setIsMatched }: MatchesProps) {

    const loggedInUser = JSON.parse(sessionStorage.loggedInUser);

    const [profiles, setProfiles] = useState<ProfileInterface[] | undefined>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const { toast } = useToast();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMatchedProfiles = async () => {
            const res = await GetMatchedProfiles(loggedInUser.userId);
            setProfiles(res);
            setLoading(false);
        }
        fetchMatchedProfiles();
    }, []);

    const handleChat = async (profileId: string, toProfile: ProfileInterface) => {
        const conversationData = await GetConversationFromTo(profileId, toProfile.userId);
        setCurrentProfile(toProfile);
        navigate('/chat', { state: { conversationData, loggedInUser, toProfile } });
    };

    const handleDelete = async (userId: string) => {
        toast({
            title: 'Deleting match',
            description: 'Are you sure you want to do that?',
            variant: 'destructive',
            duration: 4000,
            action: <ToastAction altText="Delete" onClick={async () => {
                const res = await deleteMatchById(userId);
                if (!res || res.status >= 500) {
                    toast({
                        variant: 'destructive',
                        description: 'Something went wrong',
                        duration: 3000
                    });
                } else {
                    setProfiles(prevState => prevState?.filter(profile => profile.userId !== userId));
                }
            }}>Delete</ToastAction>
        });
    };
    const MatchesList = () => {
        return (
            <Card className="p-2">
                <ul className="flex h-[80vh] flex-col gap-2 sm:gap-3 overflow-y-scroll">
                    {loading && <SkeletonMatches />}
                    {profiles?.map((profile) => (
                        <li key={profile.userId} className="flex items-center justify-between mt-4">
                            <section className="flex items-center">
                                <Button variant={"link"}
                                    onClick={() => { setCurrentProfile(profile); setIsMatched(true); navigate('/profile') }}
                                    className="mb-2 flex gap-3 md:gap-6">
                                    <Avatar className="w-[55px] h-[55px] sm:w-[65px] sm:h-[65px]">
                                        <AvatarImage src={"http://localhost:8080/images/" + profile.imageUrl} alt="profile image" />
                                        <AvatarFallback>?</AvatarFallback>
                                    </Avatar>
                                    <h3>{profile.firstName} {profile.lastName}</h3>
                                </Button>
                            </section>
                            <section className="flex gap-3 md:gap-6">
                                <Button variant={"secondary"} className="gap-1 sm:gap-2 rounded-full"
                                    onClick={() => { handleChat(loggedInUser.userId, profile); }}><CheckCircle />Chat</Button>
                                <Button variant={"destructive"} size={'default'}
                                    onClick={() => { handleDelete(profile.userId) }}
                                    className="bg-red-500 gap-1 sm:gap-2 rounded-full">
                                    <XCircle />Del</Button>
                            </section>
                        </li>
                    ))}
                </ul>
            </Card>
        );
    };

    return (
        <ul className="flex flex-col gap-3 text-center">
            <ComponentHeading>Current Matches</ComponentHeading>
            <MatchesList />
        </ul>
    );
};
