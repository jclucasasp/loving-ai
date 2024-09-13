import { MatchInterface, ProfileInterface } from "../lib/interfaces";
import { CreateMatch } from "../api/matches";
import { useToast } from "@/hooks/use-toast";
import { Heart, X } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import React from "react";


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
    const userId = sessionStorage.getItem('userId');
    const { setMatches, matches } = matchSate;

    const { toast } = useToast();

    const createMatchHandler = async () => {
        const newMatch = await CreateMatch(userId!, profile!.userId);

        if (newMatch) {
            setIsMatched(true);
            toast({
                title: 'Match created successfully',
                description: 'May this be the beginning of something great!',
            });
            setMatches([...matches, newMatch]);
        }
    }

    return (
        <section className="flex items-center justify-center">
            <Card>
                <CardContent>
                    <div className="relative mt-6">
                        <img src={profile?.imageUrl ? "http://localhost:8080/images/" + profile?.imageUrl : ""} alt="profile image" className="rounded-lg" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black">
                            <h2 className="font-bold text-xl">{profile?.firstName} {profile?.lastName}</h2>
                            <p>{profile?.age}</p>
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="text-gray-600">{profile?.bio}</p>
                    </div>
                    <div className="flex justify-between w-full mt-6">
                        <Button variant={"destructive"} size={"xl"} className="hover:text-black"
                            onClick={() => { setNextProfile(null), setIsMatched(false) }}>
                            <X size={25} />
                        </Button>
                        {!isMatched ? <Button variant={"secondary"} size={"xl"}
                            className=" bg-blue-500 thover:shadow-lg hover:bg-blue-700 hover:text-red-600"
                            onClick={createMatchHandler} >
                            <Heart size={25} />
                        </Button>
                            : <Button variant={"secondary"} size={"xl"} disabled
                            className="bg-blue-500 text-white px-9 py-3 hover:text-red-600">Matched</Button>}
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}
