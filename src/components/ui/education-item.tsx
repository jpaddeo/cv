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
            {startDate} - {endDate || "..."}
          </div>
        </div>
        <div className="font-mono text-sm leading-none text-slate-500">
          <div className="flex flex-col gap-y-1">
            {area} <span className="text-sm font-bold">{courses.join(", ")}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
