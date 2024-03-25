import {cn} from "@/lib/utils";

export default function IconArrowRight({className, ...props}: React.ComponentProps<"svg">) {
  return (
    <svg
      className={cn("size-4", className)}
      fill="currentColor"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
    </svg>
  );
}
