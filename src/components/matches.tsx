import React from "react"

type MatchScreenProps = {
    id: number
    firstName: string
    lastName: string
    imageUrl: string
}

type SetScreenProps = React.Dispatch<React.SetStateAction<StateTypes>>;
type StateTypes = 'profile' | 'match' | 'chat';

export default function Matches({ profiles, screen }: { profiles: MatchScreenProps[], screen: SetScreenProps }) {
    return (
        <ul className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold border-b-2 border-gray-300">Current Matches</h2>
            {profiles.map((profile) => (
                <li className="flex items-center gap-2" key={profile.id}>
                    <button onClick={() => screen('chat')}>
                    <img src={profile.imageUrl} width={50} height={50} className="rounded-full" />
                    </button>
                    <h3>{profile.firstName} {profile.lastName}</h3>
                </li>
            ))}
        </ul>
    );
}