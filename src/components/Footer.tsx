import Link from "next/link";
import {
  EnvelopeSimpleIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react/dist/ssr";
import { categoryLabels, companyInfo, navLinks } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white/80">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-xl font-semibold text-white">{companyInfo.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/65">{companyInfo.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Company</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/65 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Explore</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {Object.entries(categoryLabels).map(([key, label]) => (
              <li key={key}>
                <Link
                  href={`/destinations?category=${key}`}
                  className="text-white/65 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Get in touch</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-white/65">
            <li className="flex items-start gap-2">
              <MapPinIcon size={18} className="mt-0.5 shrink-0 text-accent" />
              {companyInfo.address}
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon size={18} className="shrink-0 text-accent" />
              <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {companyInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeSimpleIcon size={18} className="shrink-0 text-accent" />
              <a href={`mailto:${companyInfo.email}`} className="hover:text-white">
                {companyInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 md:flex-row">
          <p>&copy; {year} {companyInfo.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <p>Ahmedabad, Gujarat &middot; IATA/TAAI Affiliated Travel Agency</p>
            <span aria-hidden className="hidden md:inline">·</span>
            <nav aria-label="Legal" className="flex items-center gap-3">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span aria-hidden>·</span>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                Terms
              </Link>
              <span aria-hidden>·</span>
              <Link href="/cancellation-policy" className="hover:text-white transition-colors">
                Cancellation Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
