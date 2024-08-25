import { createContext } from "react";
import { ProfileInterface } from "../lib/interfaces";

interface LoggedInUserContextProps {
    loggedInUser: ProfileInterface;
    updateLoggedInUser: (loggedInUser: ProfileInterface) => void;
}

const LoggedInUserContext = createContext<LoggedInUserContextProps>({} as LoggedInUserContextProps);

export default LoggedInUserContext;