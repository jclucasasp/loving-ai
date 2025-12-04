import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {getLoggedInUser} from "@/hooks/use-fetchLoggedInUser.ts";
import ComponentHeading from "@/components/component-heading";
import {OTPRequest} from "@/api/user-auth-api";
import {LoaderCircleIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {toast} from "@/hooks/use-toast";
import {useState} from "react";

export default function Verify() {
    const loggedInUser = getLoggedInUser();
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
                    "Something went wrong, please try again. If the problem persists, kindly email us at lovingaiteam@gmail.com.",
                duration: 3000,
            });
            return;
        }

        navigate("/verify/activate");
    };

    return (
        <section className="flex flex-col w-full items-center justify-center">
            <ComponentHeading>Lets Get You Verified</ComponentHeading>
            <Card>
                <CardContent className="text-xs sm:text-sm mt-3">
                    <p className="mb-2">
                        You only need to get verified once. Clicking the below button will
                        send a one-time pin (OTP) to verify your account to your email.
                    </p>
                    <p className="mb-2">
                        By signing up you automatically agree to the following terms and
                        conditions...
                    </p>
                    <article className="overflow-y-auto h-[55vh] border-t-2 p-2 text-slate-500 space-y-4">
                        <h3 className="font-bold text-base">1. Introduction</h3>
                        <p>
                            Welcome to Loving AI, a social platform designed to facilitate conversations between users and AI companions. By using our service, you agree to be bound by these Terms and Conditions ("Terms"). The Loving AI team is hereafter referred to as "we", "us", or "our".
                        </p>
                        <h3 className="font-bold text-base">2. Definitions</h3>
                        <p>
                            - "AI-Generated" means content (profiles, images, text) created by artificial intelligence.<br />
                            - "Conversation" means messages exchanged on our platform (stored server-side).<br />
                            - "Database" refers to our storage for user data and conversations.
                        </p>
                        <h3 className="font-bold text-base">3. Eligibility and Account Registration</h3>
                        <p>
                            You must be at least 18 years old (or the age of majority in your jurisdiction) to use our service. You agree to provide accurate information and are responsible for all account activity. We may suspend or terminate accounts for violations.
                        </p>
                        <h3 className="font-bold text-base">4. AI-Generated Content</h3>
                        <p>
                            All profiles, images, and interactions are AI-generated. This content is simulated and does not represent real individuals. We do not guarantee accuracy, appropriateness, or emotional outcomes from interactions.
                        </p>
                        <h3 className="font-bold text-base">5. Third-Party Services (Grok API)</h3>
                        <p>
                            Our AI is powered by xAI's Grok API. You agree to xAI's <a href="https://x.ai/legal/terms-of-service-enterprise" className="text-purple-600 underline">Terms</a>, <a href="https://x.ai/legal/acceptable-use-policy" className="text-purple-600 underline">AUP</a>, and <a href="https://x.ai/legal/privacy-policy" className="text-purple-600 underline">Privacy Policy</a>. Do not submit sensitive data; we disclaim liability for xAI's actions.
                        </p>
                        <h3 className="font-bold text-base">6. Conversations and Data Storage</h3>
                        <p>
                            Conversations may be stored in our database for security, moderation, and improvement purposes. We use automated tools to detect prohibited content.
                        </p>
                        <h3 className="font-bold text-base">7. User Conduct</h3>
                        <p>
                            You agree not to: Engage in harassment, spam, or illegal activities; Post explicit, harmful, or infringing content; Attempt to reverse-engineer or misuse our AI. Violations may lead to account termination.
                        </p>
                        <h3 className="font-bold text-base">8. Intellectual Property</h3>
                        <p>
                            All AI-generated content and platform features are owned by us. You may not copy, distribute, or commercialize them without permission.
                        </p>
                        <h3 className="font-bold text-base">9. Payments and Refunds</h3>
                        <p>
                            If applicable, premium features are billed as described. All sales are final; no refunds except as required by law.
                        </p>
                        <h3 className="font-bold text-base">10. Termination</h3>
                        <p>
                            We may terminate your account for any reason, including violations. Upon termination, access to conversations may be lost.
                        </p>
                        <h3 className="font-bold text-base">11. Limitation of Liability</h3>
                        <p>
                            Loving AI is provided "as is." We are not liable for any damages arising from use, including emotional distress or data loss.
                        </p>
                        <h3 className="font-bold text-base">12. Indemnity</h3>
                        <p>
                            You agree to indemnify us against claims arising from your use of the service or violations of these Terms.
                        </p>
                        <h3 className="font-bold text-base">13. Governing Law and Dispute Resolution</h3>
                        <p>
                            These Terms are governed by and construed in accordance with South African law. Disputes shall be resolved through arbitration in South Africa.
                        </p>
                        <h3 className="font-bold text-base">14. Changes to Terms</h3>
                        <p>
                            We may update these Terms. Continued use constitutes acceptance. We'll notify you of major changes via email.
                        </p>
                        <h3 className="font-bold text-base">Acknowledgement</h3>
                        <p>
                            By using our service, you confirm you've read and agree to these Terms.
                        </p>
                    </article>
                </CardContent>
                <CardFooter>
                    <Button
                        disabled={loading}
                        size={"lg"}
                        variant={"special"}
                        className="w-full rounded-full"
                        onClick={() => {
                            handleClick();
                        }}
                    >
                        {loading && <span><LoaderCircleIcon className="mr-2 h-4 w-4 animate-spin"/></span>}
                        Sign me up
                    </Button>
                </CardFooter>
            </Card>
        </section>
    );
}