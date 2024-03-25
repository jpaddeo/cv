import {useRef} from "react";
import {SendHorizontal} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";
import {useChat} from "ai/react";

import {cn} from "@/lib/utils";
import {Button, buttonVariants} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";

export default function ChatBottombar({}) {
  const {input, handleInputChange, handleSubmit} = useChat();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  return (
    <form className="flex w-full items-center justify-between gap-2 p-2" onSubmit={handleSubmit}>
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

        <Button
          className={cn(
            buttonVariants({variant: "ghost", size: "icon"}),
            "h-9 w-9",
            "shrink-0 dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white",
          )}
          type="submit"
        >
          <SendHorizontal className="text-muted-foreground" size={20} />
        </Button>
      </AnimatePresence>
    </form>
  );
}
