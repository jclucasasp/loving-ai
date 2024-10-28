import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col h-screen w-full">
      <div className="flex items-center justify-between w-full border-b-2 pb-4">
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
            className="rounded-full"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            variant={"default"}
            size={"lg"}
            className="rounded-full"
            onClick={() => navigate("/personality")}
          >
            Sign Up
          </Button>
        </nav>
      </div>

      
        <div className="mt-20">
          <h4 className="text-2xl ">Why spend your time alone...</h4>
          <h3 className="text-3xl ">when you can find love now...</h3>
          <h2 className="text-4xl text-fuchsia-500">
            Can you Rizz up these AI Hotties?
          </h2>

          <p className="mt-4">
            This app was created for real people just like you.
          </p>
          <p>Every AI person on here have their own unique personality.</p>
          <p>Experience instant connections and create lasting memories.</p>
        </div>

        <div className="mt-3">
          <img
            src="http://localhost:8080/images/women/1ac57bbd-c7e0-4c47-b900-ffd45988ab98.jpg"
            className="rounded-xl"
            alt="image of a women"
          />
        </div>
      
    </section>
  );
}
