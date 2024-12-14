import {
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { MatchInterface, ProfileInterface } from "@/lib/interfaces";
import useLoggedInUserState from "@/hooks/use-user-state";
import { lazy, Suspense, useState } from "react";
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
  useNavigate();

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
          {/* Public Routes */}
          {!loggedInUser || !loggedInUser.userId ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/personality" element={<Personality />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/reset" element={<PasswordReset />} />
              {/* Optionally redirect to /login if user is not logged in */}
              <Route path="*" element={<Navigate replace to="/" />} />
            </>
          ) : (
            <>
              {/* Private Routes for Verified Users */}
              {loggedInUser && loggedInUser.verified ? (
                <>
                  <Route
                    path="/profile"
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
                  {/* Optionally redirect to /profile if user is verified */}
                  <Route
                    path="*"
                    element={<Navigate replace to="/profile" />}
                  />
                </>
              ) : (
                <>
                  <Route path="/verify" element={<Verify />} />
                  {/* Optionally redirect to /verify if user is not verified */}
                  <Route path="*" element={<Navigate replace to="/verify" />} />
                  <Route path="/verify/activate" element={<VerifyActivate />} />
                </>
              )}
            </>
          )}
        </Routes>
      </Suspense>
    </div>
  );
}
