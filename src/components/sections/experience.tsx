import ExperienceItem from "@/components/ui/experience-item";

interface Work {
  name: string;
  position: string;
  url: string;
  startDate: string;
  summary: string;
  highlights: string[];
  endDate?: string;
}
interface ExperienceProps {
  work: Work[];
}

export default function Experience({work}: ExperienceProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6">
      {work.map((exp: Work) => (
        <ExperienceItem key={exp.name} {...exp} />
      ))}
    </div>
  );
}
