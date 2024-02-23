import Section from "@/components/ui/section";
import SocialLinks from "@/components/social-links";
import WorldWide from "@/components/ui/icons/world-wide";
import HeroImage from "@/components/hero-image";
import {type Profile} from "@/components/social-links";

interface HeroProps {
  basics: {
    name: string;
    label: string;
    email: string;
    phone: string;
    location: {
      city: string;
      region: string;
    };
    profiles: Profile[];
    image: string;
  };
}

export default function Hero({basics}: HeroProps) {
  const {name, label, email, phone, profiles, location, image} = basics;
  const {city, region} = location;

  return (
    <Section>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-3xl font-bold">{name}</h1>
          <h2 className="text-pretty font-mono text-sm text-slate-500">{label}</h2>
          <div className="items-center text-pretty font-mono text-xs text-slate-500">
            <a
              className="inline-flex gap-x-1 align-baseline leading-none hover:underline"
              href={`https://www.google.com/maps/place/${city},${region}`}
              rel="noopener"
              target="_blank"
            >
              <WorldWide />
              <span className="tracking-tighter">
                {city}, {region}
              </span>
            </a>
          </div>
          <SocialLinks email={email} phone={phone} profiles={profiles} />
        </div>
        <HeroImage alt={name} src={image} />
      </div>
    </Section>
  );
}
