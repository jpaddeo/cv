interface ExperienceItemProps {
  name: string;
  url: string;
  position: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights?: string[];
}

export default function ExperienceItem({
  name,
  url,
  position,
  startDate,
  endDate,
  summary,
  highlights = [],
}: ExperienceItemProps) {
  return (
    <article className="-mt-4 w-full rounded-lg">
      <div className="flex flex-col space-y-1.5">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex flex-wrap items-center gap-1 font-bold leading-none">
            <a
              aria-label={name}
              className="hover:underline"
              href={url}
              rel="noopener noreferrer"
              target="_blank"
              title={name}
            >
              {name}
            </a>
            {!endDate && <span className="text-xl text-blue-400">•</span>}
          </h3>
          <div className="font-mono text-xs tabular-nums text-slate-500">
            {startDate} - {endDate || "..."}
          </div>
        </div>
        <h4 className="font-mono text-sm leading-none">{position}</h4>
      </div>
      <div className="mt-2 text-pretty font-mono text-sm text-slate-500">
        <div className="flex flex-col gap-y-1">
          {summary} <span className="text-sm font-bold">Refs.: {highlights.join(", ")}</span>
        </div>
      </div>
    </article>
  );
}
