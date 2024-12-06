import SkeletonPersonality from "./skeleton-personality";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PersonalityTypeInterface,
  PersonalityDescriptionInterface,
} from "@/lib/interfaces";
import {
  GetPersonalityTypes,
  GetPersonalityDescriptions,
} from "@/api/personality-api";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Error from "@/components/error";

export default function Personality() {
  const [personalityTypes, setPersonalityTypes] = useState<
    PersonalityTypeInterface[]
  >([]);
  const [personalityDescriptions, setPersonalityDescriptions] = useState<
    PersonalityDescriptionInterface[]
  >([]);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const getPersonalities = async () => {
    setLoading(true);
    const typesData = GetPersonalityTypes();
    const descriptionsData = GetPersonalityDescriptions();
    const [types, descriptions] = await Promise.all([
      typesData,
      descriptionsData,
    ]);

    setLoading(false);
    return { types, descriptions };
  };

  useEffect(() => {
    getPersonalities().then((data) => {
      setPersonalityTypes(data.types);
      setPersonalityDescriptions(data.descriptions);
    });
  }, []);

  return (
    <>
      {personalityTypes == null && <Error />}
      {personalityTypes && (
        <Card className=" mt-3 md:mt-6">
          <CardHeader>
            <CardTitle>Personality</CardTitle>
            <CardDescription className="border-b-2 mb-3 p-2">
                Here is a breakdown of the different personality types and a
                short description.
                You should totally take the free personality test to make sure
                you get yours right?
            </CardDescription>
          </CardHeader>
          <CardContent className="overflow-y-auto h-[40dvh] sm:h-[50dvh] md:h-[65dvh] mb-6 text-sm text-slate-500 border-b-2">
            { loading && <SkeletonPersonality /> }
            {personalityTypes.map((type) => (
              <div key={type.id} className="flex gap-2 border-b-2 p-2">
                <p className="font-bold">
                  {type.type + " : "}
                  <span className="font-normal">
                    {
                      personalityDescriptions.find(
                        (description) => description.id === type.id
                      )?.description
                    }
                  </span>
                </p>
              </div>
            ))}
          </CardContent>
          <CardFooter className="justify-between gap-2 flex-col sm:flex-row">
            <Button
              variant={"default"}
              className="w-full rounded-full"
              aria-label="Free Personality Test on a different website"
              onClick={() => {
                window.open(
                  "https://www.16personalities.com/free-personality-test",
                  "_blank"
                );
              }}
            >
              Free Personality Test
            </Button>
            <Button
              variant={"secondary"}
              className="w-full rounded-full"
              onClick={() => {
                navigate("/signUp", { state: { personalityTypes } });
              }}
              aria-label="Create account"
            >
              Create account
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
