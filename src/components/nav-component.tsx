import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
import { GetRandomProfile, GetProfileById } from "@/api/profiles-api";
import { ProfileInterface } from "@/lib/interfaces";
import { User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type NavProps = {
    currentProfile: ProfileInterface | null;
    setCurrentProfile: React.Dispatch<React.SetStateAction<ProfileInterface | null>>
}

export default function Nav({currentProfile, setCurrentProfile}: NavProps) {

    const navigate = useNavigate();

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
        if (loggedInUser && !currentProfile) {
            seedRandomProfile();
        }
    },[currentProfile])

    return (
        <nav className='flex justify-between mb-6'>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger >
                        <User className='cursor-pointer w-8 h-8 hover:w-9 hover:h-9' onClick={() => navigate('/profile')} />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Profiles</p>
                    </TooltipContent>
                </Tooltip>

                <Button variant={"link"} className='text-purple-400'
                    onClick={() => navigate('/userProfile')}>
                    <p className='font-bold'>
                        {"Rizz Master : " + loggedInUser?.firstName + " " + loggedInUser?.lastName}
                    </p>
                </Button>

                <div className='w-9 h-9' />
                <Tooltip>
                    <TooltipTrigger>
                        <MessageCircle className='cursor-pointer w-8 h-8 hover:w-9 hover:h-9' onClick={() => navigate('/match')} />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Matches</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </nav>
    );
}