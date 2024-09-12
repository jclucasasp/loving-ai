import { ConversationInterface, ProfileInterface } from "../lib/interfaces";
import { useEffect, useRef, useState } from "react";
import { CreateMessage } from "../api/conversation";
import SkeletonCard from "./skeleton-card";
import { cn } from "../lib/utils";

export default function ChatMessages({ currentConversation, selectedProfile }: { currentConversation: ConversationInterface, selectedProfile: ProfileInterface | null }) {

    const [message, setMessage] = useState<string>('');
    const [conversation, setConversation] = useState<ConversationInterface>(currentConversation);
    // TODO: this need to be passed down from App so that the button show 'matched' when viewing the profile
    const [loading, setLoading] = useState<boolean>(false);

    const conversationContainer = useRef<HTMLDivElement>(null);
    const messageInput = useRef<HTMLTextAreaElement>(null);

    const handleMessageSubmit = async () => {
        setLoading(true);
        if (message.trim()) {
            const newConversation = await CreateMessage(conversation.matchId, {
                messagePrompt: message,
                name: selectedProfile?.firstName + " " + selectedProfile?.lastName,
                age: selectedProfile!.age,
                ethnicity: selectedProfile!.ethnicity,
                gender: selectedProfile!.gender,
                bio: selectedProfile!.bio
            });
            setConversation(newConversation);
        }
        setMessage('');
        setLoading(false);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            handleMessageSubmit();
        }
    }

    useEffect(() => {
        if (conversationContainer.current) {
            conversationContainer.current.scrollTop = conversationContainer.current.scrollHeight;
            messageInput.current?.focus();
        }
    }, [conversation, loading]);

    return (
        <div>
            <section className="flex gap-4 items-center justify-center mb-3">
                <img src={"http://localhost:8080/images/" + selectedProfile?.imageUrl} width={70} height={70} className="rounded-full" />
                <h3 className="text-2xl text-green-500/55 italic">
                    {selectedProfile?.firstName + " " + selectedProfile?.lastName}
                </h3>
            </section>

            <section className=" border rounded-lg border-gray-300 p-1"><div ref={conversationContainer} className="h-[60vh] overflow-y-auto p-2">
                    {
                        !!conversation && conversation.messages.map((m, i) => {
                            return (
                                <div key={i} className="mb-3">

                                    <div className={cn("border rounded-lg p-3 bg-gray-100 flex flex-col gap-2 text-end items-end",
                                        m.senderProfileId !== sessionStorage.getItem('userId') && "bg-green-500/10 text-start"
                                    )}>
                                        <p className="text-balance text-black">{m.messageText}</p>
                                        <div className="flex gap-2">
                                            {new Date().toISOString().split('T')[0] !== (m.sendDate!.substring(0, 10)) &&
                                                <p className="text-xs text-gray-300 pointer-events-none">Date: {m.sendDate?.substring(0, 10)}</p>}
                                            <p className="text-xs text-gray-300 pointer-events-none">{m.sendDate?.substring(11, 19)}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    {loading && <SkeletonCard />}
                </div>
            </section>
            <div className="flex gap-2 align-center mt-3">
                <textarea ref={messageInput} disabled={loading} onKeyDown={handleKeyDown}
                    placeholder="Type a message and press enter when ready to send"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="block w-full px-3 py-2 mt-0 bg-white border rounded-md shadow-sm focus:border-green-500/10 focus:ring focus:ring-green-200 focus:outline-none resize-y"
                    rows={4}
                />
            </div>
        </div>
    );
}