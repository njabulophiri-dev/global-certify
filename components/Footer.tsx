import Link from "next/link";
import { ArrowUpRight, Globe, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  students: [
    { label: "Why Russia", href: "/why-russia" },
    { label: "Scholarships", href: "/scholarships" },
    { label: "Student Support", href: "/student-support" },
    { label: "FAQs", href: "/faq" },
  ],
  services: [
    { label: "Application Support", href: "/services" },
    { label: "Visa & Legal", href: "/services" },
    { label: "Pre-Departure", href: "/services" },
    { label: "In-Country Support", href: "/services" },
  ],
  company: [
    { label: "Our Story", href: "/" },
    { label: "Meet the Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white">
      <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full bg-coral-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 left-1/4 h-96 w-96 rounded-full bg-lime-300/10 blur-3xl" />

      <div className="container-custom relative py-16 lg:py-20">
        <div className="mb-14 flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-lime-200">
              Your next chapter
            </span>
            <h2 className="mt-2 text-2xl font-bold text-white">
              Ready to explore your options?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-300">
              Start with a conversation. Bring your questions and we&apos;ll
              help you map out the next step.
            </p>
          </div>
          <Link href="/contact" className="btn-coral shrink-0">
            Talk to our team
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="group mb-6 inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-300 text-ink-950 transition-transform duration-300 group-hover:rotate-12">
                <Globe className="h-5 w-5" />
              </span>
              <span className="text-xl font-bold">Global Certify</span>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-300">
              South African professionals helping students find their path to
              studying in Russia—with first-hand experience and people in your
              corner.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:info@globalcertify.com" className="footer-link gap-2">
                <Mail className="h-4 w-4 text-coral-300" />
                info@globalcertify.com
              </a>
              <a href="tel:+27123456789" className="footer-link gap-2">
                <Phone className="h-4 w-4 text-coral-300" />
                +27 12 345 6789
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-slate-300">
                <MapPin className="h-4 w-4 text-coral-300" />
                Johannesburg, South Africa
              </span>
            </div>
          </div>

          <FooterLinkGroup title="For students" links={footerLinks.students} />
          <FooterLinkGroup title="Our services" links={footerLinks.services} />
          <FooterLinkGroup title="Our team" links={footerLinks.company} />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Global Certify. All rights
            reserved.
          </p>
          <p className="text-xs font-medium text-slate-400">
            South Africa <span className="px-1 text-coral-300">↔</span> Russia
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-lime-200">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="footer-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
