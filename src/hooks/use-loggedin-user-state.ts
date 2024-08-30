import LoggedInUserContext from "../context/logged-in-user-context";
import { useContext } from "react";

//TODO: remove the hook and replace with localstorage
export default function useLoggedInUserState() {
    return useContext(LoggedInUserContext);
}