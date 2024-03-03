import {getDictionary} from "@/lib/dictionaries";
import Section from "@/components/ui/section";
import EducationItem from "@/components/ui/education-item";

interface Education {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  courses?: string[];
}

interface EducationProps {
  lang: "es" | "en";
  education: Education[];
}

export default async function Experience({lang, education}: EducationProps) {
  const dictionary = await getDictionary(lang);
  const {labels} = dictionary;

  return (
    <Section className="flex flex-col gap-y-8" title={labels.education as string}>
      {education.map((educ: Education) => (
        <EducationItem key={educ.institution} {...educ} />
      ))}
    </Section>
  );
}
