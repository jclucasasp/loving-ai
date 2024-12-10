import { MatchInterface, ProfileInterface } from "@/lib/interfaces";
import useLoggedInUserState from "@/hooks/use-user-state";
import { Card, CardContent } from "@/components/ui/card";
import { ToastAction } from "@/components/ui/toast";
import React, { useCallback, useEffect, useState } from "react";
import { CreateMatch } from "@/api/matches-api";
import { useToast } from "@/hooks/use-toast";
import HeartFace from "@/assets/heartFace.png";
import KissyFace from "@/accests/kissyFace.png";
import Thinking from "@/assets/thinking.png";
import { HOST } from "@/lib/constants";

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
  const { isMatched, setIsMatched } = isMatchedState;
  const loggedInUser = useLoggedInUserState();

  const { setMatches, matches } = matchSate;

  const { toast } = useToast();

  const createMatchHandler = async () => {
    const newMatch = await CreateMatch(loggedInUser!.userId, profile!.userId);

    if (newMatch) {
      setIsMatched(true);
      toast({
        title: "Match created successfully",
        description: "May this be the beginning of something great!",
        action: <ToastAction altText="Okay">Okay</ToastAction>,
        duration: 4000,
      });
      setMatches([...matches, newMatch]);
    }
  };
  const [currentPicture, setCurrentPicture] = useState(
    HOST + "/images/Blurred.jpg"
  );
  const [currentBio, setCurrentBio] = useState("Bio Loading...");
  const [currentName, setCurrentName] = useState("John Doe...");
  const [currentAge, setCurrentAge] = useState(0);

  const fetchProfileDetails = useCallback(async () => {
    if (profile) {
      setCurrentPicture(HOST + "/images/" + profile.imageUrl);
      setCurrentBio(profile.bio);
      setCurrentName(profile.firstName + " " + profile.lastName);
      setCurrentAge(profile.age);
    }
  }, [profile]);

  useEffect(() => {
    fetchProfileDetails();
  }, [fetchProfileDetails]);

  return (
    <>
      {currentPicture && (
        <Card>
          <CardContent>
            <div className="relative flex justify-center mt-6">
              <img
                src={currentPicture}
                width={700}
                alt="profile image"
                className="rounded-xl"
              />
              <div className="absolute top-0 left-0 p-2 text-slate-100 text-lg bg-slate-700/20 rounded-xl">
                <h2 className="text-base sm:text-lg">{currentName}</h2>
                <h2 className="text-sm sm:text-base">{currentAge}</h2>
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
                  setNextProfile(null), setIsMatched(false);
                }}
                aria-label="Go to next profile"
              >
                <img
                  src={Thinking}
                  alt="thinking emoji"
                  height={65}
                  width={65}
                />
                <h3 className="text-base sm:text-lg">Next</h3>
              </div>
              {!isMatched ? (
                <div
                  className="cursor-pointer flex flex-col items-center"
                  onClick={createMatchHandler}
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
                <div
                  className="cursor-not-allowed"
                  aria-label="Already matched"
                >
                  <img
                    src={KissyFace}
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
      )}
    </>
  );
}
