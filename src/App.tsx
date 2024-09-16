import { ConversationInterface, MatchInterface, ProfileInterface } from "@/lib/interfaces";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
import { Navigate, Routes, Route, useNavigate } from "react-router-dom";
import useLoggedInUserState from "@/hooks/use-loggedin-user-state";
import { GetRandomProfile, GetProfileById } from "@/api/profiles";
import ChatMessages from "@/components/chat-component";
import Profiles from "@/components/profile-component";
import Matches from "@/components/matches-component";
import UserProfile from "@/components/user-profile";
import { User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoutAuth } from "@/api/user-auth";
import { useEffect, useState } from "react";
import SignUp from "@/auth/sign-up";
import Login from "@/auth/login";

export default function Navigation() {
    const [isMatched, setIsMatched] = useState(false);
    const [matches, setMatches] = useState<MatchInterface[]>([] as MatchInterface[]);
    const [currentConversation, setCurrentConversation] = useState<ConversationInterface | null>(null);
    const [currentProfile, setCurrentProfile] = useState<ProfileInterface | null>(null);

    const { loggedInUser } = useLoggedInUserState();
    const navigate = useNavigate();

    const seedRandomProfile = async (id?: string) => {
        let profileData = {} as Promise<ProfileInterface>;
        if (!id) {
            profileData = GetRandomProfile();
        } else {
            profileData = GetProfileById(id);
        }

        const [profile] = await Promise.all([profileData]);
        setCurrentProfile(profile);
    }

    useEffect(() => {
        const autoLogoutOnClose = async (event: BeforeUnloadEvent) => {
            console.log("Auto logout on close");
            await LogoutAuth(loggedInUser?.userId!);
        }

        window.addEventListener('beforeunload', autoLogoutOnClose);

        if (!currentProfile) {
            seedRandomProfile();
        }

        return () => {
            window.removeEventListener('beforeunload', autoLogoutOnClose);
        }
    }, [loggedInUser, currentProfile]);

    const authRoute = (isAuthenticated: boolean) => {
        if (isAuthenticated) {
            return <Navigate to="/profile" replace />;
        } else {
            return <Login />;
        }
    }

    return (
        <div className='max-w-lg mx-auto mt-3'>
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
                        onClick={() => navigate('userProfile')}>
                        <p className='font-bold'>Rizz Master: </p>
                        {sessionStorage.getItem('firstName') + " " + sessionStorage.getItem('lastName')}
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

            <Routes>
                <Route path="/" element={authRoute(sessionStorage.length !== 0)} />
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />

                <Route path="/profile" element={<Profiles
                    profile={currentProfile}
                    setNextProfile={setCurrentProfile}
                    isMatchedState={{ isMatched, setIsMatched }}
                    matchSate={{ matches, setMatches }} />}
                />

                <Route path="/match" element={<Matches
                    setCurrentProfile={setCurrentProfile}
                    setCurrentConversation={setCurrentConversation}
                    matchState={{ matches, setMatches }} />}
                />

                <Route path="/chat" element={<ChatMessages currentConversation={currentConversation}
                    selectedProfile={currentProfile} />}
                />

                <Route path="/userProfile" element={<UserProfile
                    userProfile={loggedInUser} />}
                />
            </Routes>
        </div>
    );
}