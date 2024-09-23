import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import useLoggedInUserState from "@/hooks/use-loggedin-user-state";
import { PersonalityTypeInterface } from "@/lib/interfaces";
import { GetPersonalityTypes } from "@/api/personality-api";
import { ProfileForm, ProfileSchema } from "@/lib/utils";
import { UpdateUserProfile } from "@/api/profiles-api";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastAction } from "@/components/ui/toast";
import { Textarea } from "@/components/ui/textarea";
import { LogoutAuth } from "@/api/user-auth-api";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";

export default function UserProfile() {

    const loggedInUser = useLoggedInUserState();
    const navigate = useNavigate();

    const form = useForm<ProfileForm>({
        resolver: zodResolver(ProfileSchema),
        defaultValues: {
            userId: loggedInUser?.userId,
            firstName: loggedInUser?.firstName,
            lastName: loggedInUser?.lastName,
            age: loggedInUser?.age,
            ethnicity: loggedInUser?.ethnicity,
            gender: loggedInUser?.gender,
            bio: loggedInUser?.bio,
            imageUrl: loggedInUser?.imageUrl,
            myersBriggsPersonalityType: loggedInUser?.myersBriggsPersonalityType
        }
    });

    const [personalityTypes, setPersonalityTypes] = useState<PersonalityTypeInterface[]>([]);

    const getPersonalities = async () => {
        return await GetPersonalityTypes();
    };

    const onSubmit = async (data: ProfileForm) => {
        const result = ProfileSchema.safeParse(data);

        if (!result.success) {
            toast({
                title: "Validation failed.",
                description: result.error.message, variant: "destructive",
                action: <ToastAction altText="Retry">Retry</ToastAction>
            });
            return;
        }

        const updatedProfile = await UpdateUserProfile(result.data);

        if (!updatedProfile) {
            console.log('Failed to update profile');

            toast({
                title: "Failed to update profile",
                description: "Failed to update profile", variant: "destructive",
                action: <ToastAction altText="Retry">Retry</ToastAction>
            });

            return;
        }

        sessionStorage.clear();
        sessionStorage.setItem('loggedInUser', JSON.stringify(updatedProfile));
        navigate('/profile');

        toast({
            title: "Profile updated successfully",
            action: <ToastAction altText="Okay">Okay</ToastAction>
        });

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

    // TODO: change according to shadcn documentation and use Zod to falidate. Also need to change on the auth component.

    return (
        <Card>
            <CardHeader>
                <h2 className="text-2xl text-center border-b-2 p-4">User Profile for {loggedInUser?.firstName}</h2>
            </CardHeader>
            <CardContent>

                <Form {...form}>
                    <form className="flex flex-col gap-2" onSubmit={form.handleSubmit(onSubmit)}>

                        <FormField control={form.control} name="userId" render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="hidden" placeholder={loggedInUser?.userId} {...field} />
                                </FormControl>
                            </FormItem>
                        )}></FormField>

                        <FormField control={form.control} name="firstName" render={({ field }) => (
                            <FormItem>
                                <FormDescription>
                                    Your first name
                                </FormDescription>
                                <FormControl>
                                    <Input type="text" placeholder={loggedInUser?.firstName} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}></FormField>

                        <FormField control={form.control} name="lastName" render={({ field }) => (
                            <FormItem>
                                <FormDescription>
                                    Your last name
                                </FormDescription>
                                <FormControl>
                                    <Input type="text" placeholder={loggedInUser?.lastName} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}></FormField>

                        <FormField control={form.control} name="age" render={({ field }) => (
                            <FormItem>
                                <FormDescription>
                                    Your age
                                </FormDescription>
                                <FormControl>
                                    <Input type={"number"} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}></FormField>

                        <FormField control={form.control} name="ethnicity" render={({ field }) => (
                            <FormItem>
                                <FormDescription>
                                    Your ethnicity
                                </FormDescription>
                                <FormControl>
                                    <Input type="text" placeholder={loggedInUser?.ethnicity} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}></FormField>

                        <FormField control={form.control} name="bio" render={({ field }) => (
                            <FormItem>
                                <FormDescription>
                                    Your bio
                                </FormDescription>
                                <FormControl>
                                    <Textarea rows={5} placeholder={loggedInUser?.bio} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}></FormField>

                        <FormField control={form.control} name="imageUrl" render={({ field }) => (
                            <FormItem>
                                <FormDescription>
                                    Your image url
                                </FormDescription>
                                <FormControl>
                                    <Input type="text" placeholder={loggedInUser?.imageUrl} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}></FormField>

                        <FormField control={form.control} name="gender" render={({ field }) => (
                            <FormItem>
                                <FormDescription>
                                    Your Gender
                                </FormDescription>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue  />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="MALE">MALE</SelectItem>
                                        <SelectItem value="FEMALE">FEMALE</SelectItem>
                                    </SelectContent>
                                    <FormMessage />
                                </Select>
                            </FormItem>
                        )}></FormField>

                        <FormField control={form.control} name="myersBriggsPersonalityType" render={({ field }) => (
                            <FormItem>
                                <FormDescription>
                                    Your Myers Briggs Personality Type
                                </FormDescription>
                                <Select onValueChange={field.onChange} >
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder={personalityTypes.find((p) => p.id === loggedInUser?.myersBriggsPersonalityType)?.type} />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {personalityTypes.map((p) => (
                                            <SelectItem key={p.id} value={p.id}>
                                                {p.type}
                                            </SelectItem>
                                        )
                                        )}  </SelectContent>
                                    <FormMessage />
                                </Select>
                            </FormItem>
                        )}></FormField>

                        <Button type="submit" className="mt-3">Update Profile</Button>
                    </form>
                </Form>

            </CardContent>
            <CardFooter>
                <Button variant={"destructive"} className="w-full" onClick={() => handleLogout()}>
                    Log Out
                </Button>
            </CardFooter>
        </Card>
    );
}