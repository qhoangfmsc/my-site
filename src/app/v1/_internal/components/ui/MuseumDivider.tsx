import type { FC } from "react";

interface MuseumDividerProps {
  className?: string;
}

const MuseumDivider: FC<MuseumDividerProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center gap-4 py-8 ${className}`}>
      <span className="h-px flex-1 bg-museum-frame" />
      <span className="text-museum-gold">✦</span>
      <span className="h-px flex-1 bg-museum-frame" />
    </div>
  );
};

export default MuseumDivider;
