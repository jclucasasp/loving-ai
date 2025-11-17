import ComponentHeading from "@/components/component-heading";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

//TODO: Add a footer with about, contact and privacy policy
export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex items-center justify-center border-b-2 pb-3 sticky z-50">
                <div className="flex items-center">
                    <img
                        src={"/heart.png"}
                        alt="heart with arrow through it"
                        height={80}
                        width={80}
                    />
                    <h1 className="text-3xl text-[#FF0066] font-bold">Loving AI</h1>
                </div>
            </div>

            <article className="mt-3 border-b-2 pb-3">
                <h1 className="text-2xl font-bold text-[#FF0066]">
                    Chat Instantly with Your Perfect AI Companion
                </h1>
                <p className="text-xl mt-4 text-gray-700">
                    No swiping. No small talk. Just real, remembered conversations with someone who gets you.
                </p>

                <p className="mt-6 text-sm text-gray-500">
                    ★ Already 1,000+ people chatting daily • 100% Private • No data sold
                </p>

                <Button
                    variant={"special"}
                    size={"default"}
                    className="text-xl mt-6 w-full"
                    onClick={() => navigate("/login")}
                    aria-label="Login"
                >
                    <h4>Start Chatting Now!</h4>
                </Button>
            </article>

            <ComponentHeading className="mt-3 underline">
                Meet some of the Hotties:
            </ComponentHeading>

            <Carousel className="" opts={{loop: true, align: "center"}}>
                <CarouselContent className="-ml-2 ">
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
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    );
}
