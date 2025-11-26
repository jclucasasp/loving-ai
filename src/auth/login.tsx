import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginAuth, OTPRequest } from "@/api/user-auth-api";
import { LoginForm, LoginFormSchema } from "@/lib/utils";
import { setAuthToken } from "@/hooks/use-auth-token.ts";
import SkeletonCard from "@/components/skeleton-card";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastAction } from "@/components/ui/toast";
import { LoaderCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import {setLoggedInUser} from "@/hooks/use-fetchLoggedInUser.ts";

export default function Login() {

  const { email, password } = useLocation().state as { email: string, password: string } || { "email": "", "password": "" };

  const [loadingOTP, setLoadingOTP] = useState(false);
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const form = useForm<LoginForm>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: email,
      password: password
    }
  });

  const navigate = useNavigate();

  const onSubmit = (data: LoginForm) => {
    const result = LoginFormSchema.safeParse(data);

    if (!result.success) {
      return;
    }

    handleLogin(result.data);
  }

  const handleLogin = async (formData: LoginForm) => {

    setLoading(true);
    const data = await LoginAuth(formData.email, formData.password);
    setLoading(false);

    if (!data) {
      toast({
        title: "Login Failed",
        variant: "destructive",
        action: <ToastAction altText="Retry" >Retry</ToastAction>,
        duration: 3000
      });
      return;
    }

    setLoggedInUser(data.profile);
    // sessionStorage.setItem("loggedInUser", btoa(JSON.stringify(data.profile)));
    setAuthToken(data.ACCESS_TOKEN);

    navigate("/profile");
  }

  const handleReset = async (data: LoginForm) => {
    const emailSchema = z.string({ required_error: "Email is required" }).email({ message: "Must be a valid email" });
    
    const res = emailSchema.safeParse(data.email);
    
    if (!res.success) {
      toast({
        title: "Please enter a valid email.",
        variant: "destructive",
        duration: 3000
      });
      return;
    }
    
    setLoadingOTP(true);
    const otpRes = await OTPRequest(res.data);
    setLoadingOTP(false);

    if (otpRes && otpRes.status >= 400 && otpRes.status < 500) {
      toast({
        title: "Email does not exist",
        description: "Please check if you have a typo in your email. If you are new here, you need to sign up first.",
        variant: "destructive",
        action: <ToastAction altText="Okay">Okay</ToastAction>,
        duration: 5000
      });
      return;
    }
    
    if (!otpRes || otpRes.status >= 500) {
      toast({
        title: "Error sending OTP.",
        description: "Please try again. If the problem persists, please email us on lovingaiteam@gmail.com.",
        variant: "destructive",
        action: <ToastAction altText="Okay">Okay</ToastAction>,
        duration: 7000
      });
      return;
    }
    
    navigate("/reset", { state: { email: res.data } });
  }

  return (
    <section className="mt-24">
      {loadingOTP && <SkeletonCard />}
     { !loadingOTP && <Card>
        <CardHeader className="text-center text-2xl">
          <div className="flex justify-center mb-3">
            <img src="/heart.png" alt="heart with arrow through it" height={80} width={80} />
          </div>
          <CardTitle className="text-[#FF0066]">Welcome to Loving AI</CardTitle>
        </CardHeader>
        <CardContent>

          <Form {...form} >
            < form className="flex flex-col gap-2" onSubmit={form.handleSubmit(onSubmit)}>

              <FormField name="email" control={form.control} render={({ field }) => (
                <FormItem>
                  <Label htmlFor="email">Email</Label>
                  <FormControl>
                    <Input {...field} id="email" type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}></FormField>

              <FormField name="password" control={form.control} render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password">Password</Label>
                    <span className="text-slate-400 cursor-pointer text-sm select-none"
                      onClick={() => handleReset(form.getValues())}>Forgot Password?</span>
                  </div>
                  <FormControl>
                    <Input {...field} id="password" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}></FormField>

              <Button type="submit" variant="special"
                disabled={loadingOTP}
                className="border w-full rounded-full mt-6 p-2">
                  {loading &&<span><LoaderCircleIcon className="mr-2 h-4 w-4 animate-spin" /></span>}
                Login
              </Button>
            </form>
          </Form>

        </CardContent>
        <CardFooter>
          <Button variant="link" onClick={() => navigate("/personality")} className="text-slate-400">Don"t have an account? Sign up</Button>
        </CardFooter>
      </Card>}
    </section>
  )
}
