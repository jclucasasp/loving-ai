import { useState } from "react";
import { MessagesArr } from "../lib/constants";
import { ConversationInterface } from "../lib/interfaces";

export default function ChatMessages({ chatmessages}: {chatmessages: ConversationInterface}) {

    const [message, setMessage] = useState<string>('');

    const handleClick = () => {
        if (message.trim()) {
            console.log(message);
        }
        setMessage('');
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300">Chat with {chatmessages.id}</h2>
            <div className="h-[50vh] overflow-y-auto">
                {MessagesArr.map((m, i) => {
                    return (<p key={i} className="">{m}</p>)
                })}
            </div>
            <div className="flex gap-2 align-center">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 mb-3 border border-gray-300 rounded-lg"
                />
                <button onClick={handleClick} className="rounded-lg bg-blue-500 text-white p-2 h-11 hover:shadow-lg">Send</button>
            </div>
        </div>
    );
}