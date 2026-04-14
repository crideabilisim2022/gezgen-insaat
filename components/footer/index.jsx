'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react'

const quickLinks = [
  { label: 'Ana Sayfa', href: '#hero' },
  { label: 'Hakkımızda', href: '#about' },
  { label: 'Misyon & Vizyon', href: '#mission' },
  { label: 'Projelerimiz', href: '#projects' },
  { label: 'İletişim', href: '#contact' },
]

const services = [
  { label: 'Konut Projeleri', href: '/projeler?category=konut' },
  { label: 'Ticari Projeler', href: '/projeler?category=ticari' },
  { label: 'Endüstriyel Tesisler', href: '/projeler?category=endustriyel' },
  { label: 'Renovasyon', href: '/projeler?category=renovasyon' },
  { label: 'Proje Yönetimi', href: '/projeler' },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.getElementById(href.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <svg
                className="h-10 w-10 text-primary"
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
              <div>
                <h3 className="font-serif text-xl font-bold">GEZGEN</h3>
                <p className="text-xs tracking-[0.2em] opacity-70">İNŞAAT</p>
              </div>
            </Link>
            <p className="text-secondary-foreground/70 mb-6 text-sm leading-relaxed">
              25 yıllık tecrübemizle konut, ticari ve endüstriyel projelerde 
              güvenilir çözümler sunuyoruz. Kalite ve müşteri memnuniyeti 
              önceliğimizdir.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Hızlı Linkler</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/70">
                 Güzelyurt, Yıldırım Beyazıt Cd. No:45, 34515 Esenyurt/İstanbul
                </span>
              </li>
              <li>
                <a
                  href="tel:+902121234567"
                  className="flex gap-3 text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  +90 212 123 45 67
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@gezgeninsaat.com"
                  className="flex gap-3 text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  info@gezgeninsaat.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary-foreground/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Gezgen İnşaat. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/gizlilik" className="text-secondary-foreground/50 hover:text-primary transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-kosullari" className="text-secondary-foreground/50 hover:text-primary transition-colors">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
        aria-label="Yukarı çık"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  )
}
