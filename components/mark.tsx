export function Mark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none">
      <path d="M7 7.5v17.5M7 7.5 25 25.5M25 5v20.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square" />
      <circle cx="25" cy="5" r="1.45" fill="#8a3d12" />
    </svg>
  );
}
