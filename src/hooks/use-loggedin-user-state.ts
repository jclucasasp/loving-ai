import LoggedInUserContext from "@/context/logged-in-user-context";
import { useContext } from "react";

export default function useLoggedInUserState() {
    return useContext(LoggedInUserContext);
}