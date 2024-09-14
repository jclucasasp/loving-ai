import { ProfileInterface, StateScreenTypes } from "@/lib/interfaces";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { LogoutAuth } from "@/api/user-auth";


type UserProfileProps = {
    userProfile: ProfileInterface | null
    setScreen: React.Dispatch<React.SetStateAction<StateScreenTypes>>;
}

export default function UserProfile({userProfile, setScreen}: UserProfileProps) {

    const handleLogout = async () => {
        sessionStorage.clear();
        await LogoutAuth(userProfile?.userId!);
        setScreen('login');
    };

    return (
        <Card>
            <CardHeader>
                <h2 className="text-2xl text-center border-b-2 p-4">User Profile for {userProfile?.firstName}</h2>
            </CardHeader>
            <CardContent>
                <p>Name: {userProfile?.firstName} {userProfile?.lastName}</p>
                <p>Age: {userProfile?.age}</p>
                <p>Ethnicity: {userProfile?.ethnicity}</p>
                <p>Gender: {userProfile?.gender}</p>
                <p>Bio: {userProfile?.bio}</p>
                <p>Myers-Briggs Personality Type: {userProfile?.myersBriggsPersonalityType}</p>
                <p>Image URL: {userProfile?.imageUrl}</p>
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