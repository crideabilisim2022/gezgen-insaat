'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Building2, MapPin, Calendar, ArrowRight, Eye } from 'lucide-react'
import Image from 'next/image'

export const projectsData = [
  {
    id: 1,
    title: 'Yeşil Vadi Konutları',
    category: 'Konut',
    status: 'completed',
    location: 'İstanbul, Başakşehir',
    year: '2023',
    area: '45.000 m²',
    units: '320 Daire',
    description: 'Modern mimari ile doğanın buluştuğu, 320 daireden oluşan prestijli konut projesi. Yeşil alanlar, sosyal tesisler ve akıllı ev sistemleriyle donatılmış.',
    features: ['Akıllı Ev Sistemleri', 'Yeşil Alan', 'Sosyal Tesisler', 'Kapalı Otopark', 'Güvenlik'],
     image: "/img/projects/1.jpg",
     gallery: [
  "/img/projects/1.jpg",
  "/img/projects/2.jpg",
  "/img/projects/3.webp",
],
  },
  {
    id: 2,
    title: 'Mavi Kule Plaza',
    category: 'Ticari',
    status: 'completed',
    location: 'İstanbul, Maslak',
    year: '2022',
    area: '35.000 m²',
    units: '25 Kat',
    description: 'Maslak iş merkezinde konumlanan, A+ sınıf ofis alanları sunan modern plaza projesi. LEED sertifikalı sürdürülebilir yapı.',
    features: ['LEED Sertifikalı', 'A+ Ofis Alanları', 'Konferans Salonu', 'Heliport', 'VIP Asansör'],
    image: "/img/projects/2.jpg",
    gallery: [
  "/img/projects/1.jpg",
  "/img/projects/2.jpg",
  "/img/projects/3.webp",
],

  },
  {
    id: 3,
    title: 'Altın Park AVM',
    category: 'Ticari',
    status: 'completed',
    location: 'Ankara, Çankaya',
    year: '2021',
    area: '80.000 m²',
    units: '200 Mağaza',
    description: '200 mağaza kapasiteli, sinema kompleksi ve eğlence alanları bulunan bölgenin en büyük alışveriş merkezi.',
    features: ['Sinema Kompleksi', 'Food Court', 'Çocuk Oyun Alanı', 'Kapalı Otopark', 'Etkinlik Alanı'],
    image: "/img/projects/3.webp",
    gallery: [
  "/img/projects/1.jpg",
  "/img/projects/2.jpg",
  "/img/projects/3.webp",
],

  },
  {
    id: 4,
    title: 'Sahil Residence',
    category: 'Konut',
    status: 'ongoing',
    location: 'İzmir, Karşıyaka',
    year: '2024',
    area: '28.000 m²',
    units: '180 Daire',
    description: 'Deniz manzaralı, lüks konut projesi. Özel plaj erişimi ve marina imkanı sunan prestijli yaşam alanı.',
    features: ['Deniz Manzarası', 'Özel Plaj', 'Marina', 'Spa & Fitness', 'Concierge'],
     image: "/img/projects/4.jpg",
     gallery: [
  "/img/projects/1.jpg",
  "/img/projects/2.jpg",
  "/img/projects/3.webp",
],
    
  },
  {
    id: 5,
    title: 'Tech Park Fabrika',
    category: 'Endüstriyel',
    status: 'ongoing',
    location: 'Bursa, Nilüfer',
    year: '2024',
    area: '120.000 m²',
    units: '4 Üretim Hattı',
    description: 'Otomotiv yan sanayi için tasarlanmış, son teknoloji üretim tesisi. Enerji verimliliği ve çevre dostu tasarım.',
    features: ['Güneş Enerjisi', 'Atık Yönetimi', 'Ar-Ge Merkezi', 'Lojistik Alan', 'Personel Tesisleri'],
    image: "/img/projects/5.jpg",
    gallery: [
  "/img/projects/1.jpg",
  "/img/projects/2.jpg",
  "/img/projects/3.webp",
],

  },
  {
    id: 6,
    title: 'Merkez Hastanesi',
    category: 'Kamu',
    status: 'completed',
    location: 'Antalya, Merkez',
    year: '2020',
    area: '65.000 m²',
    units: '500 Yatak',
    description: '500 yatak kapasiteli, tam donanımlı devlet hastanesi. Depreme dayanıklı yapı ve modern tıbbi altyapı.',
    features: ['Heliport', 'Acil Servis', 'Yoğun Bakım', 'Ameliyathane', 'Görüntüleme Merkezi'],
    image: "/img/projects/6.jpg",
    gallery: [
  "/img/projects/1.jpg",
  "/img/projects/2.jpg",
  "/img/projects/3.webp",
],

  },
]

const categories = [
  { id: 'all', label: 'Tümü' },
  { id: 'completed', label: 'Tamamlanan' },
  { id: 'ongoing', label: 'Devam Eden' },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState(projectsData)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projectsData)
    } else {
      setFilteredProjects(projectsData.filter((p) => p.status === activeFilter))
    }
  }, [activeFilter])

  const getStatusBadge = (status) => {
    if (status === 'completed') {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-700 rounded-full text-xs font-medium">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
          Tamamlandı
        </span>
      )
    }
    return (
      <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        Devam Ediyor
      </span>
    )
  }

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Projelerimiz
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Başarılı Projelerimiz
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            25 yıllık tecrübemizle tamamladığımız ve devam eden prestijli projelerimizi keşfedin.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                  : 'bg-card text-foreground hover:bg-primary/10 border border-border'
              }`}
            >
              {category.label}
              {category.id !== 'all' && (
                <span className="ml-2 text-xs opacity-70">
                  ({projectsData.filter((p) => category.id === 'all' || p.status === category.id).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
  
  <Image
    src={project.image}
    alt={project.title}
    fill
    unoptimized
    className="object-cover"
  />

  {/* Status Badge */}
  <div className="absolute top-4 left-4">
    {getStatusBadge(project.status)}
  </div>

  {/* Category Badge */}
  <div className="absolute top-4 right-4">
    <span className="px-3 py-1 bg-white/90 text-black rounded-full text-xs font-medium">
      {project.category}
    </span>
  </div>

</div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {project.year}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Alan: </span>
                    <span className="font-medium text-foreground">{project.area}</span>
                  </div>
                  <Link
                    href={`/projeler/${project.id}`}
                    className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all"
                  >
                    Detaylar
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/projeler"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20"
          >
            Tüm Projeleri Görüntüle
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
