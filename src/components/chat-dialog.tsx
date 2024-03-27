"use client";

import {useRef, useState} from "react";

import {Chat} from "@/components/chat/chat";
import {ChatBubble} from "@/components/ui/icons";

interface ChatDialogProps {
  lang: "es" | "en";
  defaultOpened?: boolean;
}

export default function ChatDialog({lang, defaultOpened = false}: ChatDialogProps) {
  const dialogRef = useRef(null);
  const [opened, setOpened] = useState(defaultOpened || false);

  const openModal = () => {
    dialogRef.current.showModal();
    setOpened(true);
  };

  const closeModal = () => {
    dialogRef.current.close();
    setOpened(false);
  };

  return (
    <>
      {!opened && (
        <button
          className="fixed bottom-2 right-4 z-50 animate-pulse rounded-full bg-gray-200 p-4"
          type="button"
          onClick={openModal}
        >
          <ChatBubble className="h-6 w-6" />
        </button>
      )}

      <dialog
        ref={dialogRef}
        className="blackdrop:blur-xl w-full max-w-3xl rounded-xl backdrop:bg-gray-900/70"
        onCancel={closeModal}
        onClose={closeModal}
      >
        <Chat lang={lang} />
      </dialog>
    </>
  );
}
