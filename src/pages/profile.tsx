import {useMutation, useQueryClient} from "@tanstack/react-query";
import {MatchInterface, ProfileInterface} from "@/lib/interfaces";
import {getLoggedInUser} from "@/hooks/use-fetchLoggedInUser.ts";
import React, {useCallback, useEffect, useState} from "react";
import {HOST, MATCH_API_CREATE} from "@/lib/constants";
import {Card, CardContent} from "@/components/ui/card";
import {ToastAction} from "@/components/ui/toast";
import {customFetch} from "@/api/customFetch.ts";
import BlurredImage from "@/assets/Blurred.jpg";
import HeartFace from "@/assets/heartFace.png";
import KissFace from "@/assets/kissyFace.png";
import Thinking from "@/assets/thinking.png";
import {useToast} from "@/hooks/use-toast";

type ProfileProps = {
    profile: ProfileInterface | null;
    setNextProfile: React.Dispatch<React.SetStateAction<ProfileInterface | null>>;
    matchSate: MatchState;
    isMatchedState: isMatchedState;
};

type MatchState = {
    setMatches: React.Dispatch<React.SetStateAction<MatchInterface[]>>;
    matches: MatchInterface[];
};

type isMatchedState = {
    isMatched: boolean;
    setIsMatched: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Profiles({
                                     profile,
                                     setNextProfile,
                                     matchSate,
                                     isMatchedState,
                                 }: ProfileProps) {
    const {isMatched, setIsMatched} = isMatchedState;
    const loggedInUser = getLoggedInUser();

    const {setMatches, matches} = matchSate;

    const {toast} = useToast();
    const queryClient = useQueryClient();

    const createMatchHandler = async () => {
        return await customFetch<MatchInterface>(MATCH_API_CREATE, "POST", {
            "profileId": loggedInUser!.userId,
            "toProfileId": profile!.userId
        });
    };

    const {mutate} = useMutation<MatchInterface | null>({
        mutationFn: createMatchHandler,
        onSuccess: async (data) => {
            setIsMatched(true);
            await queryClient.invalidateQueries({queryKey: ["matches"]});
            toast({
                title: "Match created successfully",
                description: "May this be the beginning of something great!",
                action: <ToastAction altText="Okay">Okay</ToastAction>,
                duration: 3000,
            });
            setMatches([...matches, data!]);
        }
    });

    const [imageLoading, setImageLoading] = useState<boolean>(true);
    const [currentPicture, setCurrentPicture] = useState("");

    const [currentBio, setCurrentBio] = useState("Bio Loading...");

    const loadProfileDetails = useCallback(() => {
        if (profile) {
            const img = new Image();
            img.src = HOST + "/images/" + profile.imageUrl;
            img.onload = () => {
                setCurrentPicture(img.src);
                setCurrentBio(profile.bio);
                setImageLoading(false);
            }
            img.onerror = () => {
                setImageLoading(false);
            }
        }
    }, [profile]);

    useEffect(() => {
        loadProfileDetails();
    }, [loadProfileDetails]);

    return (
        <>
            <Card>
                <CardContent>
                    <div className="relative flex justify-center mt-6">
                        <img
                            src={imageLoading ? BlurredImage : currentPicture}
                            alt="profile image"
                            className="rounded-xl w-full max-w-[700px] aspect-square object-cover"
                        />
                        <div className="absolute top-0 left-0 p-2 text-slate-100 text-lg bg-slate-700/20 rounded-xl">
                            <h2 className="text-base sm:text-lg">{profile ? `${profile.firstName} ${profile.lastName}` : "Fetching"}</h2>
                            <h2 className="text-sm sm:text-base">{profile?.age ?? 0}</h2>
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="text-xs sm:text-sm md:text-base text-gray-600">
                            {currentBio}
                        </p>
                    </div>
                    <div className="flex justify-around mt-4 text-gray-500">
                        <div
                            className="cursor-pointer flex flex-col items-center"
                            onClick={() => {
                                setNextProfile(null);
                                setIsMatched(false);
                            }}
                            aria-label="Go to next profile"
                        >
                            <img src={Thinking} alt="thinking emoji" height={65} width={65}/>
                            <h3 className="text-base sm:text-lg">Next</h3>
                        </div>
                        {!isMatched ? (
                            <div
                                className="cursor-pointer flex flex-col items-center"
                                onClick={() => mutate()}
                                aria-label="Like profile"
                            >
                                <img
                                    src={HeartFace}
                                    alt="face with hearts emoji"
                                    height={67}
                                    width={67}
                                />
                                <h3 className="text-base sm:text-lg">Like</h3>
                            </div>
                        ) : (
                            <div className="cursor-not-allowed" aria-label="Already matched">
                                <img
                                    src={KissFace}
                                    alt="kissy face emoji"
                                    height={60}
                                    width={65}
                                />
                                <h3 className="text-base sm:text-lg">Matched</h3>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
