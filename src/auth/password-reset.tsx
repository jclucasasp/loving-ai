import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { OTPRequest } from "@/api/user-auth-api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";


// TODO: Use new backend implimentation api for otp and password reset
export default function PasswordReset() {

    const [ password, setPassword ] = useState("");

    const handlePasswordReset = async () => {
        console.log(`Password: [${password}]`);

        const res = await OTPRequest(password);
        console.log(res);
    }

    return (
        <section className="flex flex-col h-screen items-center justify-center">
            <Card className="max-w-sm">
                <CardHeader className="text-2xl italic text-center text-fuchsia-500">
                    Password Reset
                </CardHeader>
                <CardContent>
                    <Input onChange={(e) => setPassword(e.target.value)}>Enter your email address below to reset your password.</Input>
                </CardContent>
                <CardFooter>
                    <Button onClick={handlePasswordReset}>Reset Password</Button>
                </CardFooter>
            </Card>
        </section>
    )
}
