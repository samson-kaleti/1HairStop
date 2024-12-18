import { Link } from '../Link';

interface NavLinksProps {
  className?: string;
}

export function NavLinks({ className = '' }: NavLinksProps) {
  return (
    <div className={className}>
      <Link className=' font-serif text-sm' href="/best-sellers">BEST SELLERS</Link>
      <Link className=' font-serif text-sm' href="/hair-extensions">HAIR EXTENSIONS</Link>
      <Link className=' font-serif text-sm' href="/hair-thinning">HAIR THINNING</Link>
      <Link className=' font-serif text-sm' href="/hair-care">HAIR CARE</Link>
      <Link className=' font-serif text-sm' href="/book">BOOK AN APPOINTMENT</Link>
      <Link className=' font-serif text-sm' href="/help">HELP</Link>
    </div>
  );
}