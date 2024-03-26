import Section from "@/components/ui/section";
import ProjectCard from "@/components/project-card";
import {getDictionary} from "@/lib/dictionaries";

export interface Project {
  name: string;
  startDate: string;
  endDate?: string;
  description: string;
  highlights: string[];
  url: string;
}

interface ProjectsProps {
  lang: "es" | "en";
  projects: Project[];
}

export default async function Projects({lang, projects}: ProjectsProps) {
  const dictionary = await getDictionary(lang);
  const {labels} = dictionary;

  return (
    <Section className="flex flex-col gap-y-6" title={labels.projects}>
      <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
        {projects.map((prj: Project) => (
          <ProjectCard key={prj.name} {...prj} />
        ))}
      </div>
    </Section>
  );
}
