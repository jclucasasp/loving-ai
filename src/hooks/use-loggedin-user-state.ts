
export default function useLoggedInUserState() {
    return sessionStorage.getItem("loggedInUser") ? JSON.parse(sessionStorage.loggedInUser) : null;
}