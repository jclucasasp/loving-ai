import { ProfileInterface } from "@/lib/interfaces";
import { createContext } from "react";

interface LoggedInUserContextProps {
    loggedInUser: ProfileInterface | null;
    updateLoggedInUser: (loggedInUser: ProfileInterface | null) => void;
}

const LoggedInUserContext = createContext<LoggedInUserContextProps>(sessionStorage.loggedInUser);

export default LoggedInUserContext;