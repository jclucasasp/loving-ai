import { useState } from "react";
import LoggedInUserContext from "./logged-in-user-context";
import { ProfileInterface } from "../lib/interfaces";


export default function LoggedInUserProvider({ children }: { children: React.ReactNode }) {

    const [loggedInUser, setLoggedInUser] = useState<ProfileInterface>({} as ProfileInterface);

    const updateLoggedInUser = (loggedInUser: ProfileInterface) => {
        setLoggedInUser(loggedInUser);
    }

    return (
        <LoggedInUserContext.Provider value={{loggedInUser, updateLoggedInUser}}>
            {children}
        </LoggedInUserContext.Provider>
    );
}