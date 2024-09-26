import { Routes, Route, useNavigate, useBeforeUnload } from "react-router-dom";
import { MatchInterface, ProfileInterface } from "@/lib/interfaces";
import useLoggedInUserState from "@/hooks/use-loggedin-user-state";
import Personality from "@/components/personality-component";
import ChatMessages from "@/components/chat-component";
import Profiles from "@/components/profile-component";
import Matches from "@/components/matches-component";
import UserProfile from "@/components/user-profile";
import { LogoutAuth } from "@/api/user-auth-api";
import Nav from "@/components/nav-component";
import { useEffect, useState } from "react";
import SignUp from "@/auth/sign-up";
import Login from "@/auth/login";

//TODO: Handle fetch errors when the backend is down and redirect accordingly
export default function Navigation() {

    const [isMatched, setIsMatched] = useState(false);
    const [matches, setMatches] = useState<MatchInterface[]>([] as MatchInterface[]);
    const [currentProfile, setCurrentProfile] = useState<ProfileInterface | null>(null);

    const navigate = useNavigate();
    const loggedInUser = useLoggedInUserState();

    //TODO: This triggers on every refresh, change it
    useBeforeUnload(async () => {
        if (loggedInUser?.userId) {
            await LogoutAuth(loggedInUser?.userId!);
        }
    });

    useEffect(() => {

        if (!loggedInUser) {
            navigate('/login');
        }

    }, [loggedInUser]);

    return (
        <div className='max-w-lg mx-auto mt-3'>
            {loggedInUser && <Nav currentProfile={currentProfile} setCurrentProfile={setCurrentProfile} />}

            <Routes>
                {loggedInUser ? (
                    <>
                        <Route path="/profile" errorElement={<div>Error</div>}
                            element={<Profiles
                                profile={currentProfile}
                                setNextProfile={setCurrentProfile}
                                isMatchedState={{ isMatched, setIsMatched }}
                                matchSate={{ matches, setMatches }} />}
                        />

                        <Route path="/match" element={<Matches
                            setCurrentProfile={setCurrentProfile}
                            setIsMatched={setIsMatched} />}
                        />

                        <Route path="/chat" element={<ChatMessages
                            selectedProfile={currentProfile} />}
                        />

                        <Route path="/userProfile" element={<UserProfile />} />
                    </>
                ) : (
                    <>
                        <Route path="/login" element={<Login />} errorElement={<div>Error</div>} />
                        <Route path="/personality" element={<Personality />} errorElement={<div>Error</div>} />
                        <Route path="/signUp" element={<SignUp />} />
                    </>
                )
                }

            </Routes>
        </div>
    );
}