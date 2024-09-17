import LoggedInUserContext from "@/context/logged-in-user-context";
import { ProfileInterface } from "@/lib/interfaces";
import { useState } from "react";


export default function LoggedInUserProvider({ children }: { children: React.ReactNode }) {

    const [loggedInUser, setLoggedInUser] = useState<ProfileInterface | null>(null);

    const updateLoggedInUser = (loggedInUser: ProfileInterface | null) => {

        if (loggedInUser && loggedInUser.userId.length > 0) {
            sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
            
            setLoggedInUser(loggedInUser);
          }

          if (sessionStorage.loggedInUser && sessionStorage.loggedInUser.length > 0) {
            setLoggedInUser(JSON.parse(sessionStorage.loggedInUser));
          }
    }

    return (
        <LoggedInUserContext.Provider value={{loggedInUser, updateLoggedInUser}}>
            {children}
        </LoggedInUserContext.Provider>
    );
}