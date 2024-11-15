import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GetRandomProfile, GetProfileById } from "@/api/profiles-api";
import useLoggedInUserState from "@/hooks/use-loggedin-user-state";
import { useLocation, useNavigate } from "react-router-dom";
import { ProfileInterface } from "@/lib/interfaces";
import { User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { HOST } from "@/lib/constants";

type NavProps = {
  currentProfile: ProfileInterface | null;
  setCurrentProfile: React.Dispatch<
    React.SetStateAction<ProfileInterface | null>
  >;
};

export default function Nav({ currentProfile, setCurrentProfile }: NavProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const loggedInUser = useLoggedInUserState();

  if (loggedInUser && !loggedInUser.verified) {
  }

  const seedRandomProfile = async (id?: string) => {
    let profileData: Promise<ProfileInterface | null>;
    if (!id) {
      profileData = GetRandomProfile(loggedInUser!.gender);
    } else {
      profileData = GetProfileById(id);
    }

    const [profile] = await Promise.all([profileData]);
    setCurrentProfile(profile);
  };

  useEffect(() => {
    if (loggedInUser && !loggedInUser.verified) {
      navigate("/verify");
    } else if (
      loggedInUser &&
      !currentProfile &&
      location.pathname == "/profile"
    )
      seedRandomProfile();
  }, [currentProfile, location.pathname]);

  return (
    <nav className="flex justify-between items-center mt-4">
      
      <Button variant={"link"}
        className="cursor-pointer hover:text-purple-400 hover:scale-105 hover:italic"
        disabled={!loggedInUser?.verified}
        onClick={() => navigate("/profile") }
      >
        <div className="flex flex-col items-center">
        <User className="w-8 h-8 md:w-10 md:h-10" />
        <h2 className="text-base md:text-lg text-gray-500">Profiles</h2>
        </div>
      </Button>

      
        <Button
          variant={"link"} disabled={!loggedInUser?.verified}
          className="text-purple-400 hover:scale-105 hover:italic disabled:cursor-not-allowed"
          onClick={() => navigate("/userProfile")}
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
        className="cursor-pointer hover:text-purple-400 hover:scale-105 hover:italic"
        disabled={!loggedInUser?.verified}
        onClick={() => navigate("/match")}
      ><div className="flex flex-col items-center">
        <MessageCircle className="cursor-pointer w-7 h-7 md:w-9 md:h-9" />
        <h2 className="text-base md:text-lg text-gray-500">Matches</h2>
        </div>
      </Button>
    </nav>
  );
}
