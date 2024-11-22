import { Card, CardContent } from "@/components/ui/card";
import useLoggedInUserState from "@/hooks/use-user-state";
import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { VerifyOTP } from "@/api/user-auth-api";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    InputOTPSeparator,
  } from "@/components/ui/input-otp";
  import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
    FormLabel,
  } from "@/components/ui/form";


import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ComponentHeading from "@/components/component-heading";


const FormSchema = z.object({
    otp: z.string({ required_error: "OTP is required" }).min(6, { message: "OTP must be at least 6 characters long" }),
  });

export default function VerifyActivate() {
  const loggedInUser = useLoggedInUserState();
  
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = async (data: any) => {
    const res = await VerifyOTP(loggedInUser!.userId, data.otp);

    if (res.status >= 500) {
      toast({
        title: "Error verifying OTP.",
        description:
          "Please try again. If the problem persists, please email us on lovingaiteam@gmail.com.",
        variant: "destructive",
        action: <ToastAction altText="Retry">Retry</ToastAction>,
        duration: 4000,
      });
      return;
    }

    if (res.status >= 400 && res.status < 500) {
      toast({
        description: "Your OTP is either invalid or have expired.",
        variant: "destructive",
        duration: 4000,
      });
       return;
    }

    toast({
      title: "OTP verified.",
      description: "Thank you for verifying your email address.",
      variant: "default",
      duration: 4000,
    });

    sessionStorage.removeItem("loggedInUser");

    navigate("/");

  };

  return (
    <section className="flex flex-col items-center justify-center">
      <ComponentHeading>Enter OTP</ComponentHeading>
      <Card className="max-w-sm">
        <CardContent className="mt-3">
          <Form {...form}>
            <form
              className="flex flex-col gap-2"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                name="otp"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="otp">OTP</FormLabel>
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
                )}
              ></FormField>

              <Button
                type="submit"
                variant="secondary"
                className="border w-full rounded-full mt-6 p-2"
              >
                Verify
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}