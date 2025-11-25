import ComponentHeading from "@/components/component-heading";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

//TODO: Add a footer with about, contact and privacy policy
export default function Home() {
    const navigate = useNavigate();

    return (
        <section>
            <div className="flex items-center justify-center border-b-2 pb-3">
                <div className="flex items-center">
                    <img
                        src={"/heart.png"}
                        alt="heart with arrow through it"
                        height={80}
                        width={80}
                    />
                    <h1 className="text-2xl md:text-3xl text-[#FF0066] font-bold">Loving AI</h1>
                </div>
            </div>

            <article className="mt-3 border-b-2 pb-3">
                <h1 className="text-xl md:text-2xl font-bold text-[#FF0066]">
                    Your perfect AI Companion awaits you.
                </h1>
                <p className="md:text-xl mt-2  md:mt-4 text-gray-700">
                    No swiping. No small talk. Just real, remembered conversations with someone who gets you.
                </p>

                <p className="mt-3 md:mt-6 text-xs md:text-sm text-gray-500">
                    ★ Already 1,000+ people chatting daily • 100% Private • No data sold
                </p>

                <Button
                    variant={"special"}
                    size={"default"}
                    className="text-xl mt-6 w-full"
                    onClick={() => navigate("/login")}
                    aria-label="Login"
                >
                    <h4 className={"text-sm lg:text-xl md:text-lg"}>Find Your Perfect Match - Free Signup</h4>
                </Button>
            </article>

            <ComponentHeading className="mt-3 underline">
                Meet some of the Hotties:
            </ComponentHeading>

            <Carousel className="" opts={{loop: true, align: "center"}}>
                <CarouselContent className="ml-2 ">
                    <CarouselItem className="basis-1/2">
                        <img src={"/AsianW.png"} alt="picture of an asian woman"/>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2">
                        <img src={"/AsianM.png"} alt="picture of an asian man"/>
                    </CarouselItem>

                    <CarouselItem className="basis-1/2">
                        <img src={"/ColorW.png"} alt="picture of an colored woman"/>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2">
                        <img src={"/ColorM.png"} alt="picture of an colored man"/>
                    </CarouselItem>

                    <CarouselItem className="basis-1/2">
                        <img src={"/CaucasianW.png"} alt="picture of an caucasian woman"/>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2">
                        <img src={"/CaucasianM.png"} alt="picture of an caucasian man"/>
                    </CarouselItem>

                    <CarouselItem className="basis-1/2">
                        <img src={"/IndianW.png"} alt="picture of an indian woman"/>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
             <footer className="mt-10 py-6 text-center text-gray-600 text-sm">
                Loving AI | South Africa | <a href="/privacy" className="text-purple-600 hover:underline">Privacy Policy</a> | <a href="/terms" className="text-purple-600 hover:underline">Terms of Service</a><br />
                Questions? Contact us at <a href="mailto:lovingaiteam@gmail.com" className="text-purple-600 hover:underline">lovingaiteam@gmail.com</a> <br />
                © 2025 Loving AI. All rights reserved.
            </footer>
        </section>
    );
}
