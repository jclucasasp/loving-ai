import { MatchInterface, ProfileInterface } from "@/lib/interfaces";
import { Card, CardContent } from "@/components/ui/card";
import { ToastAction } from "@/components/ui/toast";
import { CreateMatch } from "@/api/matches-api";
import { useToast } from "@/hooks/use-toast";
import React from "react";
import useLoggedInUserState from "@/hooks/use-loggedin-user-state";


type ProfileProps = {
    profile: ProfileInterface | null;
    setNextProfile: React.Dispatch<React.SetStateAction<ProfileInterface | null>>;
    matchSate: MatchState;
    isMatchedState: isMatchedState
}

type MatchState = {
    setMatches: React.Dispatch<React.SetStateAction<MatchInterface[]>>;
    matches: MatchInterface[];
}

type isMatchedState = {
    isMatched: boolean;
    setIsMatched: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Profiles({ profile, setNextProfile, matchSate, isMatchedState }: ProfileProps) {

    const { isMatched, setIsMatched } = isMatchedState;
    const loggedInUser = useLoggedInUserState();

    const { setMatches, matches } = matchSate;

    const { toast } = useToast();

    const createMatchHandler = async () => {
        const newMatch = await CreateMatch(loggedInUser!.userId, profile!.userId);

        if (newMatch) {
            setIsMatched(true);
            toast({
                title: 'Match created successfully',
                description: 'May this be the beginning of something great!',
                action: <ToastAction altText="Okay" >Okay</ToastAction>
            });
            setMatches([...matches, newMatch]);
        }
    }

    return (
        <section className="flex items-center justify-center">
            <Card>
                <CardContent>
                    <div className="relative flex justify-center mt-6">
                        <img src={profile?.imageUrl ? "http://localhost:8080/images/" + profile?.imageUrl : ""} alt="profile image" className="rounded-xl" />
                        <div className="absolute bottom-0 left-1 p-2 text-slate-100 text-lg bg-black/5 rounded-lg">
                            <h2>{profile?.firstName} {profile?.lastName}</h2>
                            <p>{profile?.age}</p>
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="text-gray-600">{profile?.bio}</p>
                    </div>
                    <div className="flex justify-around mt-4 text-gray-500">
                        <div className="cursor-pointer flex flex-col items-center"
                            onClick={() => { setNextProfile(null), setIsMatched(false) }}>
                            <img src="/thinking.png" alt="thinking emoji" height={65} width={65} />
                            Next ...
                        </div>
                        {!isMatched ? <div className="cursor-pointer flex flex-col items-center" onClick={createMatchHandler} >
                            <img src="/heartFace.png" alt="face with hearts emoji" height={67} width={67} />
                            Like
                        </div>
                            : <div className="cursor-not-allowed">
                                <img src="/kissyFace.png" alt="kissy face emoji" height={60} width={65} />
                                Matched
                            </div>
                        }
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}
