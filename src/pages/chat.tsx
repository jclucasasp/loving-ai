import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ConversationInterface } from "@/lib/interfaces";
import { CreateMessage } from "@/api/conversation-api";
import { useEffect, useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function ChatMessages() {
  const { conversationData, toProfile, loggedInUser } = useLocation().state;

  const [conversation, setConversation] =
    useState<ConversationInterface | null>(conversationData);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const messageInputContainer = useRef<HTMLTextAreaElement>(null);
  const conversationContainer = useRef<HTMLDivElement>(null);

  const handleMessageSubmit = async () => {
    if (message.trim()) {
      setLoading(true);
      const newConversation = await CreateMessage(conversation!.matchId, {
        messagePrompt: message,
        userId: loggedInUser?.userId,
        name: toProfile?.firstName + " " + toProfile?.lastName,
        age: toProfile?.age || 0,
        ethnicity: toProfile?.ethnicity || "",
        gender: toProfile?.gender || "",
        bio: toProfile?.bio || "",
        personality: toProfile?.myersBriggsPersonalityType || "",
      });
      setConversation(newConversation);
      setLoading(false);
    }
    setMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleMessageSubmit();
    }

    if (e.key === "Enter" && e.shiftKey) {
      if ((e.type = "keydown")) {
        return 13; // 13 is enter
      }
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (conversationContainer.current) {
      conversationContainer.current.scrollTop =
        conversationContainer.current.scrollHeight;
      messageInputContainer.current?.focus();
    }
  }, [conversation, loading]);

  return (
    <div>
      <section className="flex gap-4 items-center justify-center mb-3">
        <Avatar className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] md:w-[65px] md:h-[65px]">
          <AvatarImage
            src={"http://localhost:8080/images/" + toProfile?.imageUrl}
            alt="profile image"
          />
          <AvatarFallback>?</AvatarFallback>
        </Avatar>
        <h3 className="text-lg sm:text-xl md:text-2xl text-fuchsia-500 italic">
          {toProfile?.firstName + " " + toProfile?.lastName}
        </h3>
      </section>

      <Card className="p-2">
        <article
          className="p-2 overflow-y-auto h-[65vh]"
          ref={conversationContainer}
        >
          {!!conversation &&
            conversation.messages.map((m, i) => {
              return (
                <div key={i} className="mb-3">
                  <div
                    className={cn(
                      "border rounded-lg p-3 bg-gray-100 flex flex-col gap-2 text-end items-end",
                      m.senderProfileId !== loggedInUser.userId &&
                        "bg-green-500/10 text-start"
                    )}
                  >
                    <p className="text-xs sm:text-sm md:text-base text-balance text-black whitespace-pre">
                      {m.messageText}
                    </p>
                    <div className="flex gap-2 text-xs text-gray-300 pointer-events-none">
                      {new Date().toISOString().split("T")[0] !==
                        m.sendDate!.substring(0, 10) && (
                        <p>Date: {m.sendDate?.substring(0, 10)}</p>
                      )}
                      <p>@ {m.sendDate?.substring(11, 19)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          {loading && (
            <section className="flex items-center justify-end gap-3">
              <Avatar>
                <AvatarImage
                  src={"http://localhost:8080/images/" + toProfile?.imageUrl}
                  alt="profile image"
                />
                <AvatarFallback>?</AvatarFallback>
              </Avatar>
              <span className="text-green-500 animate-pulse">Busy typing...</span>
            </section>
          )}
        </article>
      </Card>
      
        <Textarea className="text-xs sm:text-sm md:text-base flex gap-2 align-center mt-3"
          ref={messageInputContainer}
          disabled={loading}
          onKeyDown={handleKeyDown}
          rows={4}
          placeholder={
            "Press Shift and Enter at the same time to go to next line.\nHit Enter to send."
          }
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      
    </div>
  );
}
