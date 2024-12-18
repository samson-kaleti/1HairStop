
interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ href, children, className = '' }: LinkProps) {
  return (
    <a
      href={href}
      className={`
        relative 
        text-gray-800 
        hover:text-gray-600 
        after:absolute 
        after:left-0 
        after:bottom-0 
        after:h-[2px] 
        after:bg-gray-600 
        after:w-0 
        hover:after:w-full 
        after:transition-all 
        after:duration-300 
        ${className}
      `}
    >
      {children}
    </a>
  );
}
