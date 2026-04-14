'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail } from 'lucide-react'

const navItems = [
  { label: 'Ana Sayfa', href: '#hero' },
  { label: 'Hakkımızda', href: '#about' },
  { label: 'Misyon & Vizyon', href: '#mission' },
  { label: 'Projelerimiz', href: '#projects' },
  { label: 'İletişim', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-secondary text-secondary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+902121234567" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span>+90 212 123 45 67</span>
            </a>
            <a href="mailto:info@gezgeninsaat.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@gezgeninsaat.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="opacity-70">Pazartesi - Cumartesi: 09:00 - 18:00</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-card/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <svg
                  className="h-10 w-10 text-primary transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="8" y="20" width="20" height="36" fill="currentColor" opacity="0.8" />
                  <rect x="36" y="8" width="20" height="48" fill="currentColor" />
                  <rect x="12" y="26" width="4" height="6" fill="white" />
                  <rect x="20" y="26" width="4" height="6" fill="white" />
                  <rect x="12" y="36" width="4" height="6" fill="white" />
                  <rect x="20" y="36" width="4" height="6" fill="white" />
                  <rect x="40" y="14" width="4" height="6" fill="white" />
                  <rect x="48" y="14" width="4" height="6" fill="white" />
                  <rect x="40" y="26" width="4" height="6" fill="white" />
                  <rect x="48" y="26" width="4" height="6" fill="white" />
                  <rect x="40" y="38" width="4" height="6" fill="white" />
                  <rect x="48" y="38" width="4" height="6" fill="white" />
                </svg>
              </div>
              <div>
                <h1 className="font-serif text-xl font-bold text-foreground tracking-tight">GEZGEN</h1>
                <p className="text-xs tracking-[0.2em] text-muted-foreground">İNŞAAT</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20"
              >
                <Phone className="h-4 w-4" />
                Teklif Alın
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Menüyü aç"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="bg-card border-t border-border px-4 py-4">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block py-3 text-base font-medium transition-all duration-300 border-b border-border/50 last:border-0 ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-primary'
                    : 'text-foreground/80 hover:text-primary'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Teklif Alın
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
