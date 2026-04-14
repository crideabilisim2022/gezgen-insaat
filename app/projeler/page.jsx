'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Building2, MapPin, Calendar, ArrowRight, Search, Filter, ArrowLeft, Eye } from 'lucide-react'
import { projectsData } from '@/components/projects'
import Header from '@/components/header'
import Footer from '@/components/footer'

const categories = [
  { id: 'all', label: 'Tümü' },
  { id: 'completed', label: 'Tamamlanan' },
  { id: 'ongoing', label: 'Devam Eden' },
]

const projectTypes = [
  { id: 'all', label: 'Tüm Tipler' },
  { id: 'Konut', label: 'Konut' },
  { id: 'Ticari', label: 'Ticari' },
  { id: 'Endüstriyel', label: 'Endüstriyel' },
  { id: 'Kamu', label: 'Kamu' },
]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState(projectsData)
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  useEffect(() => {
    let result = projectsData

    // Apply search filter
    if (searchTerm) {
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Apply status filter
    if (statusFilter !== 'all') {
      result = result.filter((p) => p.status === statusFilter)
    }

    // Apply type filter
    if (typeFilter !== 'all') {
      result = result.filter((p) => p.category === typeFilter)
    }

    setFilteredProjects(result)
  }, [searchTerm, statusFilter, typeFilter])

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
            <span className="text-foreground">Projeler</span>
          </nav>

          {/* Page Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Ana Sayfaya Dön
            </Link>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tüm Projelerimiz
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              25 yıllık tecrübemizle tamamladığımız ve devam eden tüm projelerimizi keşfedin. 
              Filtreleri kullanarak aradığınız projeyi kolayca bulabilirsiniz.
            </p>
          </div>

          {/* Filters Section */}
          <div className="bg-card rounded-2xl border border-border p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Proje ara..."
                    className="w-full pl-12 pr-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Filter Toggle (Mobile) */}
              <button
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                className="lg:hidden inline-flex items-center justify-center gap-2 px-4 py-3 bg-muted border border-border rounded-lg"
              >
                <Filter className="h-5 w-5" />
                Filtreler
              </button>

              {/* Desktop Filters */}
              <div className="hidden lg:flex items-center gap-4">
                {/* Status Filter */}
                <div className="flex gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setStatusFilter(category.id)}
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                        statusFilter === category.id
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground hover:bg-primary/10'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>

                {/* Type Filter */}
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                >
                  {projectTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mobile Filters */}
            <div
              className={`lg:hidden mt-6 pt-6 border-t border-border overflow-hidden transition-all duration-300 ${
                isFiltersOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Durum
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setStatusFilter(category.id)}
                        className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                          statusFilter === category.id
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground hover:bg-primary/10'
                        }`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Proje Tipi
                  </label>
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  >
                    {projectTypes.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">{filteredProjects.length}</span> proje bulundu
            </p>
            {(searchTerm || statusFilter !== 'all' || typeFilter !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('')
                  setStatusFilter('all')
                  setTypeFilter('all')
                }}
                className="text-sm text-primary hover:underline"
              >
                Filtreleri Temizle
              </button>
            )}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Building2 className="h-16 w-16 text-primary/20" />
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link
                        href={`/projeler/${project.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                      >
                        <Eye className="h-4 w-4" />
                        Detayları Gör
                      </Link>
                    </div>
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      {getStatusBadge(project.status)}
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-card/90 backdrop-blur-sm text-foreground rounded-full text-xs font-medium">
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
          ) : (
            <div className="text-center py-20">
              <Building2 className="h-24 w-24 text-muted-foreground/20 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Proje Bulunamadı
              </h3>
              <p className="text-muted-foreground mb-6">
                Arama kriterlerinize uygun proje bulunamadı. Filtreleri değiştirmeyi deneyin.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setStatusFilter('all')
                  setTypeFilter('all')
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Filtreleri Temizle
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
