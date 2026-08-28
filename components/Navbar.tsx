'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Globe } from 'lucide-react'

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/why-russia', label: 'Why Russia' },
  { href: '/services', label: 'Services' },
  { href: '/scholarships', label: 'Scholarships' },
  { href: '/team', label: 'Team' },
  { href: '/student-support', label: 'Student Support' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-navy-100">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold-500 group-hover:bg-gold-400 transition-colors">
              <Globe className="w-5 h-5 text-navy-950" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-navy-950 leading-tight">Global Certify</span>
              <span className="text-[10px] uppercase tracking-widest text-navy-500 font-medium">Boutique Agency</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname === link.href
                    ? 'text-navy-900 bg-navy-50'
                    : 'text-navy-600 hover:text-navy-900 hover:bg-navy-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden xl:flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Start Your Journey
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-navy-700 hover:bg-navy-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden pb-6 border-t border-navy-100 mt-2">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    pathname === link.href
                      ? 'text-navy-900 bg-navy-50'
                      : 'text-navy-600 hover:text-navy-900 hover:bg-navy-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 px-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full"
                >
                  Start Your Journey
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
