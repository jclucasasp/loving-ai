import {ProfileInterface} from "@/lib/interfaces";

export function getLoggedInUser() {
    return sessionStorage.getItem("loggedInUser") ? JSON.parse(atob(sessionStorage.getItem("loggedInUser")!)) as ProfileInterface : null
}

export function setLoggedInUser(user: ProfileInterface) {
    if (user)  sessionStorage.setItem("loggedInUser", btoa(JSON.stringify(user)));
}