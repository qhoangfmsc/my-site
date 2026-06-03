"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { Brush, Monitor, Sparkles } from "lucide-react";
import type { ComponentType, FC } from "react";

/* ── Brand SVG icons — consistent style, explicit width/height ── */
interface IconProps {
  className?: string;
}

const ICON_SIZE = 15;

const GitHubIcon: FC<IconProps> = ({ className }) => (
  <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <title>GitHub</title>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon: FC<IconProps> = ({ className }) => (
  <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <title>LinkedIn</title>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon: FC<IconProps> = ({ className }) => (
  <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <title>Facebook</title>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon: FC<IconProps> = ({ className }) => (
  <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <title>Instagram</title>
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.441 1.441 0 0 1 2.88 0z" />
  </svg>
);

const MailIcon: FC<IconProps> = ({ className }) => (
  <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <title>Email</title>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

interface SocialItem {
  name: string;
  url: string;
  icon: ComponentType<IconProps>;
}

interface ContactCardData {
  email: string;
  label: string;
  description: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  socials: SocialItem[];
}

const CONTACT_CARDS: ContactCardData[] = [
  {
    email: "nqh130901@gmail.com",
    label: "Engineering & IT",
    description: "Projects, collaborations, and tech opportunities",
    icon: Monitor,
    socials: [
      { name: "Email", url: "mailto:nqh130901@gmail.com", icon: MailIcon },
      { name: "GitHub", url: "https://github.com/qhoangfmsc", icon: GitHubIcon },
      { name: "LinkedIn", url: "https://linkedin.com/in/qhoangfmsc", icon: LinkedInIcon },
    ],
  },
  {
    email: "quochoangofficial2001@gmail.com",
    label: "Art & Creative",
    description: "Music, design, and artistic endeavors",
    icon: Brush,
    socials: [
      { name: "Email", url: "mailto:quochoangofficial2001@gmail.com", icon: MailIcon },
      { name: "Facebook", url: "https://facebook.com/qhoangfmsc", icon: FacebookIcon },
      { name: "Instagram", url: "https://instagram.com/qhoangfmsc", icon: InstagramIcon },
    ],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const ContactNexus: FC = () => {
  return (
    <section
      id="contact"
      className="relative z-10 w-full overflow-hidden py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 flex flex-col items-center text-center md:mb-20"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-10 bg-linear-to-r from-transparent to-museum-gold/50" />
            <Sparkles
              size={14}
              className="text-museum-gold/60"
              strokeWidth={1.5}
            />
            <div className="h-px w-10 bg-linear-to-l from-transparent to-museum-gold/50" />
          </div>

          <h2 className="mb-4 font-display text-3xl font-light tracking-[0.3em] text-white md:text-4xl">
            GET IN TOUCH
          </h2>

          <p className="max-w-md text-sm leading-relaxed tracking-wide text-museum-muted">
            Have a project in mind, want to collaborate, or just say hello?
            <br />I always enjoy connecting with fellow creators.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.15 }}
          className="grid gap-4 md:grid-cols-2 md:gap-6"
        >
          {CONTACT_CARDS.map((card) => {
            const CardIcon = card.icon;
            return (
              <motion.div
                key={card.email}
                variants={cardVariants}
                className="group relative flex flex-col items-center gap-5 overflow-hidden rounded-2xl border border-white/8 bg-white/2 px-6 py-8 backdrop-blur-sm transition-all duration-500 hover:border-museum-gold/30 hover:bg-white/4 hover:shadow-[0_0_60px_rgba(212,175,55,0.08)] md:px-8 md:py-10"
              >
                {/* Hover gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-museum-gold/3 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Category icon */}
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-museum-gold/20 bg-museum-gold/6 transition-all duration-500 group-hover:border-museum-gold/40 group-hover:bg-museum-gold/10 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                  <CardIcon
                    size={22}
                    className="text-museum-gold/70 transition-colors duration-500 group-hover:text-museum-gold"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Label & email */}
                <div className="relative flex flex-col items-center gap-1.5 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-museum-gold/50">
                    {card.label}
                  </span>
                  <a
                    href={`mailto:${card.email}`}
                    className="font-display text-base tracking-wider text-white/80 transition-colors duration-300 hover:text-museum-gold md:text-lg"
                  >
                    {card.email}
                  </a>
                  <span className="mt-1 text-[11px] leading-relaxed tracking-wide text-museum-muted/50">
                    {card.description}
                  </span>
                </div>

                {/* Social links per card */}
                <div className="relative mt-2 flex items-center gap-3">
                  {card.socials.map((social) => {
                    const SocialIcon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-white/2 transition-all duration-300 hover:border-museum-gold/30 hover:bg-museum-gold/6 hover:shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                        aria-label={social.name}
                        title={social.name}
                      >
                        <SocialIcon
                          className="text-white/40 transition-colors duration-300 hover:text-museum-gold"
                        />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto mt-16 h-px w-32 origin-center bg-linear-to-r from-transparent via-museum-gold/30 to-transparent md:mt-20"
        />
      </div>
    </section>
  );
};

export default ContactNexus;
