import SocialLinkItem from "@/components/social-link-item";

export interface Profile {
  network: string;
  username: string;
  url: string;
}

interface SocialLinksProps {
  email: string;
  phone: string;
  profiles: Profile[];
}

export default function SocialLinks({email, phone, profiles}: SocialLinksProps) {
  return (
    <>
      <footer className="hidden font-mono text-sm text-slate-500 print:flex print:flex-col print:gap-y-1">
        <p>{email}</p>
        <p>{phone}</p>
      </footer>
      <footer className="flex gap-x-1 pt-1 font-mono text-sm text-slate-900 print:hidden">
        {profiles.map(({network, username, url}: Profile) => (
          <SocialLinkItem key={network} network={network} url={url} username={username} />
        ))}
      </footer>
    </>
  );
}
