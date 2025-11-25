import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {CardContent, CardHeader} from "@/components/ui/card.tsx";

export default function Privacy() {
    const navigate = useNavigate();

    return (
        <section>
            <CardHeader>
                <Button variant="ghost" onClick={() => navigate("/")} className="text-pink-600 hover:text-purple-600">
                    <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
                </Button>
            </CardHeader>

            <CardContent className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-10 space-y-3 lg:space-y-6">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-2 md:mb-4 lg:mb-8">
                    Privacy Policy
                </h1>

                <p className="text-gray-600 mb-2 md:mb-6 text-xs md:text-sm lg:text-lg">
                    Loving AI values your privacy. This Policy explains our practices under POPIA (South Africa) and similar laws.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">1. Information We Collect</h2>
                <p className="text-gray-600 mb-2 md:mb-6 text-xs md:text-sm lg:text-lg">
                    - Personal: Email, name, preferences.<br />
                    - Usage: Interactions and conversations (stored server-side).<br />
                    - Technical: IP, device info.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-600 mb-2 md:mb-6 text-xs md:text-sm lg:text-lg">
                    For AI personalization, service improvement, and updates. No sales.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">3. Data Sharing</h2>
                <p className="text-gray-600 mb-2 md:mb-6 text-xs md:text-sm lg:text-lg">
                    With providers (e.g., Cloudflare); as required by law. No third-party marketing.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">4. Security</h2>
                <p className="text-gray-600 mb-2 md:mb-6 text-xs md:text-sm lg:text-lg">
                    Encryption, secure servers (Google Cloud).
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">5. Third-Party Services (Grok API)</h2>
                <p className="text-gray-600 mb-2 md:mb-6 text-xs md:text-sm lg:text-lg">
                    AI features are powered by xAI's Grok API. Data processed by xAI is subject to their <a href="https://x.ai/legal/privacy-policy" className="text-purple-600 underline hover:text-pink-600">Privacy Policy</a>. We do not share sensitive data with xAI, but you agree not to input such information. xAI may store/process interactions per their terms; we have no control over their retention or security beyond our API calls.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">6. Your Rights</h2>
                <p className="text-gray-600 mb-2 md:mb-6 text-xs md:text-sm lg:text-lg">
                    Access, correct, delete data. Contact us for POPIA requests.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">7. Cookies and Tracking</h2>
                <p className="text-gray-600 mb-2 md:mb-6 text-xs md:text-sm lg:text-lg">
                    Essential cookies only; no ads.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">8. Children's Privacy</h2>
                <p className="text-gray-600 mb-2 md:mb-6 text-xs md:text-sm lg:text-lg">
                    Not for under 18; we delete data if discovered.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">9. International Transfers</h2>
                <p className="text-gray-600 mb-2 md:mb-6 text-xs md:text-sm lg:text-lg">
                    Data may transfer outside South Africa; we ensure adequate protection.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">10. Data Retention</h2>
                <p className="text-gray-600 mb-2 md:mb-6 text-xs md:text-sm lg:text-lg">
                    Retained as needed for service; deleted upon request or inactivity.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-2 md:mb-4">11. Changes to Policy</h2>
                <p className="text-gray-600 mb-2 md:mb-6 text-xs md:text-sm lg:text-lg">
                    Updates notified via email.
                    Last updated: November 25, 2025. Questions? Contact lovingaiteam@gmail.com.
                </p>

            </CardContent>
        </section>
    );
}