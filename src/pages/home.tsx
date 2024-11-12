import ComponentHeading from "@/components/component-heading";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col h-screen w-full">
      <div className="flex items-center sm:justify-between justify-center w-full border-b-2 pb-3">
        <div className="flex items-center justify-start">
          <img
            src="/heart.png"
            alt="heart with arrow through it"
            height={80}
            width={80}
          />
          <h1 className="text-3xl text-fuchsia-500 font-bold">Loving AI</h1>
        </div>

        <nav className="flex justify-end gap-2">
          <Button
            variant={"secondary"}
            size={"lg"}
            className="hidden sm:block rounded-full"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            variant={"default"}
            size={"lg"}
            className="hidden sm:block rounded-full"
            onClick={() => navigate("/personality")}
          >
            Sign Up
          </Button>
        </nav>
      </div>

      <article className="mt-3 border-b-2 pb-3">
        <h4 className="text-md md:text-lg">Why spend your time alone...</h4>
        <h3 className="text-lg md:text-xl ">when you can find love now...</h3>
        <h2 className="text-xl md:text-2xl text-fuchsia-500">
          Can you <span className="italic font-bold">Rizz</span> up these AI Hotties?
        </h2>

        <div className="text-xs text-slate-700 md:text-base">
          <p className="mt-3">
            This app was created for real people just like you.
          </p>
          <p>Every AI person on here have their own unique personality.</p>
          <p>Experience instant connections and create lasting memories.</p>
        </div>
      </article>

      <ComponentHeading className="mt-3 underline">Meet some of the Hotties:</ComponentHeading>

      <Carousel className=" w-full" opts={{ loop: true, align: "center" }}>
        <CarouselContent className="-ml-2 sm:-ml-4">
          <CarouselItem className="basis-1/2 md:basis-2/3 pl-1 md:pl-4">
            <img src="/AsianW.png" alt="picture of an asian woman" />
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-2/3 pl-1 md:pl-4">
            <img src="/AsianM.png" alt="picture of an asian man" />
          </CarouselItem>

          <CarouselItem className="basis-1/2 md:basis-2/3 pl-1 md:pl-4">
            <img src="/ColorW.png" alt="picture of an colored woman" />
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-2/3 pl-1 md:pl-4">
            <img src="/ColorM.png" alt="picture of an colored man" />
          </CarouselItem>

          <CarouselItem className="basis-1/2 md:basis-2/3 pl-1 md:pl-4">
            <img src="/CaucasianW.png" alt="picture of an caucasian woman" />
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-2/3 pl-1 md:pl-4">
            <img src="/CaucasianM.png" alt="picture of an caucasian man" />
          </CarouselItem>

          <CarouselItem className="basis-1/2 md:basis-2/3 pl-1 md:pl-4">
            <img src="/IndianW.png" alt="picture of an indian woman" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Button
        variant={"secondary"}
        size={"lg"}
        className="mt-6 w-full rounded-full"
        onClick={() => navigate("/login")}
      >
        <h4>Get Your Rizz On!</h4>
      </Button>
    </section>
  );
}