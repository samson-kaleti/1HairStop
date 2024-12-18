
interface ViewMoreButtonProps {
  href: string;
  className?: string;
}

export function ViewMoreButton({ href, className = '' }: ViewMoreButtonProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <a
        href={href}
        className="inline-block bg-[#c5b1a2] text-white px-12 py-3  text-sm hover:bg-[#dbbca4] transition-colors"
      >
        VIEW ALL
      </a>
    </div>
  );
}