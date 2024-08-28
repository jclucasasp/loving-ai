import { CreateMessage } from "../api/conversation";
import { ConversationInterface, ProfileInterface } from "../lib/interfaces";
import { useState } from "react";

export default function ChatMessages({ currentConversation, selectedProfile }: { currentConversation: ConversationInterface, selectedProfile: ProfileInterface | null }) {

    const [message, setMessage] = useState<string>('');
    const [conversation, setConversation] = useState<ConversationInterface>(currentConversation);

    const handleMessageSubmit = async () => {
        if (message.trim()) {
            console.log("curent convo: ", conversation);
            const newConversation = await CreateMessage(conversation.matchId, { messageText: message });
            setConversation(newConversation);
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
                            <p>Date: {m.sendDate?.substring(0, 10)}</p>
                            <p>Time: {m.sendDate?.substring(11, 19)}</p>
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