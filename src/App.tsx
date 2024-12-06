import { Routes, Route, useNavigate, useBeforeUnload } from "react-router-dom";
import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { MatchInterface, ProfileInterface } from "@/lib/interfaces";
import useLoggedInUserState from "@/hooks/use-user-state";
import { LogoutAuth } from "@/api/user-auth-api";
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

  const loggedInUser = useLoggedInUserState();
  const navigate = useNavigate();

  useBeforeUnload(
    useCallback(async () => {
      if (loggedInUser?.userId) {
        await LogoutAuth(loggedInUser?.userId!);
      }
    }, [])
  );

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/");
    }
  }, [loggedInUser?.userId]);

  // Lazy-load components
  const Personality = lazy(() => import("@/components/personality-component"));
  const VerifyActivate = lazy(() => import("@/auth/verify-activate"));
  const PasswordReset = lazy(() => import("@/auth/password-reset"));
  const UserProfile = lazy(() => import("@/pages/user-profile"));
  const ChatMessages = lazy(() => import("@/pages/chat"));
  // const Profiles = lazy(() => import("@/pages/profile"));
  const Matches = lazy(() => import("@/pages/matches"));
  const SignUp = lazy(() => import("@/auth/sign-up"));
  const Verify = lazy(() => import("@/auth/verify"));
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
          )}
          ;
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
      </Suspense>
    </div>
  );
}
