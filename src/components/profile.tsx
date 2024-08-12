import { Heart, X } from "lucide-react";
import { useState, useEffect } from "react";
import { GetRandomProfile } from "../api/profiles";
import { ProfileInterface } from "../lib/interfaces";

export default function Profiles() {

    const [currentProfile, setCurrentProfile] = useState<ProfileInterface>({} as ProfileInterface);

    const getRandomProfile = async () => {
        const profileData = GetRandomProfile();
        const [profile] = await Promise.all([profileData]);
        setCurrentProfile(profile);
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
                <button className="rounded-lg bg-blue-500 text-white px-9 py-3 hover:shadow-lg hover:bg-blue-700 hover:text-red-600">
                    <Heart size={25} />
                </button>
            </div>
        </div>
    )
}
