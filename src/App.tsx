import { Routes, Route, useNavigate, useBeforeUnload } from "react-router-dom";
import { MatchInterface, ProfileInterface } from "@/lib/interfaces";
import useLoggedInUserState from "@/hooks/use-loggedin-user-state";
import Personality from "@/components/personality-component";
import { useCallback, useEffect, useState } from "react";
import PasswordReset from "@/auth/password-reset";
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

//TODO: Handle fetch errors when the backend is down and redirect accordingly
export default function Navigation() {

    const [currentProfile, setCurrentProfile] = useState<ProfileInterface | null>(null);
    const [matches, setMatches] = useState<MatchInterface[]>([] as MatchInterface[]);
    const [isMatched, setIsMatched] = useState(false);

    const [lastActivityTime, setLastActivityTime] = useState(new Date().getTime());
    const [openAlert, setOpenAlert] = useState(false);

    const loggedInUser = useLoggedInUserState();
    const navigate = useNavigate();

    useBeforeUnload(useCallback(async () => {
        if (loggedInUser?.userId) {
            await LogoutAuth(loggedInUser?.userId!);
        }

    }, []));

    const removeEventListeners = () => {
        document.removeEventListener('mousemove', () => console.log('mouse move event handler removed'));
        document.removeEventListener('touchmove', () => console.log('touch move event handler removed'));
        document.removeEventListener('keydown', () => console.log('key down event handler removed'));
        // clearTimeout(timer);
    }

    const logOutUser = async () => {
        if (loggedInUser?.userId) {
            removeEventListeners();
            await LogoutAuth(loggedInUser?.userId!);
            navigate('/');
        }
    };

    // let timer: NodeJS.Timeout;

    // const checkIdle = () => {
    //     if (!loggedInUser || !lastActivityTime) return;

    //     console.log(`Last activity time: ${lastActivityTime}`);
    //     console.log(`Current time: ${new Date().getTime()}`);

    //     // check if the user has been in idle for 15 minutes
    //     if (new Date().getTime() - lastActivityTime >= (60 * 1000) * 15) {
    //         setOpenAlert(true);
    //     }

    // }

    // useEffect(() => {
    //     if (loggedInUser) {

    //         document.addEventListener('mousemove', () => setLastActivityTime(new Date().getTime()));
    //         document.addEventListener('touchmove', () => setLastActivityTime(new Date().getTime()));
    //         document.addEventListener('keydown', () => setLastActivityTime(new Date().getTime()));

    //         // check every minute if the user is idle
    //         timer = setInterval(checkIdle, (1000 * 60));

    //         return () => {
    //             removeEventListeners();
    //         }
    //     }

    //     // if (!loggedInUser) {
    //     //     navigate('/login');
    //     // }

    // }, [loggedInUser, openAlert]);

    return (
        <div className='max-w-lg mx-auto mt-3'>
            {
                loggedInUser && <>
                    <Nav currentProfile={currentProfile} setCurrentProfile={setCurrentProfile} />

                    <AlertDialog open={openAlert} >
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>No Activity Detected</AlertDialogTitle>
                                <AlertDialogDescription >
                                    You will be automatically logged out after 30 seconds. To continue browsing, please click on <span className="font-bold">Continue Browsing</span> or to log out click on <span className="font-bold">Log Out</span>.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel onClick={() => { setLastActivityTime(new Date().getTime()); setOpenAlert(false); }}>Continue Browsing</AlertDialogCancel>
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

                        <Route path="/chat" element={<ChatMessages />}
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