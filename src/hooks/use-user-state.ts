import { ProfileInterface } from "@/lib/interfaces";

export default function useLoggedInUserState() {
    
    return sessionStorage.getItem("loggedInUser") ? JSON.parse(atob(sessionStorage.loggedInUser)) as ProfileInterface : null;
}