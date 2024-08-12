type MatchScreenProps = {
    id: number
    firstName: string
    lastName: string
    imageUrl: string
}

export default function Matches({ profiles }: { profiles: MatchScreenProps[] }) {
    return (
        <ul className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold border-b-2 border-gray-300">Current Matches</h2>
            {profiles.map((profile) => (
                <li className="flex items-center gap-2" key={profile.id}>
                    <button onClick={()=> console.log(profile)}>
                    <img src={profile.imageUrl} width={50} height={50} className="rounded-full" />
                    </button>
                    <h3>{profile.firstName} {profile.lastName}</h3>
                </li>
            ))}
        </ul>
    );
}