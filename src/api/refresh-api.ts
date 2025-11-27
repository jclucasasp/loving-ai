import {setAuthToken} from "@/hooks/use-auth-token.ts";
import {HOST} from "@/lib/constants.ts";

export default async function refreshApi() {
    await fetch(HOST + "/api/user/refresh", {
        method: "POST",
        credentials: "include"
    })
        .then((res) => {
            if (res.ok) {
                console.log("Refresh api call response: ", res.json())
                return res.json()
            }
            return null;
        })
        .then((data: { accessToken: string }) => {
            setAuthToken(data.accessToken);
            return true;
        })
        .catch(err => console.log(err));
    return false;
}