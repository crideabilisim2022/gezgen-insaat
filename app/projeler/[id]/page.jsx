'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, MapPin, Calendar, Maximize, Building2, CheckCircle2, ArrowRight, X, Phone } from 'lucide-react'
import { projectsData } from '@/components/projects'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Modal from '@/components/modal'
import Image from 'next/image'

export default function ProjectDetail() {
  const params = useParams()
  const [project, setProject] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [relatedProjects, setRelatedProjects] = useState([])

  useEffect(() => {
    const id = parseInt(params.id)
    const foundProject = projectsData.find((p) => p.id === id)
    
    if (foundProject) {
      setProject(foundProject)
      // Get related projects (same category, different id)
      const related = projectsData
        .filter((p) => p.category === foundProject.category && p.id !== id)
        .slice(0, 3)
      setRelatedProjects(related)
    }
    
    setIsLoading(false)
  }, [params.id])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background">
        <Building2 className="h-24 w-24 text-muted-foreground/30 mb-6" />
        <h1 className="text-2xl font-bold text-foreground mb-4">Proje Bulunamadı</h1>
        <p className="text-muted-foreground mb-8">Aradığınız proje mevcut değil.</p>
        <Link
          href="/projeler"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Projelere Dön
        </Link>
      </div>
    )
  }

  const getStatusBadge = (status) => {
    if (status === 'completed') {
      return (
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-700 rounded-full font-medium">
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          Tamamlandı
        </span>
      )
    }
    return (
      <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full font-medium">
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        Devam Ediyor
      </span>
    )
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
            <Link href="/projeler" className="hover:text-primary transition-colors">
              Projeler
            </Link>
            <span>/</span>
            <span className="text-foreground">{project.title}</span>
          </nav>

          {/* Back Button */}
          <Link
            href="/projeler"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Projelere Dön
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Hero Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
  
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
    <span className="px-4 py-2 bg-white/90 text-black rounded-full font-medium">
      {project.category}
    </span>
  </div>

</div>

              {/* Project Title & Info */}
              <div className="mb-8">
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-6 text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    {project.year}
                  </span>
                  <span className="flex items-center gap-2">
                    <Maximize className="h-5 w-5 text-primary" />
                    {project.area}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="font-serif text-xl font-bold text-foreground mb-4">
                  Proje Hakkında
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="font-serif text-xl font-bold text-foreground mb-4">
                  Özellikler
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-muted rounded-lg"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery Placeholder */}
              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-4">
                  Proje Galerisi
                </h2>
              <div>
  <h2 className="font-serif text-xl font-bold text-foreground mb-4">
    Proje Galerisi
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {project.gallery?.map((img, index) => (
      <div
        key={index}
        className="aspect-square rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={img}
          alt={`${project.title} ${index + 1}`}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
</div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Project Stats Card */}
              <div className="bg-card rounded-2xl border border-border p-6 mb-6 sticky top-24">
                <h3 className="font-serif text-lg font-bold text-foreground mb-6">
                  Proje Detayları
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Konum</span>
                    <span className="font-medium text-foreground">{project.location}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Yıl</span>
                    <span className="font-medium text-foreground">{project.year}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Alan</span>
                    <span className="font-medium text-foreground">{project.area}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Birim</span>
                    <span className="font-medium text-foreground">{project.units}</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-muted-foreground">Durum</span>
                    <span className={`font-medium ${project.status === 'completed' ? 'text-green-600' : 'text-primary'}`}>
                      {project.status === 'completed' ? 'Tamamlandı' : 'Devam Ediyor'}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full mt-6 inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  Bilgi Alın
                </button>
              </div>

              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <div className="bg-card rounded-2xl border border-border p-6">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-6">
                    Benzer Projeler
                  </h3>
                  <div className="space-y-4">
                    {relatedProjects.map((related) => (
                      <Link
                        key={related.id}
                        href={`/projeler/${related.id}`}
                        className="flex gap-4 p-3 bg-muted rounded-lg hover:bg-primary/10 transition-colors group"
                      >
                        <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                          <Building2 className="h-6 w-6 text-primary/30" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                            {related.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{related.location}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors self-center" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Info Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${project.title} - Bilgi Talebi`}
      >
        <div className="space-y-6">
          <p className="text-muted-foreground">
            Bu proje hakkında detaylı bilgi almak için aşağıdaki formu doldurun veya 
            doğrudan bizimle iletişime geçin.
          </p>
          
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Ad Soyad
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="Adınız Soyadınız"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Telefon
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="+90 5XX XXX XX XX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Mesajınız
              </label>
              <textarea
                rows={3}
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                placeholder="Projeyle ilgili sorularınız..."
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setIsModalOpen(false)}
              className="flex-1 px-6 py-3 bg-muted text-foreground font-medium rounded-lg hover:bg-muted/80 transition-colors"
            >
              İptal
            </button>
            <button
              onClick={() => {
                alert('Mesajınız alındı! En kısa sürede sizinle iletişime geçeceğiz.')
                setIsModalOpen(false)
              }}
              className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Gönder
            </button>
          </div>
        </div>
      </Modal>

      <Footer />
    </div>
  )
}
