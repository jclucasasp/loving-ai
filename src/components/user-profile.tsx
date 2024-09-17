import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { LogoutAuth } from "@/api/user-auth-api";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ProfileInterface } from "@/lib/interfaces";

export default function UserProfile() {
    const navigate = useNavigate();
    const loggedInUser: ProfileInterface = JSON.parse(sessionStorage.loggedInUser);

    const handleLogout = async () => {
        sessionStorage.clear();
        await LogoutAuth(loggedInUser?.userId!);
        navigate('/');
    };

    return (
        <Card>
            <CardHeader>
                <h2 className="text-2xl text-center border-b-2 p-4">User Profile for {loggedInUser?.firstName}</h2>
            </CardHeader>
            <CardContent>
                <p>Name: {loggedInUser?.firstName} {loggedInUser?.lastName}</p>
                <p>Age: {loggedInUser?.age}</p>
                <p>Ethnicity: {loggedInUser?.ethnicity}</p>
                <p>Gender: {loggedInUser?.gender}</p>
                <p>Bio: {loggedInUser?.bio}</p>
                <p>Myers-Briggs Personality Type: {loggedInUser?.myersBriggsPersonalityType}</p>
                <p>Image URL: {loggedInUser?.imageUrl}</p>
            </CardContent>
            <CardFooter>
                <Button variant={"destructive"}
                onClick={() => handleLogout()}>
                    Log Out
                    </Button>
            </CardFooter>
        </Card>
    );
}