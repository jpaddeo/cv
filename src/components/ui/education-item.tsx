import React from "react";

interface EducationItemProps {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  courses?: string[];
}

export default function EducationItem({
  institution,
  url,
  area,
  studyType,
  startDate,
  endDate,
  courses = [],
}: EducationItemProps) {
  return (
    <article className="-mt-4 w-full rounded-lg">
      <div className="flex flex-col space-y-1.5">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex flex-wrap items-center gap-1 font-bold leading-none">
            {!endDate && <span className="text-xl text-green-500">•</span>}
            <a
              aria-label={institution}
              className="hover:underline"
              href={url}
              rel="noopener noreferrer"
              target="_blank"
              title={institution}
            >
              {institution}
            </a>
          </h3>
          <div className="font-mono text-xs tabular-nums text-slate-500">
            {startDate} - {endDate || "(...current)"}
          </div>
        </div>
        <h4 className="font-mono text-sm leading-none text-slate-500">{area}</h4>
      </div>
      <div className="grid-cols-[repeat(auto-fill, _minmax(200px, _1fr))] mt-2 grid flex-col gap-1 md:grid-cols-3">
        {courses.map((course: string) => (
          <span
            key={course}
            className="font.mono text-nowrap rounded-md border border-transparent bg-slate-200 px-2 py-0.5 align-middle text-xs font-semibold transition-colors hover:bg-slate-200/60 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
          >
            {course}
          </span>
        ))}
      </div>
    </article>
  );
}
