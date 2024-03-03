import {getDictionary} from "@/lib/dictionaries";
import Section from "@/components/ui/section";
import SkillKeywords from "@/components/ui/skill-keywords";

interface Skill {
  name: string;
  keywords: string[];
}
interface SkillsProps {
  lang: "es" | "en";
  skills: Skill[];
}

export default async function Skills({lang, skills}: SkillsProps) {
  const dictionary = await getDictionary(lang);
  const {labels} = dictionary;

  return (
    <Section className="flex flex-col gap-y-4" title={labels.skills as string}>
      {skills.map((skill: Skill) => (
        <h3
          key={skill.name}
          className="flex flex-col flex-wrap items-start justify-between gap-y-2 font-bold leading-none"
        >
          {skill.name}
          <SkillKeywords keywords={skill.keywords} />
        </h3>
      ))}
    </Section>
  );
}
