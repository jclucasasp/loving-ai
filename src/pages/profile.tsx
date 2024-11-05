import { MatchInterface, ProfileInterface } from "@/lib/interfaces";
import useLoggedInUserState from "@/hooks/use-loggedin-user-state";
import { Card, CardContent } from "@/components/ui/card";
import { ToastAction } from "@/components/ui/toast";
import { CreateMatch } from "@/api/matches-api";
import { useToast } from "@/hooks/use-toast";
import { HOST } from "@/lib/constants";
import React from "react";

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

  return (
    <section className="flex items-center justify-center">
      <Card>
        <CardContent>
          <div className="relative flex justify-center mt-6">
            <img
              src={
                profile?.imageUrl
                  ? HOST +"/images/" + profile?.imageUrl
                  : ""
              }
              alt="profile image"
              className="rounded-xl"
            />
            <div className="absolute top-0 left-2 p-2 text-slate-100 text-lg bg-slate-700/20 rounded-lg">
              <h2 className="text-base sm:text-lg">
                {profile?.firstName} {profile?.lastName}
              </h2>
              <h2 className="text-sm sm:text-base">{profile?.age}</h2>
            </div>
          </div>
          <div className="p-4">
            <p className="text-xs sm:text-sm md:text-base text-gray-600">{profile?.bio}</p>
          </div>
          <div className="flex justify-around mt-4 text-gray-500">
            <div
              className="cursor-pointer flex flex-col items-center"
              onClick={() => {
                setNextProfile(null), setIsMatched(false);
              }}
            >
              <img
                src="/thinking.png"
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
              >
                <img
                  src="/heartFace.png"
                  alt="face with hearts emoji"
                  height={67}
                  width={67}
                />
                <h3 className="text-base sm:text-lg">Like</h3>
              </div>
            ) : (
              <div className="cursor-not-allowed">
                <img
                  src="/kissyFace.png"
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
    </section>
  );
}
