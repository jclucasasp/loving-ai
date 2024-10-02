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
            profileData = GetRandomProfile();
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
                <User className="w-10 h-10" />
                <h2 className="text-gray-500">Profiles</h2>
            </div>
            
            <div className="flex items-center">
            <Button variant={"link"} className="text-purple-400 hover:scale-105 hover:italic"
                onClick={() => navigate('/userProfile')}>
                <p className="text-gray-500" >
                    {"Rizz Master : " + loggedInUser?.firstName + " " + loggedInUser?.lastName}
                </p>
            </Button>
            </div>
            
            <div className="flex flex-col items-center cursor-pointer hover:text-purple-400 hover:scale-105 hover:italic" onClick={() => navigate('/match')}>
            <MessageCircle className="cursor-pointer w-9 h-9" />
            <h2 className="text-gray-500">Matches</h2>
            </div>
        </nav >
    );
}