import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ResetPassword from "@/api/send";


export default function PasswordReset() {

    const handlePasswordReset = async () => {
        const res = await ResetPassword();
        console.log(res);
    }

    return (
        <section className="flex flex-col h-screen items-center justify-center">
            <Card className="max-w-sm">
                <CardHeader className="text-2xl italic text-center text-fuchsia-500">
                    Password Reset
                </CardHeader>
                <CardContent>
                    <p>Enter your email address below to reset your password.</p>
                </CardContent>
                <CardFooter>
                    <Button onClick={handlePasswordReset}>Reset Password</Button>
                </CardFooter>
            </Card>
        </section>
    )
}
