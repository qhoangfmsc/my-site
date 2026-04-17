import { CodeXml, Globe, Landmark, type LucideIcon, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "../../data/social-links";
import { MUSEUM_NAME } from "../../lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  Github: CodeXml,
  Linkedin: Globe,
  Mail,
};

export default function MuseumFooter() {
  return (
    <footer className="border-t border-museum-frame/50 bg-museum-wall">
      <div className="mx-auto max-w-7xl p-6 md:px-6">
        <div className="flex flex-row items-center justify-end gap-6 text-center">
          {/* Social links */}
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => {
              const Icon = ICON_MAP[link.iconName];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-museum-muted transition-colors duration-200 hover:text-museum-gold"
                  aria-label={link.name}
                >
                  {Icon ? <Icon size={20} /> : link.name}
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-xs text-museum-muted">
            © 2026 Quoc Hoang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
