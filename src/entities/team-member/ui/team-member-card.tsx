import Image from 'next/image';
import { useTranslations } from 'next-intl';

export type TeamMember = {
  name: string;
  positionKey: 'ceoAndFounder' | 'worker' | 'securityGuard' | 'seniorFarmerManager';
  image: string;
};

type TeamMemberCardProps = {
  member: TeamMember;
  eager?: boolean;
};

const socialActions = [
  { name: 'Facebook', icon: '/images/footer/facebook.svg' },
  { name: 'Twitter', icon: '/images/footer/twitter.svg' },
  { name: 'Pinterest', icon: '/images/footer/pinterest.svg' },
  { name: 'Instagram', icon: '/images/footer/instagram.svg' },
] as const;

export function TeamMemberCard({ member, eager = false }: TeamMemberCardProps) {
  const t = useTranslations('TeamMemberCard');
  const tPosition = useTranslations('ProfessionalMembers.positions');
  const position = tPosition(member.positionKey);
  return (
    <article
      className="group overflow-hidden border border-gray-100 bg-background transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-transparent hover:shadow-[0_20px_48px_rgba(0,38,3,0.08)] focus-visible:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary focus-within:-translate-y-0.5 focus-within:shadow-[0_20px_48px_rgba(0,38,3,0.08)]"
      tabIndex={0}
      aria-label={`${member.name}, ${position}`}
    >
      <div className="relative h-70 overflow-hidden bg-green-gray-50">
        <Image
          src={member.image}
          alt={`${member.name}, ${position}`}
          fill
          loading={eager ? 'eager' : 'lazy'}
          sizes="(min-width: 1280px) 312px, (min-width: 768px) 33vw, (min-width: 520px) 50vw, 100vw"
          className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02] group-focus-within:scale-[1.02]"
        />

        <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100" />

        <nav
          aria-label={t('socialMedia', { name: member.name })}
          className="absolute inset-0 flex items-center justify-center gap-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
        >
          {socialActions.map((social) => (
            <a
              key={social.name}
              href="#"
              aria-label={t('socialProfile', {
                name: member.name,
                platform: social.name,
              })}
              className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-primary focus-visible:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
            >
              <Image
                src={social.icon}
                alt=""
                width={18}
                height={18}
                className="brightness-0 invert"
              />
            </a>
          ))}
        </nav>
      </div>

      <div className="px-5 py-3.5">
        <h3 className="text-lg leading-normal font-medium text-gray-900">{member.name}</h3>
        <p className="text-sm leading-normal text-gray-500">{position}</p>
      </div>
    </article>
  );
}
