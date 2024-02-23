import {GitHub, LinkedIn, Mail, Phone, X} from "@/components/ui/icons";

interface SocialLinkItemProps {
  network: string;
  url: string;
  username: string;
}

const LINK_CLASS =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-slate-50 hover:bg-slate-200 hover:text-slate-900 size-8";

export default function SocialLinkItem({network, url, username}: SocialLinkItemProps) {
  return (
    <>
      {network === "Mail" && (
        <a className={LINK_CLASS} href={url} title={`Send email to ${username}`}>
          <Mail />
        </a>
      )}
      {network === "Phone" && (
        <a className={LINK_CLASS} href={url} title={`Call to ${username}`}>
          <Phone />
        </a>
      )}
      {network === "GitHub" && (
        <a
          className={LINK_CLASS}
          href={url}
          rel="noopener noreferrer"
          target="_blank"
          title={`Click to go to ${network} of ${username}`}
        >
          <GitHub />
        </a>
      )}
      {network === "LinkedIn" && (
        <a
          className={LINK_CLASS}
          href={url}
          rel="noopener noreferrer"
          target="_blank"
          title={`Click to go to ${network} of ${username}`}
        >
          <LinkedIn />
        </a>
      )}
      {network === "X" && (
        <a
          className={LINK_CLASS}
          href={url}
          rel="noopener noreferrer"
          target="_blank"
          title={`Click to go to ${network} of ${username}`}
        >
          <X />
        </a>
      )}
    </>
  );
}
