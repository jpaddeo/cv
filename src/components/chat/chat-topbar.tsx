import {Info, Phone, Video} from "lucide-react";
import Link from "next/link";

import {buttonVariants} from "@/components/ui/button";
import {cn} from "@/lib/utils";

export const TopbarIcons = [{icon: Phone}, {icon: Video}, {icon: Info}];

export default function ChatTopbar() {
  return (
    <div className="flex h-20 w-full items-center justify-between border-b p-4">
      <div>
        {TopbarIcons.map((icon, index) => (
          <Link
            key={index}
            className={cn(
              buttonVariants({variant: "ghost", size: "icon"}),
              "h-9 w-9",
              "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white",
            )}
            href="#"
          >
            <icon.icon className="text-muted-foreground" size={20} />
          </Link>
        ))}
      </div>
    </div>
  );
}
