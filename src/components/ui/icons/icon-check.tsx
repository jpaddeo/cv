import {cn} from "@/lib/utils";

export default function IconCheck({className, ...props}: React.ComponentProps<"svg">) {
  return (
    <svg
      className={cn("size-4", className)}
      fill="currentColor"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  );
}