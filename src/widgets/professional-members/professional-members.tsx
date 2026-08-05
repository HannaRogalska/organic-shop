import { TeamMemberCard } from '@/entities/team-member/ui/team-member-card';
import { TEAM_MEMBERS } from './model/constants';

export function ProfessionalMembers() {
  return (
    <section className="mx-auto max-w-330 py-15" aria-labelledby="professional-members-title">
      <header className="mx-auto mb-9 max-w-[621px] text-center">
        <p className="text-sm leading-none font-medium tracking-[0.02em] text-primary uppercase">
          Team
        </p>
        <h2
          id="professional-members-title"
          className="mt-2 text-[32px] leading-[1.2] font-semibold text-gray-900 sm:text-4xl"
        >
          Our Professional Members
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-6 min-[520px]:grid-cols-2 lg:grid-cols-4">
        {TEAM_MEMBERS.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}
