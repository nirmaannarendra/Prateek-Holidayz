"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ListIcon, PhoneIcon, XIcon } from "@phosphor-icons/react";
import { companyInfo, navLinks } from "@/lib/data";
import { useSafeReducedMotion } from "./motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useSafeReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-surface/95 shadow-soft backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between py-3">
        <Link
          href="/"
          className={`font-display text-xl font-semibold tracking-tight transition-colors ${
            solid ? "text-primary" : "text-white"
          }`}
        >
          {companyInfo.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`link-underline text-sm font-medium transition-colors ${
                solid ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"
              } ${pathname === link.href ? (solid ? "text-primary" : "text-white") : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              solid ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"
            }`}
          >
            <PhoneIcon size={18} weight="fill" />
            {companyInfo.phone}
          </a>
          <Link
            href="/contact"
            className="cursor-pointer rounded-full bg-accent-dark px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform duration-200 hover:scale-105 hover:bg-accent"
          >
            Plan My Trip
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
          className={`cursor-pointer p-2 lg:hidden ${solid ? "text-primary" : "text-white"}`}
        >
          {menuOpen ? <XIcon size={26} /> : <ListIcon size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            id="mobile-nav"
            key={shouldReduceMotion ? "reduced" : "motion"}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-surface shadow-soft lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 pb-6 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="min-h-11 rounded-lg px-2 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-surface-alt hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                className="flex min-h-11 items-center gap-2 rounded-lg px-2 py-3 text-base font-medium text-foreground/85"
              >
                <PhoneIcon size={18} weight="fill" />
                {companyInfo.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex min-h-11 items-center justify-center rounded-full bg-accent-dark px-5 py-3 text-base font-semibold text-white"
              >
                Plan My Trip
              </Link>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
