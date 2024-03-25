"use client";

import {useEffect, useRef} from "react";
import {type Message} from "ai";
import {useChat} from "ai/react";
import {AnimatePresence, motion} from "framer-motion";
import {SendHorizontal} from "lucide-react";

import {cn} from "@/lib/utils";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {Button, buttonVariants} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
// import ChatList from "@/components/chat/chat-list";
// import ChatBottombar from "@/components/chat/chat-bottombar";

interface ChatProps {
  lang: "es" | "en";
  initialMessages?: Message[];
}

export function Chat({lang}: ChatProps) {
  const {messages, input, handleInputChange, handleSubmit} = useChat();
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div className="flex h-full w-full flex-col overflow-y-auto overflow-x-hidden">
        <div
          ref={messagesContainerRef}
          className="flex h-full w-full flex-col overflow-y-auto overflow-x-hidden"
        >
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                layout
                animate={{opacity: 1, scale: 1, y: 0, x: 0}}
                className={cn(
                  "flex flex-col gap-2 whitespace-pre-wrap p-4",
                  message.role !== "assistant" ? "items-end" : "items-start",
                )}
                exit={{opacity: 0, scale: 1, y: 1, x: 0}}
                initial={{opacity: 0, scale: 1, y: 50, x: 0}}
                style={{
                  originX: 0.5,
                  originY: 0.5,
                }}
                transition={{
                  opacity: {duration: 0.1},
                  layout: {
                    type: "spring",
                    bounce: 0.3,
                    duration: messages.indexOf(message) * 0.05 + 0.2,
                  },
                }}
              >
                <div className="flex items-center gap-3">
                  {message.role !== "user" && (
                    <Avatar className="flex items-center justify-center border-2 border-gray-900">
                      <AvatarImage alt={message.role} height={6} src={message.role} width={6} />
                      <AvatarFallback className="uppercase">BOT</AvatarFallback>
                    </Avatar>
                  )}
                  <span className="max-w-xs rounded-md bg-accent p-3">{message.content}</span>
                  {message.role === "user" && (
                    <Avatar className="flex items-center justify-center border-2 border-red-500">
                      <AvatarImage alt={message.role} height={6} src={message.role} width={6} />
                      <AvatarFallback className="uppercase">US</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <form
          className="flex w-full items-center justify-between gap-2 p-2"
          onSubmit={handleSubmit}
        >
          <AnimatePresence initial={false}>
            <motion.div
              key="input"
              layout
              animate={{opacity: 1, scale: 1}}
              className="relative h-full w-full"
              exit={{opacity: 0, scale: 1}}
              initial={{opacity: 0, scale: 1}}
              transition={{
                opacity: {duration: 0.05},
                layout: {
                  type: "spring",
                  bounce: 0.15,
                },
              }}
            >
              <Textarea
                ref={inputRef}
                autoComplete="off"
                className="flex h-9 min-h-full w-full resize-none items-center overflow-hidden rounded-full border bg-background"
                name="message"
                placeholder="Aa"
                value={input}
                onChange={handleInputChange}
              />
            </motion.div>

            <Button type="submit" variant="outline">
              <SendHorizontal className="text-muted-foreground" size={20} />
            </Button>
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
}
