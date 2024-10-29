import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GetRandomProfile, GetProfileById } from "@/api/profiles-api";
import { useLocation, useNavigate } from "react-router-dom";
import { ProfileInterface } from "@/lib/interfaces";
import { User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

type NavProps = {
    currentProfile: ProfileInterface | null;
    setCurrentProfile: React.Dispatch<React.SetStateAction<ProfileInterface | null>>
}

export default function Nav({ currentProfile, setCurrentProfile }: NavProps) {

    const navigate = useNavigate();
    const location = useLocation();

    const loggedInUser = JSON.parse(sessionStorage.loggedInUser);

    const seedRandomProfile = async (id?: string) => {
        let profileData: Promise<ProfileInterface | null>;
        if (!id) {
            profileData = GetRandomProfile(loggedInUser?.gender);
        } else {
            profileData = GetProfileById(id);
        }

        const [profile] = await Promise.all([profileData]);
        setCurrentProfile(profile);
    }

    useEffect(() => {
        if (loggedInUser && !currentProfile && location.pathname == "/profile") {
            seedRandomProfile();
        }
    }, [currentProfile, location.pathname])

    return (
        <nav className="flex mb-2 justify-between">
            <div className="flex flex-col items-center cursor-pointer hover:text-purple-400 hover:scale-105 hover:italic" onClick={() => navigate('/profile')}>
                <User className="w-8 h-8 md:w-10 md:h-10" />
                <h2 className="text-sm md:text-base text-gray-500">Profiles</h2>
            </div>

            <div className="flex items-center">
                <Button variant={"link"} className="text-purple-400 hover:scale-105 hover:italic"
                    onClick={() => navigate('/userProfile')}>
                    <div className="text-gray-500 flex items-center gap-2" >
                        <Avatar>
                            <AvatarImage src={"http://localhost:8080/images/" + loggedInUser?.imageUrl} />
                            <AvatarFallback>?</AvatarFallback>
                        </Avatar>
                        {loggedInUser?.firstName + " " + loggedInUser?.lastName}
                    </div>
                </Button>
            </div>

            <div className="flex flex-col items-center cursor-pointer hover:text-purple-400 hover:scale-105 hover:italic" onClick={() => navigate('/match')}>
                <MessageCircle className="cursor-pointer w-7 h-7 md:w-9 md:h-9" />
                <h2 className="text-sm md:text-base text-gray-500">Matches</h2>
            </div>
        </nav >
    );
}