import {getCV} from "@/lib/cv";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Skills from "@/components/sections/skills";

interface HomePageParams {
  params: {
    lang: "es" | "en";
  };
}

export default async function HomePage({params: {lang}}: HomePageParams) {
  const cv = await getCV(lang);
  const {basics, work, education, skills} = cv;
  const {summary} = basics;

  return (
    <main className="m-auto w-full p-4">
      <Hero basics={basics} />
      <About lang={lang} summary={summary} />
      <Experience lang={lang} work={work} />
      <Education education={education} lang={lang} />
      <Skills lang={lang} skills={skills} />
    </main>
  );
}
