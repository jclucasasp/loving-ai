import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import deleteMatchById, { GetMatchedProfiles } from "@/api/matches-api";
import { GetConversationFromTo } from "@/api/conversation-api";
import ComponentHeading from "@/components/component-heading";
import SkeletonMatches from "@/components/skeleton-matches";
import useLoggedInUserState from "@/hooks/use-user-state";
import { ProfileInterface } from "@/lib/interfaces";
import { XCircle, CheckCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { HOST } from "@/lib/constants";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type MatchesProps = {
  setCurrentProfile: React.Dispatch<
    React.SetStateAction<ProfileInterface | null>
  >;
  setIsMatched: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Matches({
  setCurrentProfile,
  setIsMatched,
}: MatchesProps) {
  const loggedInUser = useLoggedInUserState();

  const [profiles, setProfiles] = useState<ProfileInterface[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMatchedProfiles = async () => {
      const res = await GetMatchedProfiles(loggedInUser!.userId);
      setProfiles(res);
      setLoading(false);
    };
    fetchMatchedProfiles();
  }, []);

  const handleChat = async (profileId: string, toProfile: ProfileInterface) => {
    const conversationData = await GetConversationFromTo(
      profileId,
      toProfile.userId
    );
    setCurrentProfile(toProfile);
    navigate("/chat", { state: { conversationData, loggedInUser, toProfile } });
  };

  const handleDelete = async (userId: string) => {
    const res = await deleteMatchById(userId);
    if (!res || res.status >= 500) {
      toast({
        variant: "destructive",
        description: "Something went wrong",
        duration: 3000,
      });
    } else {
      setProfiles((prevState) =>
        prevState?.filter((profile) => profile.userId !== userId)
      );
    }
  };

  const MatchesList = () => {
    return (
      <Card>
        <ul className="flex h-[80dvh] ml-[-8px] flex-col sm:gap-3 overflow-y-scroll">
          {loading && <SkeletonMatches />}
          {profiles?.map((profile) => (
            <li
              key={profile.userId}
              className="flex justify-between mt-5 mr-1 md:mr-2"
            >
              <section className="flex items-center">
                <Button
                  variant={"link"}
                  onClick={() => {
                    setCurrentProfile(profile);
                    setIsMatched(true);
                    navigate("/profile");
                  }}
                  aria-label="Go to profile"
                  className="mb-2 flex gap-1 md:gap-3 lg:gap-6"
                >
                  <Avatar className="w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[65px] md:h-[65px]">
                    <AvatarImage
                      src={HOST + "/images/" + profile.imageUrl}
                      alt="profile image"
                    />
                    <AvatarFallback>?</AvatarFallback>
                  </Avatar>
                  <div className="text-sm sm:text-lg md:text-xl flex gap-2">
                    <h3>{profile.firstName}</h3>
                    <h3 className="hidden sm:block">{profile.lastName}</h3>
                  </div>
                </Button>
              </section>

              <section className="flex gap-2 md:gap-6">
                <Button
                  variant={"secondary"}
                  className="gap-1 sm:gap-2 rounded-full"
                  onClick={() => {
                    handleChat(loggedInUser!.userId, profile);
                  }}
                  aria-label="Go to chat"
                >
                  <CheckCircle />
                  Chat
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant={"destructive"}
                      size={"default"}
                      className="bg-red-500 gap-1 sm:gap-2 rounded-full"
                      aria-label="Delete this match"
                    >
                      <XCircle />
                      Del
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Deleting Match</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you absolutely sure you want to delete this match?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel
                        aria-label="Cancel"
                        className="rounded-full"
                      >
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        aria-label="Confirm to delete match"
                        className="rounded-full bg-red-500 hover:bg-red-500/90 hover:text-black"
                        onClick={() => handleDelete(profile.userId)}
                      >
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </section>
            </li>
          ))}
        </ul>
      </Card>
    );
  };

  return (
    <div className="w-full">
      <ComponentHeading>Current Matches</ComponentHeading>
      <MatchesList />
    </div>
  );
}
