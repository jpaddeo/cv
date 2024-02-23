import {getDictionary} from "@/lib/dictionaries";

import Section from "../ui/section";

interface AboutProps {
  lang: "es" | "en";
  summary: string;
}

export default async function About({lang, summary}: AboutProps) {
  const dictionary = await getDictionary(lang);
  const {labels} = dictionary;

  return (
    <Section title={labels.about}>
      <p className="text-pretty font-mono text-sm text-slate-500">{summary}</p>
    </Section>
  );
}
