import { ProfileInterface } from "@/lib/interfaces";
import { createContext } from "react";

interface LoggedInUserContextProps {
    loggedInUser: ProfileInterface;
    updateLoggedInUser: (loggedInUser: ProfileInterface) => void;
}

const LoggedInUserContext = createContext<LoggedInUserContextProps>({} as LoggedInUserContextProps);

export default LoggedInUserContext;