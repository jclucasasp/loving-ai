import { Heart, X } from "lucide-react";
import { useState, useEffect } from "react";
import { GetRandomProfile } from "../api/profiles";
import { ProfileInterface } from "../lib/interfaces";
import { CreateMatch } from "../api/matches";

export default function Profiles() {

    const [currentProfile, setCurrentProfile] = useState<ProfileInterface>({} as ProfileInterface);
    const [isMatched, setIsMatched] = useState(false);

    const getRandomProfile = async () => {
        const profileData = GetRandomProfile();
        const [profile] = await Promise.all([profileData]);
        setCurrentProfile(profile);
        setIsMatched(false);
    }

    //TODO: fix the hard coded fromProfileId once log in is implemented
    const createMatchHandler = async () => {
        const match = await CreateMatch('8133d336-d2ca-4e06-94a8-d59c90d959ed', currentProfile.id);
        if (match) {
            setIsMatched(true);
            window.alert('Match created successfully');
        } else {
            window.alert('Unable to match');
        }
    }

    useEffect(() => {
        getRandomProfile();
    }, []);

    return (
        <div className="flex flex-col items-center rounded-lg shadow-lg bg-gray-100 overflow-hidden p-4">
            <div className="relative">
                <img src={"http://localhost:8080/images/" + currentProfile.imageUrl} alt="profile image" className="rounded-lg" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black">
                    <h2 className="font-bold text-xl">{currentProfile.firstName} {currentProfile.lastName}</h2>
                    <p>{currentProfile.age}</p>
                </div>
            </div>
            <div className="p-4">
                <p className="text-gray-600">{currentProfile.bio}</p>
            </div>
            <div className="flex justify-between w-full mt-6">
                <button className="rounded-lg bg-red-500 text-white px-9 py-3 hover:shadow-lg hover:bg-red-700 hover:text-black">
                    <X size={25} onClick={() => getRandomProfile()} />
                </button>
                <button className="rounded-lg bg-blue-500 text-white px-9 py-3 hover:shadow-lg hover:bg-blue-700 hover:text-red-600"
                    disabled={isMatched}>
                    <Heart size={25} onClick={createMatchHandler} />
                </button>
            </div>
        </div>
    )
}
