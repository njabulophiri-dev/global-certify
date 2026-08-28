import Link from 'next/link'
import { Globe, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  students: [
    { label: 'Why Russia', href: '/why-russia' },
    { label: 'Scholarships', href: '/scholarships' },
    { label: 'Student Support', href: '/student-support' },
    { label: 'FAQ', href: '/faq' },
  ],
  services: [
    { label: 'Application Support', href: '/services' },
    { label: 'Visa & Legal', href: '/services' },
    { label: 'Pre-Departure', href: '/services' },
    { label: 'In-Country Support', href: '/services' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'The Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold-500">
                <Globe className="w-5 h-5 text-navy-950" />
              </div>
              <span className="text-xl font-bold">Global Certify</span>
            </Link>
            <p className="text-navy-300 text-sm leading-relaxed max-w-sm mb-6">
              A boutique bilateral agency creating trusted, transparent pathways 
              for South African students to access world-class education in Russia.
            </p>
            <div className="flex flex-col gap-3 text-sm text-navy-300">
              <a href="mailto:info@globalcertify.com" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Mail className="w-4 h-4" />
                info@globalcertify.com
              </a>
              <a href="tel:+27123456789" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Phone className="w-4 h-4" />
                +27 12 345 6789
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Johannesburg, South Africa
              </span>
            </div>
          </div>

          {/* Students */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">
              Students
            </h3>
            <ul className="space-y-3">
              {footerLinks.students.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-navy-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-navy-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-navy-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-navy-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-navy-400">
              &copy; {new Date().getFullYear()} Global Certify. All rights reserved.
            </p>
            <p className="text-xs text-navy-400 italic">
              A boutique bilateral agency, not a call-centre recruiter.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
