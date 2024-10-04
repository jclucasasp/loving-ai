import { Routes, Route, useNavigate, useBeforeUnload, useLocation } from "react-router-dom";
import { MatchInterface, ProfileInterface } from "@/lib/interfaces";
import useLoggedInUserState from "@/hooks/use-loggedin-user-state";
import Personality from "@/components/personality-component";
import { useCallback, useEffect, useState } from "react";
import { LogoutAuth } from "@/api/user-auth-api";
import Nav from "@/components/nav-component";
import ChatMessages from "@/pages/chat";
import UserProfile from "@/pages/user";
import Profiles from "@/pages/profile";
import Matches from "@/pages/matches";
import {
    AlertDialog, AlertDialogAction,
    AlertDialogCancel, AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader, AlertDialogTitle
} from "@/components/ui/alert-dialog";
import SignUp from "@/auth/sign-up";
import Login from "@/auth/login";
import PasswordReset from "./auth/password-reset";

//TODO: Handle fetch errors when the backend is down and redirect accordingly
export default function Navigation() {

    const [matches, setMatches] = useState<MatchInterface[]>([] as MatchInterface[]);
    const [currentProfile, setCurrentProfile] = useState<ProfileInterface | null>(null);
    const [isMatched, setIsMatched] = useState(false);
    const [open, setOpen] = useState(false);

    const loggedInUser = useLoggedInUserState();
    const navigate = useNavigate();
    const location = useLocation();

    useBeforeUnload(useCallback(async () => {
        if (loggedInUser?.userId) {
            await LogoutAuth(loggedInUser?.userId!);
        }
    }, []));

    const logOutUser = async () => {
        await LogoutAuth(loggedInUser?.userId!);
        sessionStorage.clear();
        clearTimeout(timer);
        navigate('/');
    };

    let timer: NodeJS.Timeout;
    // Log user out after 10 seconds if no option is chosen from model. Change this to look for typing and mouse movements.
    //TODO: Need to change to detect mouse movement and typing
    const alertDialogAction = () => {
        timer = setTimeout(() => {
            logOutUser();
            setOpen(false);
        }, (1000 * 10));
    }

    useEffect(() => {
        // After inactivity of 15 minutes, prompt user to log out or continue browsing
        if (loggedInUser) {
            timer = setTimeout(() => {
                setOpen(true);
                alertDialogAction();
            }, (1000 * 60) * 15);
        }

        // if (!loggedInUser) {
        //     navigate('/login');
        // }

        if (loggedInUser) {
            return () => {
                clearTimeout(timer);
            };
        }

    }, [loggedInUser, location]);

    return (
        <div className='max-w-lg mx-auto mt-3'>
            {
                loggedInUser && <>
                    <Nav currentProfile={currentProfile} setCurrentProfile={setCurrentProfile} />

                    <AlertDialog open={open} >
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>No Activity Detected</AlertDialogTitle>
                                <AlertDialogDescription >
                                    You will be automatically logged out after 30 seconds. To continue browsing, please click on <span className="font-bold">Continue Browsing</span> or to log out click on <span className="font-bold">Log Out</span>.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel onClick={() => { clearTimeout(timer); setOpen(false); }}>Continue Browsing</AlertDialogCancel>
                                <AlertDialogAction onClick={() => logOutUser()}>Log out</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </>
            }

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

                        <Route path="/chat" element={<ChatMessages/>}
                        />

                        <Route path="/userProfile" element={<UserProfile />} />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Login />} errorElement={<div>Error</div>} />
                        <Route path="/personality" element={<Personality />} errorElement={<div>Error</div>} />
                        <Route path="/signUp" element={<SignUp />} />
                        <Route path="/reset" element={<PasswordReset />} />
                    </>
                )
                }

            </Routes>
        </div>
    );
}