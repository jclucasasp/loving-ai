import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {HOST, PROFILE_API_ID, PROFILE_API_RANDOM} from "@/lib/constants";
import {getLoggedInUser} from "@/hooks/use-fetchLoggedInUser.ts";
import { useLocation, useNavigate } from "react-router-dom";
import { ProfileInterface } from "@/lib/interfaces";
import { User, MessageCircle } from "lucide-react";
import {customFetch} from "@/api/customFetch.ts";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";

type NavProps = {
  currentProfile: ProfileInterface | null;
  setCurrentProfile: React.Dispatch<
    React.SetStateAction<ProfileInterface | null>
  >;
};

export default function Nav({ currentProfile, setCurrentProfile }: NavProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const loggedInUser = getLoggedInUser();

  const seedRandomProfile = async (id?: string) => {
    let profileData: Promise<ProfileInterface | null>;
    if (!id) {
      // profileData = GetRandomProfile(loggedInUser!.gender);
      profileData = customFetch<ProfileInterface>(PROFILE_API_RANDOM, "POST", {"gender": loggedInUser!.gender});
    } else {
      // profileData = GetProfileById(id);
      profileData = customFetch<ProfileInterface>(PROFILE_API_ID, "POST", {"id": id});
    }

    const [profile] = await Promise.all([profileData]);
    setCurrentProfile(profile);
  };

  useEffect(() => {
   if (
      loggedInUser &&
      !currentProfile &&
      location.pathname == "/profile"
    )
      seedRandomProfile();
  }, [currentProfile, location.pathname, loggedInUser]);

  return (
    <nav className="flex justify-between items-center mt-4 mb-6 w-full">
      
      <Button variant={"link"}
        className="cursor-pointer hover:text-[#7F43DF] hover:scale-105 hover:italic"
        disabled={!loggedInUser?.verified}
        onClick={() => navigate("/profile") }
        aria-label="Go to profiles"
      >
        <div className="flex flex-col items-center">
        <User className="w-8 h-8 md:w-10 md:h-10" />
        <h2 className="text-base md:text-lg text-gray-500">Profiles</h2>
        </div>
      </Button>

      
        <Button
          variant={"link"} 
          className="text-[#7F43DF] hover:scale-110 disabled:cursor-not-allowed"
          onClick={() => navigate("/userProfile")}
          aria-label="Go to user profile"
        >
          <div className="text-gray-500 flex items-center gap-2">
            <Avatar>
              <AvatarImage src={HOST + "/images/" + loggedInUser?.imageUrl} />
              <AvatarFallback>?</AvatarFallback>
            </Avatar>
            {loggedInUser?.firstName + " " + loggedInUser?.lastName}
          </div>
        </Button>

      <Button variant={"link"}
        className="hover:text-[#7F43DF] hover:scale-110"
        disabled={!loggedInUser?.verified}
        onClick={() => navigate("/match")}
        aria-label="Go to matches"
      ><div className="flex flex-col items-center">
        <MessageCircle className="cursor-pointer w-7 h-7 md:w-9 md:h-9" />
        <h2 className="text-base md:text-lg text-gray-500">Matches</h2>
        </div>
      </Button>
    </nav>
  );
}
