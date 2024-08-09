import { Heart, X } from "lucide-react";

export default function Profiles() {

    return (
        <div className="flex flex-col items-center rounded-lg shadow-lg bg-gray-100 overflow-hidden p-4">
            <div className="relative">
                <img src="http://127.0.0.1:8080/09be1d7e-0197-4779-a8c3-3b939d34adc3.jpg" alt="profile image" className="rounded-lg" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black">
                    <h2 className="font-bold text-xl">Katerina Burghousen</h2>
                    <p>30</p>
                </div>
            </div>
            <div className="p-4">
                <p className="text-gray-600">Loving the outdoors and good books</p>
            </div>
            <div className="flex justify-between w-full mt-6">
                <button className="rounded-lg bg-red-500 text-white px-9 py-3 hover:shadow-lg hover:bg-red-700 hover:text-black">
                    <X size={25} />
                </button>
                <button className="rounded-lg bg-blue-500 text-white px-9 py-3 hover:shadow-lg hover:bg-blue-700 hover:text-red-600">
                    <Heart size={25} />
                </button>
            </div>
        </div>
    )
}
