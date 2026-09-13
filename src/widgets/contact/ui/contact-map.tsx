import Image from 'next/image';

type ContactMapProps = {
  alt: string;
};

export function ContactMap({ alt }: ContactMapProps) {
  return (
    <div className="relative h-75 w-full overflow-hidden">
      <Image src="/images/contact/map.png" alt={alt} fill sizes="100vw" className="object-cover" />
    </div>
  );
}
