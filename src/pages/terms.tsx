import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {CardContent, CardHeader} from "@/components/ui/card.tsx";

export default function Terms() {
    const navigate = useNavigate();

    return (
        <section className="">
            {/* Header with Back Button */}
            <CardHeader>
                <Button variant="ghost" onClick={() => navigate("/")} className="text-pink-600 hover:text-purple-600">
                    <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
                </Button>
            </CardHeader>

            {/* Main Content */}
            <CardContent className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-10 space-y-3 lg:space-y-6">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-2 md:mb-4 lg:mb-8">
                    Terms of Service
                </h1>

                <p className="text-gray-600 mb-2 md:mb-6 text-xs md:text-sm lg:text-lg">
                    Welcome to Loving AI! These Terms of Service ("Terms") govern your use of our website and services. By accessing or using Loving AI, you agree to be bound by these Terms. If you do not agree, please do not use our services.
                </p>

                    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">1. Introduction</h2>
                <p className="text-gray-600 text-xs md:text-sm lg:text-lg">
                    Loving AI is a platform for simulated conversations with AI companions. The Loving AI team is hereafter "we", "us", or "our".
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">2. Definitions</h2>
                <p className="text-gray-600 text-xs md:text-sm lg:text-lg">
                    - "AI-Generated": Content created by AI, not real individuals.<br />
                    - "Conversation": Messages exchanged on the platform; stored server-side.<br />
                    - "Database": Storage for user data and conversations.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">3. Eligibility and Account Registration</h2>
                <p className="text-gray-600 text-xs md:text-sm lg:text-lg">
                    You must be 18+ to use our service. Provide accurate info; you're responsible for your account.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">4. AI-Generated Content and Interactions</h2>
                <p className="text-gray-600 text-xs md:text-sm lg:text-lg">
                    All profiles and interactions are AI-simulated for entertainment. We disclaim liability for emotional distress, psychological effects, or outcomes from "relationships" or "breakups" with AI. These are not real; seek professional help for emotional needs.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">5. Third-Party Services (Grok API)</h2>
                <p className="text-gray-600 text-xs md:text-sm lg:text-lg">
                    Loving AI is powered by the Grok API from xAI. By using our service, you agree to xAI's <a href="https://x.ai/legal/terms-of-service-enterprise" className="text-purple-600 underline hover:text-pink-600">Enterprise Terms of Service</a>, <a href="https://x.ai/legal/acceptable-use-policy" className="text-purple-600 underline hover:text-pink-600">Acceptable Use Policy</a>, and <a href="https://x.ai/legal/privacy-policy" className="text-purple-600 underline hover:text-pink-600">Privacy Policy</a>, which are incorporated herein by reference. This includes prohibitions on submitting sensitive personal data (e.g., health or financial information) and acknowledgment that AI outputs may be inaccurate or inappropriate. We are not liable for xAI's services or any issues arising from them.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">6. Conversations and Data Storage</h2>
                <p className="text-gray-600 text-xs md:text-sm lg:text-lg">
                    Conversations are stored server-side for moderation. See Privacy Policy.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">7. User Conduct</h2>
                <p className="text-gray-600 text-xs md:text-sm lg:text-lg">
                    No harassment, spam, or illegal activities. Violations lead to termination.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">8. Intellectual Property</h2>
                <p className="text-gray-600 text-xs md:text-sm lg:text-lg">
                    All content is our property.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">9. Payments and Refunds</h2>
                <p className="text-gray-600 text-xs md:text-sm lg:text-lg">
                    Premium features are non-refundable except as required by law.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">10. Termination</h2>
                <p className="text-gray-600 text-xs md:text-sm lg:text-lg">
                    We may terminate accounts for violations. No recovery of data upon termination.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">11. Limitation of Liability</h2>
                <p className="text-gray-600 text-xs md:text-sm lg:text-lg">
                    Not liable for any damages, including emotional harm, data loss, or indirect losses from use or AI interactions.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">12. Indemnity</h2>
                <p className="text-gray-600 text-xs md:text-sm lg:text-lg">
                    You indemnify us against claims from your use.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">13. Governing Law and Dispute Resolution</h2>
                <p className="text-gray-600 text-xs md:text-sm lg:text-lg">
                    Governed by South African law; disputes via arbitration in South Africa.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">14. Changes to Terms</h2>
                <p className="text-gray-600 text-xs md:text-sm lg:text-lg">
                    We may update; continued use is acceptance.
                </p>

                <p className="text-gray-600 text-xs md:text-sm lg:text-lg">
                    Last updated: November 25, 2025. Questions? Contact lovingaiteam@gmail.com.
                </p>
            </CardContent>
        </section>
    );
}