import LoggedInUserContext from "../context/logged-in-user-context";
import { useContext } from "react";

export default function setLoggedInUserProfile() {
    return useContext(LoggedInUserContext);
}