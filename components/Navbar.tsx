"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/why-russia", label: "Why Russia" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/scholarships", label: "Scholarships" },
  { href: "/team", label: "Team" },
  { href: "/student-support", label: "Student Support" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-ink-950/95 text-white shadow-lg shadow-ink-950/10 backdrop-blur-xl">
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/global-certify-logo-no-text.jpg"
              alt="Global Certify"
              width={48}
              height={48}
              className="h-11 w-11 rounded-full bg-white object-contain p-0.5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight text-white">
                Global Certify
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400">
                Your next chapter
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`nav-link ${
                  pathname === link.href
                    ? "nav-link-active"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden items-center gap-3 xl:flex">
            <Link href="/contact" className="btn-coral">
              Start Your Journey
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl p-2 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 xl:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="mt-2 border-t border-white/10 pb-6 xl:hidden"
          >
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`nav-link px-4 py-3 ${
                    pathname === link.href
                      ? "nav-link-active"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 px-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-coral w-full"
                >
                  Start Your Journey
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
