'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, Building2, Shield, Clock, Users } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Güvenilirlik',
    description: '25 yıllık tecrübemizle her projede kalite ve güvenilirlik garantisi sunuyoruz.',
  },
  {
    icon: Clock,
    title: 'Zamanında Teslim',
    description: 'Projelerimizi belirlenen sürede, gecikme olmadan tamamlıyoruz.',
  },
  {
    icon: Building2,
    title: 'Modern Mimari',
    description: 'En son mimari trendleri ve teknolojileri projelerimize entegre ediyoruz.',
  },
  {
    icon: Users,
    title: 'Uzman Ekip',
    description: 'Alanında uzman mühendis ve mimarlardan oluşan deneyimli ekibimiz.',
  },
]

const achievements = [
  'ISO 9001:2015 Kalite Yönetim Sistemi Sertifikası',
  'ISO 14001:2015 Çevre Yönetim Sistemi Sertifikası',
  'OHSAS 18001 İş Sağlığı ve Güvenliği Sertifikası',
  'Türkiye Müteahhitler Birliği Üyeliği',
]

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Hakkımızda
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Güvenin ve Kalitenin Adresi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            1999 yılından bu yana inşaat sektöründe faaliyet gösteren Gezgen İnşaat, 
            müşteri memnuniyetini ön planda tutarak yüzlerce başarılı projeye imza atmıştır.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image/Visual */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary">
              {/* Placeholder Visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="h-24 w-24 text-primary/30 mx-auto mb-4" />
                  <p className="text-secondary-foreground/50 text-sm">25 Yıllık Tecrübe</p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-20 h-20 border-2 border-primary/20 rounded-lg" />
              <div className="absolute bottom-4 right-4 w-32 h-32 border-2 border-primary/20 rounded-lg" />
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
              <p className="text-4xl font-bold">150+</p>
              <p className="text-sm opacity-80">Başarılı Proje</p>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Türkiye&apos;nin Güvenilir İnşaat Partneri
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Gezgen İnşaat olarak, her projeye özgün yaklaşım ve titiz işçilik anlayışıyla 
              yaklaşıyoruz. Konut projelerinden ticari yapılara, endüstriyel tesislerden 
              altyapı projelerine kadar geniş bir yelpazede hizmet veriyoruz.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Müşterilerimizin hayallerini gerçeğe dönüştürmek için en son teknoloji ve 
              malzemeleri kullanarak, sürdürülebilir ve çevre dostu projeler üretiyoruz.
            </p>

            {/* Achievements */}
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.1 + 0.3}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
