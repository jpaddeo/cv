import {getDictionary} from "@/lib/dictionaries";
import ExperienceItem from "@/components/ui/experience-item";
import Section from "@/components/ui/section";

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
  lang: "es" | "en";
  work: Work[];
}

export default async function Experience({lang, work}: ExperienceProps) {
  const dictionary = await getDictionary(lang);
  const {labels} = dictionary;

  return (
    <Section className="flex flex-col gap-y-10" title={labels.experience}>
      {work.map((exp: Work) => (
        <ExperienceItem key={exp.name} {...exp} />
      ))}
    </Section>
  );
}
