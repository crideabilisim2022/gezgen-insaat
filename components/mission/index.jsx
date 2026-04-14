'use client'

import { useEffect, useRef, useState } from 'react'
import { Target, Eye, Compass, Lightbulb } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Kalite Odaklılık',
    description: 'Her projede en yüksek kalite standartlarını hedefliyoruz.',
  },
  {
    icon: Compass,
    title: 'Dürüstlük',
    description: 'İş ilişkilerimizde şeffaflık ve dürüstlük temel prensiplerimizdir.',
  },
  {
    icon: Lightbulb,
    title: 'Yenilikçilik',
    description: 'Sektördeki yenilikleri takip ederek projelerimize uyguluyoruz.',
  },
]

export default function Mission() {
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
    <section id="mission" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Misyon & Vizyon
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Değerlerimiz ve Hedeflerimiz
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Gezgen İnşaat olarak, geleceğe yön veren değerler ve hedeflerle çalışıyoruz.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div
            className={`relative p-8 md:p-10 bg-secondary rounded-2xl overflow-hidden transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-secondary-foreground mb-4">
                Misyonumuz
              </h3>
              <p className="text-secondary-foreground/80 leading-relaxed mb-4">
                Müşterilerimizin beklentilerini aşan, yenilikçi ve sürdürülebilir inşaat 
                çözümleri sunarak sektörde güvenilir bir iş ortağı olmak. Kaliteden ödün 
                vermeden, zamanında ve bütçeye uygun projeler teslim etmek.
              </p>
              <ul className="space-y-2">
                {['Müşteri memnuniyeti', 'Kaliteli işçilik', 'Sürdürülebilir projeler'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-secondary-foreground/70">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Vision Card */}
          <div
            className={`relative p-8 md:p-10 bg-primary rounded-2xl overflow-hidden transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative">
              <div className="w-14 h-14 bg-primary-foreground rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-4">
                Vizyonumuz
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed mb-4">
                Türkiye&apos;nin ve bölgenin en saygın inşaat şirketlerinden biri olarak 
                tanınmak. Yenilikçi yaklaşımımız ve kaliteli projelerimizle sektöre 
                yön veren, örnek alınan bir kuruluş olmak.
              </p>
              <ul className="space-y-2">
                {['Sektör liderliği', 'Global standartlar', 'Teknolojik öncülük'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-primary-foreground/80">
                    <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`text-center p-8 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.1 + 0.4}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <value.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h4 className="font-semibold text-lg text-foreground mb-3">{value.title}</h4>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
