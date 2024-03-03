interface SkillKeywordsProps {
  keywords: string[];
}

export default function SkillKeywords({keywords}: SkillKeywordsProps) {
  return (
    <div className="flex w-full flex-wrap gap-2">
      {keywords.map((keyword: string) => (
        <span
          key={keyword}
          className="text-nowrap rounded-md border border-transparent bg-slate-200 px-2 py-0.5 align-middle font-mono text-xs font-semibold transition-colors hover:bg-slate-200/60 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
        >
          {keyword}
        </span>
      ))}
    </div>
  );
}
