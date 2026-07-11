export function WaveDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`absolute inset-x-0 bottom-0 h-14 w-full text-background md:h-20 ${className}`}
    >
      <path
        fill="currentColor"
        d="M0,40 C240,90 480,0 720,24 C960,48 1200,96 1440,32 L1440,100 L0,100 Z"
      />
    </svg>
  );
}
