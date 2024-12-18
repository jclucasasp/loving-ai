import { Button } from "@/components/ui/button";
import EmojiPicker from "emoji-picker-react";
import {
    PopoverContent,
    Popover,
    PopoverTrigger,
  } from "@/components/ui/popover";
import { useState } from "react";
import React from "react";

type EmojiComponentProps = {
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  message: string;
  messageInputContainer: React.RefObject<HTMLTextAreaElement>;
};
export default function EmojiComponent({setMessage, message, messageInputContainer}: EmojiComponentProps) {

    const [showModal, setShowModal] = useState<boolean>(false);
    const emojiHandleClick = (emoji: any) => {
        setMessage(message + emoji.emoji + " ");
        setShowModal(false);
        messageInputContainer.current?.focus();
      };

    return (
        <>
        <Popover open={showModal}>
        <PopoverTrigger asChild>
          <Button
            className="rounded-full mt-2"
            variant={"secondary"}
            onClick={() => setShowModal(!showModal)}
            aria-label="Open emoji picker"
          >
            Emojis
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex absolute bottom-14 -left-2 ">
          <div className="">
          <EmojiPicker onEmojiClick={emojiHandleClick} width={250} height={400} />
          </div>
        </PopoverContent>
      </Popover>
      </>
    )
};