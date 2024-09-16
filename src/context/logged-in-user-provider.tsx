import LoggedInUserContext from "@/context/logged-in-user-context";
import { ProfileInterface } from "@/lib/interfaces";
import { useState } from "react";


export default function LoggedInUserProvider({ children }: { children: React.ReactNode }) {

    const [loggedInUser, setLoggedInUser] = useState<ProfileInterface>({} as ProfileInterface);

    const updateLoggedInUser = (loggedInUser: ProfileInterface) => {

        if (loggedInUser && loggedInUser.userId.length > 0) {
            sessionStorage.setItem('userId', loggedInUser.userId);
            sessionStorage.setItem("firstName", loggedInUser.firstName);
            sessionStorage.setItem("lastName", loggedInUser.lastName);
            
            setLoggedInUser(loggedInUser);
          }
    }

    return (
        <LoggedInUserContext.Provider value={{loggedInUser, updateLoggedInUser}}>
            {children}
        </LoggedInUserContext.Provider>
    );
}