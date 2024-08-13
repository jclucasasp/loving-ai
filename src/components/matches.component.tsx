import React, { useEffect, useState } from "react"
import { GetMatchesProfile } from "../api/matches";
import { ProfileInterface } from "../lib/interfaces";

type SetScreenProps = React.Dispatch<React.SetStateAction<StateTypes>>;
type StateTypes = 'profile' | 'match' | 'chat';


export default function Matches({ screen }: { screen: SetScreenProps }) {

    const matchProfiles = async () => {
        return await GetMatchesProfile();
    }

    const [profiles, setProfiles] = useState<ProfileInterface[]>([]);

    useEffect(() => {
        matchProfiles().then((data) => {
            setProfiles(data);
        })
    }, []);

    return (
        <ul className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold border-b-2 border-gray-300">Current Matches</h2>
            {profiles.map((profile) => (
                <li className="flex items-center gap-2" key={profile.id}>
                    <button onClick={() => screen('chat')}>
                        <img src={"http://localhost:8080/images/"+ profile.imageUrl} width={50} height={50} className="rounded-full" />
                    </button>
                    <h3>{profile.firstName} {profile.lastName}</h3>
                    <p>{"http://localhost:8080/images/"+ profile.imageUrl}</p>
                </li>
            ))}
        </ul>
    );
}