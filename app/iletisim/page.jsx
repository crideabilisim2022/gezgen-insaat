'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ArrowLeft, Building2 } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Merkez Ofis',
    details: ['Levent Mah. Büyükdere Cad.', 'No: 123, Kat: 15', 'Beşiktaş, İstanbul'],
    action: {
      label: 'Haritada Göster',
      href: 'https://maps.google.com',
    },
  },
  {
    icon: Phone,
    title: 'Telefon',
    details: ['+90 212 123 45 67', '+90 532 123 45 67'],
    action: {
      label: 'Hemen Ara',
      href: 'tel:+902121234567',
    },
  },
  {
    icon: Mail,
    title: 'E-posta',
    details: ['info@gezgeninsaat.com', 'projeler@gezgeninsaat.com'],
    action: {
      label: 'E-posta Gönder',
      href: 'mailto:info@gezgeninsaat.com',
    },
  },
  {
    icon: Clock,
    title: 'Çalışma Saatleri',
    details: ['Pazartesi - Cuma: 09:00 - 18:00', 'Cumartesi: 09:00 - 14:00', 'Pazar: Kapalı'],
    action: null,
  },
]

const officeLocations = [
  {
    city: 'İstanbul',
    address: 'Levent Mah. Büyükdere Cad. No: 123',
    phone: '+90 212 123 45 67',
    isMain: true,
  },
  {
    city: 'Ankara',
    address: 'Çankaya, Kızılay Mah. Atatürk Blv. No: 50',
    phone: '+90 312 456 78 90',
    isMain: false,
  },
  {
    city: 'İzmir',
    address: 'Konak, Alsancak Mah. Kordon Cad. No: 25',
    phone: '+90 232 789 01 23',
    isMain: false,
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      projectType: '',
      budget: '',
      message: '',
    })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-8 pb-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Ana Sayfa
            </Link>
            <span>/</span>
            <span className="text-foreground">İletişim</span>
          </nav>

          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Ana Sayfaya Dön
          </Link>

          {/* Page Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              İletişim
            </span>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Bizimle İletişime Geçin
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Projeleriniz için ücretsiz keşif ve fiyat teklifi almak, sorularınızı sormak 
              veya işbirliği fırsatlarını değerlendirmek için bizimle iletişime geçin.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-sm text-muted-foreground">
                    {detail}
                  </p>
                ))}
                {info.action && (
                  <a
                    href={info.action.href}
                    className="inline-flex items-center gap-1 mt-4 text-sm text-primary font-medium hover:underline"
                  >
                    {info.action.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Teklif Formu
                </h2>
                <p className="text-muted-foreground mb-8">
                  Projeniz hakkında detaylı bilgi verin, size en uygun teklifi sunalım.
                </p>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="h-10 w-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      Mesajınız Alındı!
                    </h3>
                    <p className="text-muted-foreground max-w-md">
                      Talebiniz ekibimize iletildi. En kısa sürede sizinle iletişime geçeceğiz.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Ad Soyad *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          placeholder="Adınız Soyadınız"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          E-posta *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          placeholder="ornek@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Telefon *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          placeholder="+90 5XX XXX XX XX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Şirket / Kurum
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          placeholder="Şirket Adı (Opsiyonel)"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Proje Tipi *
                        </label>
                        <select
                          name="projectType"
                          value={formState.projectType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        >
                          <option value="">Proje Tipi Seçin</option>
                          <option value="konut">Konut Projesi</option>
                          <option value="ticari">Ticari Proje</option>
                          <option value="endustriyel">Endüstriyel Tesis</option>
                          <option value="renovasyon">Renovasyon</option>
                          <option value="altyapi">Altyapı Projesi</option>
                          <option value="diger">Diğer</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Tahmini Bütçe
                        </label>
                        <select
                          name="budget"
                          value={formState.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        >
                          <option value="">Bütçe Aralığı Seçin</option>
                          <option value="500k-1m">500.000 - 1.000.000 TL</option>
                          <option value="1m-5m">1.000.000 - 5.000.000 TL</option>
                          <option value="5m-10m">5.000.000 - 10.000.000 TL</option>
                          <option value="10m-50m">10.000.000 - 50.000.000 TL</option>
                          <option value="50m+">50.000.000 TL ve üzeri</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Konu *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="Mesajınızın konusu"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Mesajınız *
                      </label>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                        placeholder="Projeniz hakkında detaylı bilgi verin. Konum, alan, özel istekler vb."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Teklif Talebi Gönder
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Office Locations */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl border border-border p-8 mb-6">
                <h2 className="font-serif text-xl font-bold text-foreground mb-6">
                  Ofislerimiz
                </h2>
                <div className="space-y-6">
                  {officeLocations.map((office, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl ${
                        office.isMain ? 'bg-primary/10 border border-primary/20' : 'bg-muted'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Building2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-foreground">{office.city}</h4>
                            {office.isMain && (
                              <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full">
                                Merkez
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">{office.address}</p>
                          <a
                            href={`tel:${office.phone.replace(/\s/g, '')}`}
                            className="text-sm text-primary hover:underline"
                          >
                            {office.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
          <div className="aspect-video bg-secondary rounded-xl overflow-hidden relative">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54926.11363235045!2d28.60840166953128!3d41.032911278634685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55f7bd041105f%3A0x3e1279367181ea82!2zR2V6Z2VuIMSwbsWfYWF0IEJleWxpa2TDvHrDvA!5e1!3m2!1str!2str!4v1776175118351!5m2!1str!2str"
    className="absolute inset-0 w-full h-full border-0"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
