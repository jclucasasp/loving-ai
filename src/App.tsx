import { Routes, Route, useNavigate, useBeforeUnload, redirect } from "react-router-dom";
import { GetRandomProfile, GetProfileById } from "@/api/profiles-api";
import { MatchInterface, ProfileInterface } from "@/lib/interfaces";
import ChatMessages from "@/components/chat-component";
import Profiles from "@/components/profile-component";
import Matches from "@/components/matches-component";
import UserProfile from "@/components/user-profile";
import { LogoutAuth } from "@/api/user-auth-api";
import Nav from "@/components/nav-component";
import { useEffect, useState } from "react";
import SignUp from "@/auth/sign-up";
import Login from "@/auth/login";
import useLoggedInUserState from "./hooks/use-loggedin-user-state";

export default function Navigation() {

    const [isMatched, setIsMatched] = useState(false);
    const [matches, setMatches] = useState<MatchInterface[]>([] as MatchInterface[]);
    const [currentProfile, setCurrentProfile] = useState<ProfileInterface | null>(null);

    const navigate = useNavigate();
    const loggedInUser = useLoggedInUserState();

    useBeforeUnload(async () => {
        console.log("Auto logout on close");
        await LogoutAuth(sessionStorage.loggedInUser?.userId!);
        redirect('/');
    });

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

        if (!loggedInUser) {
            navigate('/');
        }

        if (loggedInUser && !currentProfile) {
            seedRandomProfile();
        }

    }, [currentProfile, loggedInUser]);

    return (
        <div className='max-w-lg mx-auto mt-3'>
            {loggedInUser && <Nav />}

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
                            matchState={{ matches, setMatches }} />}
                        />

                        <Route path="/chat" element={<ChatMessages
                            selectedProfile={currentProfile} />}
                        />

                        <Route path="/userProfile" element={<UserProfile />} />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Login />} errorElement={<div>Error</div>} />
                        <Route path="/signUp" element={<SignUp />} />
                    </>
                )
                }
            </Routes>
        </div>
    );
}