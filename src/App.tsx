import {
    Routes,
    Route,
    useNavigate,
    Navigate,
} from "react-router-dom";
import {MatchInterface, ProfileInterface} from "@/lib/interfaces";
import {getLoggedInUser} from "@/hooks/use-fetchLoggedInUser.ts";
import {lazy, Suspense, useState} from "react";
import Nav from "@/components/nav-component";
import Profiles from "@/pages/profile";

export default function Navigation() {
    const [currentProfile, setCurrentProfile] = useState<ProfileInterface | null>(
        null
    );
    const [matches, setMatches] = useState<MatchInterface[]>(
        [] as MatchInterface[]
    );
    const [isMatched, setIsMatched] = useState(false);

    const loggedInUser = getLoggedInUser();
    useNavigate();

    // Lazy-load components
    const Personality = lazy(() => import("@/components/personality-component"));
    const VerifyActivate = lazy(() => import("@/auth/verify-activate"));
    const PasswordReset = lazy(() => import("@/auth/password-reset"));
    const UserProfile = lazy(() => import("@/pages/user-profile"));
    const ChatMessages = lazy(() => import("@/pages/chat"));
    // const Profiles = lazy(() => import("@/pages/profile"));
    const Matches = lazy(() => import("@/pages/matches"));
    const Privacy = lazy(() => import("@/pages/privacy"));
    const SignUp = lazy(() => import("@/auth/sign-up"));
    const Verify = lazy(() => import("@/auth/verify"));
    const Terms = lazy(() => import("@/pages/terms"));
    const Login = lazy(() => import("@/auth/login"));
    const Home = lazy(() => import("@/pages/home"));

    return (
        <div className="flex flex-col items-center m-auto max-w-[750px] p-2">
            {loggedInUser && (
                <>
                    <Nav
                        currentProfile={currentProfile}
                        setCurrentProfile={setCurrentProfile}
                    />
                </>
            )}

            <Suspense fallback={<></>}>
                <Routes>
                    {/* Case 1: Not Logged In */}
                    {!loggedInUser || !loggedInUser.userId ? (
                            <>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="/personality" element={<Personality/>}/>
                                <Route path="/signUp" element={<SignUp/>}/>
                                <Route path="/reset" element={<PasswordReset/>}/>
                                <Route path="/privacy" element={<Privacy/>}/>
                                <Route path="/terms" element={<Terms/>}/>
                                <Route path="/*" element={<Navigate replace to="/"/>}/>
                            </>
                        ) : /* Case 2: Logged In but Not Verified */
                        !loggedInUser.verified ? (
                            <>
                                <Route path="/verify" element={<Verify/>}/>
                                <Route path="/verify/activate" element={<VerifyActivate/>}/>
                                <Route path="*" element={<Navigate replace to="/verify"/>}/>
                            </>
                        ) : (
                            /* Case 3: Logged In and Verified */
                            <>
                                <Route
                                    path="/profile"
                                    element={
                                        <Profiles
                                            profile={currentProfile}
                                            setNextProfile={setCurrentProfile}
                                            isMatchedState={{isMatched, setIsMatched}}
                                            matchSate={{matches, setMatches}}
                                        />
                                    }
                                />
                                <Route
                                    path="/match"
                                    element={
                                        <Matches
                                            setCurrentProfile={setCurrentProfile}
                                            setIsMatched={setIsMatched}
                                        />
                                    }
                                />
                                <Route path="/chat" element={<ChatMessages/>}/>
                                <Route path="/userProfile" element={<UserProfile/>}/>
                                <Route path="*" element={<Navigate replace to="/profile"/>}/>
                            </>
                        )}
                </Routes>
            </Suspense>
        </div>
    );
}
