interface HeroImageProps {
  src: string;
  alt: string;
}

export default function HeroImage({src, alt}: HeroImageProps) {
  return (
    <figure className="relative flex size-28 shrink-0 overflow-hidden rounded-xl">
      <img alt={alt} className="aspect-square h-full w-full" src={src} />
    </figure>
  );
}
