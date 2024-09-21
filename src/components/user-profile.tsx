import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import useLoggedInUserState from "@/hooks/use-loggedin-user-state";
import { PersonalityTypeInterface, ProfileInterface } from "@/lib/interfaces";
import { LogoutAuth } from "@/api/user-auth-api";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { GetPersonalityTypes } from "@/api/personality-api";

export default function UserProfile() {

    const loggedInUser = useLoggedInUserState();
    const navigate = useNavigate();

    const [formData, setformData] = useState<ProfileInterface | null>(loggedInUser);
    const [personalityTypes, setPersonalityTypes] = useState<PersonalityTypeInterface[]>([]);

    const getPersonalities = async () => {
        return await GetPersonalityTypes();
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.currentTarget.reset();
        // await CreateNewUserProfile({ ...formData, [event.currentTarget.name]: event.currentTarget.value });
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setformData({ ...formData!, [event.target.id]: event.target.value });
    }

    const handleLogout = async () => {
        sessionStorage.clear();
        await LogoutAuth(loggedInUser!.userId);
        navigate('/login');
    };

    useEffect(() => {
        getPersonalities().then((data) => {
            setPersonalityTypes(data);
        });
    }, []);

    return (
        <Card>
            <CardHeader>
                <h2 className="text-2xl text-center border-b-2 p-4">User Profile for {loggedInUser?.firstName}</h2>
            </CardHeader>
            <CardContent>
                <form className="flex flex-col gap-2 text-gray-500" method="post" onSubmit={handleSubmit}>
                    <Input type="hidden" name="userId" value={loggedInUser?.userId} onChange={handleChange} />
                    <Input name="firstName" value={loggedInUser?.firstName} onChange={handleChange} />
                    <Input name="lastName" value={loggedInUser?.lastName} onChange={handleChange} />
                    <Input name="age" value={loggedInUser?.age} onChange={handleChange} />
                    <Input name="ethnicity" value={loggedInUser?.ethnicity} onChange={handleChange} />
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Choose your gender" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="MALE">Male</SelectItem>
                            <SelectItem value="FEMALE">Female</SelectItem>
                        </SelectContent>
                    </Select>
                    <Input name="bio" value={loggedInUser?.bio} onChange={handleChange} />
                    <Input name="imageUrl" value={loggedInUser?.imageUrl} onChange={handleChange} />
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue>{personalityTypes.find((p) => p.id === loggedInUser?.myersBriggsPersonalityType)?.type}</SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            {personalityTypes.map((p) => (
                                <SelectItem key={p.id} value={p.type}>
                                    {p.type}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Button type="submit">Update Profile</Button>
                </form>
            </CardContent>
            <CardFooter>
                <Button variant={"destructive"} onClick={() => handleLogout()}>
                    Log Out
                </Button>
            </CardFooter>
        </Card>
    );
}