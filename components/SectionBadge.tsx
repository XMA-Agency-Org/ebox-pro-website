interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionBadge({ children, className = "" }: SectionBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium uppercase tracking-wider mb-4 ${className}`}
    >
      {children}
    </span>
  );
}
