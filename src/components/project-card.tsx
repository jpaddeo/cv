import {Card, CardHeader, CardContent, CardDescription, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

interface ProjectCardProps {
  name: string;
  startDate: string;
  endDate?: string;
  description: string;
  highlights: string[];
  url: string;
}

export default function ProjectCard({name, description, highlights, url}: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted">
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-base">
            {url ? (
              <a
                className="inline-flex items-center gap-1 hover:underline"
                href={url}
                rel="noopener"
                target="_blank"
              >
                {name}
              </a>
            ) : (
              name
            )}
          </CardTitle>
          {url ? (
            <div className="hidden font-mono text-xs underline print:visible">
              {url.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
          ) : null}
          <CardDescription className="font-mono text-xs">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="flex flex-wrap gap-1">
          {highlights.map((highlight) => (
            <Badge key={highlight} className="px-1 py-0 text-[10px]" variant="secondary">
              {highlight}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
