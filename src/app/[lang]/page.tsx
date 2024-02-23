import {getCV} from "@/lib/cv";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";

interface HomePageParams {
  params: {
    lang: "es" | "en";
  };
}

export default async function HomePage({params: {lang}}: HomePageParams) {
  const cv = await getCV(lang);
  const {basics, work} = cv;
  const {summary} = basics;

  return (
    <main className="'p-4 m-auto w-full">
      <Hero basics={basics} />
      <About lang={lang} summary={summary} />
      <Experience work={work} />
    </main>
  );
}
