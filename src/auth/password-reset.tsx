import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PasswordResetForm, PasswordRestSchema } from "@/lib/utils";
import { VerifyAndResetPassword } from "@/api/user-auth-api";
import { useLocation, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";

export default function PasswordReset() {

    const { email } = useLocation().state as { email: string } || { "email": "" };
    const navigate = useNavigate();

    const form = useForm<PasswordResetForm>({
        resolver: zodResolver(PasswordRestSchema),
        defaultValues: {
            email: email,
            otp: "",
            password: "",
            confirm: "",
        }
    });

    const onSubmit = async (data: PasswordResetForm) => {

        const res = PasswordRestSchema.safeParse(data);

        if (!res.success) {
            toast({
                title: "Validation failed.",
                description: res.error.message, variant: "destructive",
                action: <ToastAction altText="Retry">Retry</ToastAction>,
                duration: 3000
            })
            return;
        }

        const result = await VerifyAndResetPassword(data.email, data.otp, data.password);
        if (!result || result.status == 401 ) {
            toast({
                title: 'OTP verification failed.',
                description: 'Either your OTP is invalid or have expired.',
                variant: 'destructive',
                duration: 3000
            });
            return;
        }

        if (result.status >= 500) {
            toast({
                title: 'Error resetting password.',
                description: 'Please try again. If the problem persists, please email us on lovingaiteam@gmail.com.',
                variant: 'destructive',
                action: <ToastAction altText="Okay">Okay</ToastAction>,
                duration: 7000
            });
            return;
        }

        navigate('/login', { state: { email: data.email, password: data.password } });
    }


    return (
        <section className="flex flex-col h-screen items-center justify-center">
            <Card className="max-w-sm">
                <CardHeader className="text-2xl italic text-center text-fuchsia-500">
                    Password Reset
                </CardHeader>
                <CardContent>

                    <Form {...form} >
                        < form className='flex flex-col gap-2' onSubmit={form.handleSubmit(onSubmit)}>

                            <FormField name="email" control={form.control} render={({ field }) => (
                                <FormItem hidden>
                                    <Label htmlFor="email">Email</Label>
                                    <FormControl>
                                        <Input {...field} id="email" type="email" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}></FormField>

                            <FormField name="otp" control={form.control} render={({ field }) => (
                                <FormItem >
                                    <Label htmlFor="otp">OTP</Label>
                                    <FormControl>
                                        <InputOTP maxLength={6} {...field}>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={0} />
                                                <InputOTPSlot index={1} />
                                                <InputOTPSlot index={2} />
                                            </InputOTPGroup>
                                            <InputOTPSeparator />
                                            <InputOTPGroup>
                                                <InputOTPSlot index={3} />
                                                <InputOTPSlot index={4} />
                                                <InputOTPSlot index={5} />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}></FormField>

                            <FormField name="password" control={form.control} render={({ field }) => (
                                <FormItem>
                                    <Label htmlFor="password">Password</Label>
                                    <FormControl>
                                        <Input {...field} id="password" type="password" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}></FormField>

                            <FormField name="confirm" control={form.control} render={({ field }) => (
                                <FormItem>
                                    <Label htmlFor="confirm">Confirm Password</Label>
                                    <FormControl>
                                        <Input {...field} id="confirm" type="password" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}></FormField>

                            <Button type='submit' variant='secondary'
                                className='border w-full rounded-full mt-6 p-2'>
                                Reset
                            </Button>
                        </form>
                    </Form>

                </CardContent>
            </Card>
        </section>
    )
}
