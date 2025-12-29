import ComponentHeading from "@/components/component-heading";
import Autoplay from "embla-carousel-autoplay";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import CaucasianM from "/CaucasianM.png";
import CaucasianW from "/CaucasianW.png";
import IndianW from "/IndianW.png";
import AsianW from "/AsianW.png";
import AsianM from "/AsianM.png";
import ColorM from "/ColorM.png";
import ColorW from "/ColorW.png";
import Heart from "/heart.png";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

export default function Home() {
    const navigate = useNavigate();

    return (
        <section>
            <div className="flex items-center justify-center border-b-2 pb-3">
                <div className="flex items-center">
                    <img
                        src={Heart}
                        alt="heart with arrow through it"
                        height={80}
                        width={80}
                    />
                    <h1 className="text-2xl md:text-3xl text-[#FF0066] font-bold drop-shadow-md">Loving AI</h1>
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
                    onClick={() => navigate("/personality")}
                    aria-label="Login"
                >
                    <h4 className={"text-sm lg:text-xl md:text-lg"}>Discover Your Perfect Match - Free Signup</h4>
                </Button>
                <Button variant={"outline"}
                        size={"default"}
                        className={" text-xl rounded-full mt-6 w-full border-[#ff0066] hover:text-[#ff0066] bg-transparent"}
                onClick={() => navigate("/login")}
                aria-label="Login">
                    <h4 className={"text-sm lg:text-xl md:text-lg"}>Login & Reconnect</h4>
                </Button>
            </article>

            <ComponentHeading className="mt-3 underline">
                Meet Some of Our Charming Companions:
            </ComponentHeading>

            <Carousel className="" opts={{loop: true, align: "center"}}
                      plugins={[Autoplay({delay: 2500, stopOnInteraction: false})]}>
                <CarouselContent className="ml-2 ">
                    <CarouselItem className="basis-1/2">
                        <img src={AsianW} alt="picture of an asian woman"/>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2">
                        <img src={AsianM} alt="picture of an asian man"/>
                    </CarouselItem>

                    <CarouselItem className="basis-1/2">
                        <img src={ColorW} alt="picture of an colored woman"/>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2">
                        <img src={ColorM} alt="picture of an colored man"/>
                    </CarouselItem>

                    <CarouselItem className="basis-1/2">
                        <img src={CaucasianW} alt="picture of an caucasian woman"/>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2">
                        <img src={CaucasianM} alt="picture of an caucasian man"/>
                    </CarouselItem>

                    <CarouselItem className="basis-1/2">
                        <img src={IndianW} alt="picture of an indian woman"/>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
            <footer className="mt-10 py-6 text-center text-gray-600 text-sm">
                Loving AI | South Africa | <span onClick={() => navigate("/privacy")}
                                                 className="cursor-pointer text-purple-600 hover:underline">Privacy Policy</span> | <span
                onClick={() => navigate("/terms")} className="cursor-pointer text-purple-600 hover:underline">Terms of Service</span><br/>
                Questions? Contact us at <a href="mailto:lovingaiteam@gmail.com"
                                            className="text-purple-600 hover:underline">lovingaiteam@gmail.com</a> <br/>
                © 2025 Loving AI. All rights reserved.
            </footer>
        </section>
    );
}
