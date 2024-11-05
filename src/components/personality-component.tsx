import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { PersonalityTypeInterface, PersonalityDescriptionInterface } from "@/lib/interfaces";
import { GetPersonalityTypes, GetPersonalityDescriptions } from "@/api/personality-api";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Personality() {

    const [personalityTypes, setPersonalityTypes] = useState<PersonalityTypeInterface[]>([]);
    const [personalityDescriptions, setPersonalityDescriptions] = useState<PersonalityDescriptionInterface[]>([]);

    const navigate = useNavigate();

    const getPersonalities = async () => {
        const typesData = GetPersonalityTypes();
        const descriptionsData = GetPersonalityDescriptions();
        const [types, descriptions] = await Promise.all([typesData, descriptionsData]);
        return { types, descriptions };
    };

    useEffect(() => {
        getPersonalities().then((data) => {
            setPersonalityTypes(data.types);
            setPersonalityDescriptions(data.descriptions);
        });
    }, []);


    return (
        <Card>
            <CardHeader>
                <h1 className="text-2xl font-bold text-fuchsia-500 text-center border-b-2 p-4">Personality</h1>
                <CardDescription className="border-b-2 mb-3 2 p-2">
                    <h2 className="text-lg text-slate-500 mb-2">Here is a breakdown of the different personality types and a short description.</h2>
                    <h3 className="mb-2 text-base">You should totally take the free personality test to make sure you get yours right?</h3>

                </CardDescription>
            </CardHeader>
            <CardContent className="overflow-y-auto h-[55vh] mb-6 text-sm text-slate-500 border-b-2">
                {personalityTypes.map((type) => (
                    <div key={type.id} className="flex gap-2 border-b-2 p-2">
                        <p className="font-bold">{type.type + " : "}
                            <span className="font-normal">
                            {personalityDescriptions.find((description) => description.id === type.id)?.description}
                            </span>
                        </p>
                    </div>
                ))}
            </CardContent>
            <CardFooter className="justify-between gap-2 flex-col sm:flex-row">
                <Button variant={"default"} className="w-full rounded-full" onClick={() => { window.open('https://www.16personalities.com/free-personality-test', '_blank') }}>Free Personality Test</Button>
                <Button variant={"secondary"} className="w-full rounded-full" onClick={() => { navigate('/signUp', { state: { personalityTypes } }) }}>Create account</Button>
            </CardFooter>
        </Card>
    );
}