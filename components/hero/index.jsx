'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Building2, Users, Award, Calendar } from 'lucide-react'

const stats = [
  { icon: Building2, value: '150+', label: 'Tamamlanan Proje' },
  { icon: Users, value: '50+', label: 'Uzman Ekip' },
  { icon: Award, value: '25', label: 'Yıllık Tecrübe' },
  { icon: Calendar, value: '12', label: 'Aktif Proje' },
]

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleScroll = (e, href) => {
    e.preventDefault()
    const element = document.getElementById(href.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-secondary">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80" />

        {/* Building Silhouette */}
        <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10">
          <svg
            viewBox="0 0 400 600"
            className="h-full w-full text-primary-foreground"
            preserveAspectRatio="xMaxYMax slice"
          >
            <rect x="50" y="200" width="80" height="400" fill="currentColor" />
            <rect x="150" y="100" width="100" height="500" fill="currentColor" />
            <rect x="270" y="150" width="90" height="450" fill="currentColor" />
            {/* Windows */}
            {[...Array(15)].map((_, i) => (
              <rect
                key={i}
                x={170 + (i % 3) * 25}
                y={130 + Math.floor(i / 3) * 40}
                width="15"
                height="25"
                fill="white"
                opacity="0.3"
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary-foreground rounded-full mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium">25 Yıldır Güvenilir Çözümler</span>
          </div>

          {/* Main Heading */}
          <h1
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-balance">Hayallerinizi</span>
            <br />
            <span className="text-primary">Gerçeğe</span> Dönüştürüyoruz
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Modern mimari ve yenilikçi mühendislik çözümleriyle konut, ticari ve endüstriyel projelerinizi hayata geçiriyoruz.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, '#projects')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30"
            >
              Projelerimizi İnceleyin
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground/10 text-primary-foreground font-semibold rounded-lg border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
            >
              İletişime Geçin
            </a>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-primary-foreground/5 backdrop-blur-sm rounded-xl border border-primary-foreground/10"
              >
                <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-bold text-primary-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
