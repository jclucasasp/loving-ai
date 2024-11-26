import { Routes, Route, useNavigate, useBeforeUnload } from "react-router-dom";
import { MatchInterface, ProfileInterface } from "@/lib/interfaces";
import useLoggedInUserState from "@/hooks/use-user-state";
import Personality from "@/components/personality-component";
import VerifyActivate from "@/auth/verify-activate";
import PasswordReset from "@/auth/password-reset";
import { LogoutAuth } from "@/api/user-auth-api";
import { useCallback, useState } from "react";
import Nav from "@/components/nav-component";
import ChatMessages from "@/pages/chat";
import UserProfile from "@/pages/user-profile";
import Profiles from "@/pages/profile";
import Matches from "@/pages/matches";
import SignUp from "@/auth/sign-up";
import Verify from "@/auth/verify";
import Login from "@/auth/login";
import Home from "@/pages/home";

export default function Navigation() {
  const [currentProfile, setCurrentProfile] = useState<ProfileInterface | null>(
    null
  );
  const [matches, setMatches] = useState<MatchInterface[]>(
    [] as MatchInterface[]
  );
  const [isMatched, setIsMatched] = useState(false);

  const loggedInUser = useLoggedInUserState();
  useNavigate();

  useBeforeUnload(
    useCallback(async () => {
      if (loggedInUser?.userId) {
        await LogoutAuth(loggedInUser?.userId!);
      }
    }, [])
  );

  return (
    <div className="max-w-md sm:max-w-lg md:max-w-xl mx-auto mt-3">
      {loggedInUser && (
        <>
          <Nav
            currentProfile={currentProfile}
            setCurrentProfile={setCurrentProfile}
          />
        </>
      )}

      <Routes>
        {loggedInUser?.verified && (
          <>
            <Route
              path="/profile"
              errorElement={<div>Error</div>}
              element={
                <Profiles
                  profile={currentProfile}
                  setNextProfile={setCurrentProfile}
                  isMatchedState={{ isMatched, setIsMatched }}
                  matchSate={{ matches, setMatches }}
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

            <Route path="/chat" element={<ChatMessages />} />
            <Route path="/userProfile" element={<UserProfile />} />
          </>
        )}
        ;
        {!loggedInUser?.verified && (
          <>
            <Route path="/verify" element={<Verify />} />
            <Route path="/verify/activate" element={<VerifyActivate />} />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/*" element={<Verify />} />
          </>
        )};

        {!loggedInUser && (
          <>
            <Route
              path="/"
              element={<Home />}
              errorElement={<div>Error</div>}
            />
            <Route
              path="/login"
              element={<Login />}
              errorElement={<div>Error</div>}
            />
            <Route
              path="/personality"
              element={<Personality />}
              errorElement={<div>Error</div>}
            />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/reset" element={<PasswordReset />} />
            <Route path="/*" element={<Login />} />
          </>
        )}
      </Routes>
    </div>
  );
}
