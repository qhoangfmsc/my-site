"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type FC, useState } from "react";
import { NAV_ITEMS } from "../../data/navigation";

const MuseumHeader: FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Hide header on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-150%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ viewTransitionName: "site-header" }}
        className="fixed left-1/2 top-4 z-50 w-[95%] max-w-4xl -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.6)] backdrop-blur-2xl transition-colors hover:border-white/20 hover:bg-black/60 md:top-8"
      >
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/v1"
            className="group flex items-center gap-3 font-display text-lg tracking-wider text-white transition-colors duration-300 hover:text-museum-gold"
          >
            <div className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-museum-gold/30 transition-all duration-500 group-hover:ring-museum-gold/60 group-hover:shadow-[0_0_12px_rgba(212,175,55,0.3)]">
              <Image
                src="/images/logo.png"
                alt="qhoangf logo"
                fill
                sizes="36px"
                className="object-cover"
                priority
              />
            </div>
            <span className="hidden leading-none sm:inline font-bold">
              qhoangf.
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-2 lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    isActive ? "text-black" : "text-white/60 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 z-0 rounded-full bg-museum-gold shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action / Mobile Nav */}
          <div className="flex items-center gap-4">
            <Link
              href="/v1/home#contact"
              className="hidden rounded-full border border-museum-gold/30 bg-museum-gold/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-museum-gold transition-all duration-300 hover:bg-museum-gold hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] md:block"
            >
              Contact me
            </Link>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed left-4 right-4 top-24 z-40 overflow-hidden rounded-3xl border border-white/10 bg-black/80 px-4 py-6 shadow-2xl backdrop-blur-3xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-2xl px-6 py-4 text-center font-display text-lg font-bold tracking-widest transition-colors duration-200 ${
                      isActive
                        ? "bg-museum-gold/20 text-museum-gold"
                        : "text-white/60 hover:bg-white/10 hover:text-white"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Contact link */}
              <div className="mx-6 my-2 h-px bg-white/10" />
              <Link
                href="/v1/home#contact"
                className="block rounded-2xl bg-museum-gold/10 px-6 py-4 text-center font-display text-lg font-bold tracking-widest text-museum-gold transition-colors duration-200 hover:bg-museum-gold/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MuseumHeader;
