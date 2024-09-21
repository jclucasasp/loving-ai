import { ProfileInterface } from "@/lib/interfaces";

export default function useLoggedInUserState() {
    return sessionStorage.getItem("loggedInUser") ? JSON.parse(sessionStorage.loggedInUser) as ProfileInterface : null;
}