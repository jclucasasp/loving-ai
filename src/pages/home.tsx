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
import { Helmet } from "react-helmet-async";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Helmet>
        <title>Loving AI</title>
        <meta
          name="description"
          content="Chat with an AI companion for instant connections and lasting memories. Unique personalities, no guesswork, and no rejection."
        />
        <link rel="canonical" href="https://www.loving-ai.com" />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "JC Lucas",
      "jobTitle": "Freelance Fullstack Software Engineer",
      "description": "An AI enthusiast and expert in creating engaging, fun, and realistic AI companions for instant connections and lasting memories.",
      "url": "https://www.loving-ai.com",
      "image": "https://www.loving-ai.com/heart.png",
    }
    `}
        </script>
      </Helmet>

      <div className="flex items-center sm:justify-between justify-center border-b-2 pb-3">
        <div className="flex items-center justify-start">
          <img
            src="./heart.png"
            alt="heart with arrow through it"
            height={80}
            width={80}
          />
          <h1 className="text-3xl text-[#FF0066] font-bold">Loving AI</h1>
        </div>

        <nav className="flex justify-end gap-2">
          <Button
            variant={"secondary"}
            size={"lg"}
            className="hidden sm:block rounded-full"
            onClick={() => navigate("/login")}
            aria-label="Login"
          >
            Login
          </Button>
          <Button
            variant={"default"}
            size={"lg"}
            className="hidden sm:block rounded-full"
            onClick={() => navigate("/personality")}
            aria-label="Sign Up"
          >
            Sign Up
          </Button>
        </nav>
      </div>

      <article className="mt-3 border-b-2 pb-3">
        <h4 className="text-md md:text-lg">Why spend your time alone...</h4>
        <h3 className="text-lg md:text-xl ">
          when you can find companionship now...
        </h3>
        <h2 className="text-xl md:text-2xl text-[#FF0066] ">
          Can you <span className="italic font-bold">Rizz</span> up these AI
          Hotties?
        </h2>

        <div className="text-xs text-slate-700 md:text-base">
          <p className="mt-3">
            This app was created for real people just like you.
          </p>
          <p>Every AI person on here have their own unique personality.</p>
          <p>Experience instant connections and create lasting memories.</p>
        </div>
      </article>

      <ComponentHeading className="mt-3 underline">
        Meet some of the Hotties:
      </ComponentHeading>

      <Carousel className="" opts={{ loop: true, align: "center" }}>
        <CarouselContent className="-ml-2 ">
          <CarouselItem className="basis-1/2">
            <img src="./AsianW.png" alt="picture of an asian woman" />
          </CarouselItem>
          <CarouselItem className="basis-1/2">
            <img src="./AsianM.png" alt="picture of an asian man" />
          </CarouselItem>

          <CarouselItem className="basis-1/2">
            <img src="./ColorW.png" alt="picture of an colored woman" />
          </CarouselItem>
          <CarouselItem className="basis-1/2">
            <img src="./ColorM.png" alt="picture of an colored man" />
          </CarouselItem>

          <CarouselItem className="basis-1/2">
            <img src="./CaucasianW.png" alt="picture of an caucasian woman" />
          </CarouselItem>
          <CarouselItem className="basis-1/2">
            <img src="./CaucasianM.png" alt="picture of an caucasian man" />
          </CarouselItem>

          <CarouselItem className="basis-1/2">
            <img src="./IndianW.png" alt="picture of an indian woman" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Button
        variant={"secondary"}
        size={"default"}
        className="mt-6 w-full rounded-full"
        onClick={() => navigate("/login")}
        aria-label="Login"
      >
        <h4>Get Your Rizz On!</h4>
      </Button>
    </div>
  );
}
