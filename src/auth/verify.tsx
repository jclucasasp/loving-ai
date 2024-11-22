import useLoggedInUserState from "@/hooks/use-user-state";
import ComponentHeading from "@/components/component-heading";
import { OTPRequest } from "@/api/user-auth-api";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import SkeletonCard from "@/components/skeleton-card";
import { useState } from "react";

export default function Verify() {
  const loggedInUser = useLoggedInUserState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const reply = await OTPRequest(loggedInUser!.userId);
    setLoading(false);

    if (!reply || reply.status >= 500) {
      toast({
        variant: "destructive",
        description:
          "Something went wrong, please try again. If the problem persist, kindly email us on lovingaiteam@gmail.com.",
        duration: 3000,
      });
      return;
    }

    navigate("/verify/activate");
  };

  return (
    <section className="flex flex-col w-full items-center justify-center">
      {loading && <SkeletonCard />}
      <ComponentHeading>Lets Get You Verified</ComponentHeading>
      <Card className="max-w-sm sm:max-w-md">
        <CardContent className="text-xs sm:text-sm mt-3">
          <p className="mb-2">
            You only need to get verified once. Clicking the below button will
            send a one time pin(OTP) to verify your account to your email.
          </p>
          <p className="mb-2">
            By signing up you automatically agree to the following terms and
            conditions...
          </p>
          <article className="overflow-y-auto h-[300px] sm:h-[400px] border-t-2 p-2 text-slate-500">
            <p>1. Introduction</p>
            <p>
              Welcome to Loving AI, a social platform designed to facilitate
              conversations between users. By using our service, you agree to be
              bound by these Terms and Conditions. The Loving AI team would
              hereafter be referred to as "we", "us", or "our".
            </p>
            <p className="mt-2">2. Definitions</p>
            <p>For the purposes of this agreement:</p>
            <p>
              "AI-generated" means that any content, including but not limited
              to profiles, images, and text, are generated through artificial
              intelligence algorithms. "Conversation" means a sequence of
              messages exchanged between two or more users on our platform.
              "Database" refers to our centralized storage system for user data
              and conversations.
            </p>
            <p className="mt-2">3. User Agreement </p>
            <p>
              By creating an account or using our service, you acknowledge that:
              You are at least 18 years old (or the age of majority in your
              jurisdiction) and capable of forming a binding contract. You will
              provide accurate and truthful information about yourself. You
              understand that conversations on our platform may be saved in our
              database for security and moderation purposes.
            </p>
            <p className="mt-2">4. AI-Generated Content</p>
            <p>
              All content, including but not limited to profiles, images, and
              text, are generated through AI algorithms.
            </p>
            <p>
              This means: The content you interact with is artificial and does
              not reflect real individuals or events. You understand that the
              AI-generated content may not always be accurate, up-to-date, or
              relevant.
            </p>
            <p className="mt-2">5. Conversations</p>
            <p>
              You acknowledge that: Conversations on our platform are not
              private and may be saved in our database for security and
              moderation purposes. We may use automated tools to monitor
              conversations for spam, harassment, or other prohibited behavior.
            </p>
            <p className="mt-2">6. User Conduct</p>
            <p>
              By using our service, you agree to comply with the following
              guidelines:
            </p>
            <p>
              Treat others with respect and kindness. Refrain from posting spam,
              profanity, or explicit content. Do not engage in harassment,
              bullying, or intimidation of any kind.{" "}
            </p>
            <p className="mt-2">7. Intellectual Property </p>
            <p>
              You acknowledge that all AI-generated content is owned by us,
              including but not limited to: Profiles, Images, Text{" "}
            </p>
            <p className="mt-2">8. Limitation of Liability </p>
            <p>
              In no event will we be liable for any direct, indirect,
              incidental, special, or consequential damages arising from the use
              of our service, including but not limited to: Any inaccuracies or
              omissions in AI-generated content. Any consequences resulting from
              your interactions with other users.
            </p>
            <p className="mt-2">9. Governing Law</p>
            <p>
              These Terms and Conditions will be governed by and construed in
              accordance with South African law.{" "}
            </p>
            <p className="mt-2">10. Changes to the Terms</p>
            <p>
              We reserve the right to modify these Terms and Conditions at any
              time without notice.
            </p>
            <p className="mt-2">Acknowledgement</p>
            <p>
              By using our service, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and Conditions.
            </p>
          </article>
        </CardContent>
        <CardFooter>
          <Button
            size={"lg"}
            variant={"secondary"}
            className="w-full rounded-full"
            onClick={() => {
              handleClick();
            }}
          >
            Sign me up
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
