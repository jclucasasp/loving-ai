import { Routes, Route, useNavigate, useBeforeUnload, useLocation } from "react-router-dom";
import { MatchInterface, ProfileInterface } from "@/lib/interfaces";
import useLoggedInUserState from "@/hooks/use-loggedin-user-state";
import Personality from "@/components/personality-component";
import { useCallback, useEffect, useState } from "react";
import ChatMessages from "@/components/chat-component";
import Profiles from "@/components/profile-component";
import Matches from "@/components/matches-component";
import UserProfile from "@/components/user-profile";
import { LogoutAuth } from "@/api/user-auth-api";
import Nav from "@/components/nav-component";
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

    const [isMatched, setIsMatched] = useState(false);
    const [open, setOpen] = useState(false);
    const [matches, setMatches] = useState<MatchInterface[]>([] as MatchInterface[]);
    const [currentProfile, setCurrentProfile] = useState<ProfileInterface | null>(null);

    const navigate = useNavigate();
    const location = useLocation();
    const loggedInUser = useLoggedInUserState();

    useBeforeUnload(useCallback(async () => {
        if (loggedInUser?.userId) {
            await LogoutAuth(loggedInUser?.userId!);
        }
    }, []));

    const logOutUser = async () => {
        await LogoutAuth(loggedInUser?.userId!);
        sessionStorage.clear();
        navigate('/');
    };

    //TODO: Move this to the navigation component. It needs to be cancelled somehow after once continue browsing gets clicked.
    const alertDialogAction = () => {
        setTimeout(() => {
            logOutUser();
            setOpen(false);
        }, (1000 * 10));
    }

    useEffect(() => {

        let timer: NodeJS.Timeout;

        if (loggedInUser) {
            timer = setTimeout(() => {
                setOpen(true);
                alertDialogAction();
            }, (1000 * 10));
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
                                    You will be automatically logged out after 30 seconds. To continue browsing, please click on <span className="font-bold">Contiunue Browsing</span> or to log out click on <span className="font-bold">Log Out</span>.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel onClick={() => setOpen(false)}>Continue Browsing</AlertDialogCancel>
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

                        <Route path="/chat" element={<ChatMessages
                            selectedProfile={currentProfile} />}
                        />

                        <Route path="/userProfile" element={<UserProfile />} />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Login />} errorElement={<div>Error</div>} />
                        <Route path="/personality" element={<Personality />} errorElement={<div>Error</div>} />
                        <Route path="/signUp" element={<SignUp />} />
                    </>
                )
                }

            </Routes>
        </div>
    );
}