import { CreateMessage } from "../api/conversation";
import { ConversationInterface, ProfileInterface } from "../lib/interfaces";
import { useState } from "react";

export default function ChatMessages({ chatmessages, selectedProfile }: { chatmessages: ConversationInterface, selectedProfile: ProfileInterface | null }) {

    console.log("Chatmessages passed from matches component to chat component \n", chatmessages);

    const [message, setMessage] = useState<string>('');
    const [conversation, setConversation] = useState<ConversationInterface>(chatmessages);


    const handleMessageSubmit = async () => {
        if (message.trim()) {
            const conversation = await CreateMessage(chatmessages.id, { messageText: message });
            setConversation(conversation);
        }
        setMessage('');
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300">Chat with {selectedProfile?.firstName + " " + selectedProfile?.lastName}</h2>
            <div className="h-[50vh] overflow-y-auto">
                { !!conversation && conversation.messages.map((m, i) => {
                    return (
                        <div key={i} className="text-sm text-gray-600 pointer-events-none">
                            <p>Date: {m.createDate?.substring(0, 10)}</p>
                            <p>Time: {m.createDate?.substring(11, 19)}</p>
                            <p className="text-balance text-lg text-black">{m.messageText}</p>
                        </div>
                    )
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
                <button onClick={handleMessageSubmit} className="rounded-lg bg-blue-500 text-white p-2 h-11 hover:shadow-lg">Send</button>
            </div>
        </div>
    );
}