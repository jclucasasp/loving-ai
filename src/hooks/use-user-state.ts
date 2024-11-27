import { ProfileInterface } from "@/lib/interfaces";

export default function useLoggedInUserState() {
    
    try {
        return sessionStorage.getItem("loggedInUser") ? JSON.parse(atob(sessionStorage.getItem("loggedInUser")!)) as ProfileInterface : null    
    } catch (error) {
        console.error(error);
    }
}