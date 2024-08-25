import { Heart, X } from "lucide-react";
import { useState, useContext } from "react";
import { ProfileInterface } from "../lib/interfaces";
import { CreateMatch } from "../api/matches";
import LoggedInUserContext from "../context/logged-in-user-context";

type NextProfileProps = React.Dispatch<React.SetStateAction<ProfileInterface | null>>;

export default function Profiles({ profile, nextProfile }: { profile: ProfileInterface | null, nextProfile: NextProfileProps }) {


    const [isMatched, setIsMatched] = useState(false);
    const { loggedInUser: { id } } = useContext(LoggedInUserContext);
    const userId = id;

    const createMatchHandler = async () => {
        const match = await CreateMatch(userId, profile!.id);
        if (match.toProfileId.includes(profile!.id)) {
            setIsMatched(true);
            window.alert('Match created successfully');
        }
    }

    return (
        <div className="flex flex-col items-center rounded-lg shadow-lg bg-gray-100 overflow-hidden p-4">
            <div className="relative">
                <img src={"http://localhost:8080/images/" + profile?.imageUrl} alt="profile image" className="rounded-lg" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black">
                    <h2 className="font-bold text-xl">{profile?.firstName} {profile?.lastName}</h2>
                    <p>{profile?.age}</p>
                </div>
            </div>
            <div className="p-4">
                <p className="text-gray-600">{profile?.bio}</p>
            </div>
            <div className="flex justify-between w-full mt-6">
                <button className="rounded-lg bg-red-500 text-white px-9 py-3 hover:shadow-lg hover:bg-red-700 hover:text-black">
                    <X size={25} onClick={() => { nextProfile(null), setIsMatched(false) }} />
                </button>
                {!isMatched ? <button className="rounded-lg bg-blue-500 text-white px-9 py-3 hover:shadow-lg hover:bg-blue-700 hover:text-red-600">
                    <Heart size={25} onClick={createMatchHandler} />
                </button>
                    : <button className="rounded-lg bg-blue-500 text-white px-9 py-3 hover:shadow-lg hover:bg-blue-700 hover:text-red-600">Matched</button>}
            </div>
        </div>
    )
}
