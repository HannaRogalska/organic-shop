import Image from 'next/image';

type ProductCardActionProps = {
  icon: string;
  label: string;
  onClick?: () => void;
};

export function ProductCardAction({ icon, label, onClick }: ProductCardActionProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid size-10 place-items-center rounded-full border border-gray-100 bg-background transition-colors duration-200 hover:border-primary hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <Image src={icon} alt="" width={20} height={20} className="size-5" />
    </button>
  );
}
