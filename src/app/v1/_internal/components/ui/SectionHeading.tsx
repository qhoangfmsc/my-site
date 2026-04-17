import type { FC } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({
  title,
  subtitle,
  className = "",
}) => {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="font-display text-3xl font-bold tracking-tight text-museum-text md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-lg text-museum-muted">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
