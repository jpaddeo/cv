import {cn} from "@/lib/utils";

interface SectionProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({className, title = "", children}: SectionProps) {
  return (
    <section className={cn("m-auto mb-10 mt-0 max-w-3xl", className)}>
      {title ? <h2 className="mb-4 text-2xl font-bold leading-6">{title}</h2> : null}
      {children}
    </section>
  );
}
