import React from "react";

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
    <article className="w-full rounded-lg">
      <div className="flex flex-col space-y-1.5">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex flex-wrap gap-1 font-semibold leading-none">
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
            {highlights.map((tag: string) => (
              <span
                key={tag}
                className="ml-1 inline-flex gap-x-1 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
              >
                <div className="inline-flex flex-1 items-center text-nowrap rounded-md border border-transparent bg-slate-200 px-2 py-0.5 align-middle font-mono text-xs font-semibold transition-colors hover:bg-slate-200/60">
                  {tag}
                </div>
              </span>
            ))}
          </h3>
          <div className="text-sm tabular-nums text-slate-500">
            {startDate} - {endDate || "(..current)"}
          </div>
        </div>
        <h4 className="font-mono text-sm leading-none">{position}</h4>
      </div>
      <div className="mt-2 text-pretty font-mono text-xs text-slate-500">{summary}</div>
    </article>
  );
}
