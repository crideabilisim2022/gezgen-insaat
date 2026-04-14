'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsExiting(true)
          setTimeout(() => {
            onLoadingComplete?.()
          }, 500)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 100)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-secondary transition-all duration-500 ${
        isExiting ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* Logo Animation */}
      <div className="relative mb-8">
        <div className="flex items-center gap-3">
          <div className="relative">
            <svg
              className="h-16 w-16 text-primary animate-pulse-slow"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Building Icon */}
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
              {/* Crane */}
              <path
                d="M56 8 L56 4 L32 4 L32 8"
                stroke="currentColor"
                strokeWidth="2"
                className="animate-pulse"
              />
              <line x1="44" y1="4" x2="44" y2="0" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="text-primary-foreground">
            <h1 className="font-serif text-3xl font-bold tracking-tight">GEZGEN</h1>
            <p className="text-sm tracking-[0.3em] opacity-80">İNŞAAT</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-primary/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-200 ease-out rounded-full"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Loading Text */}
      <p className="mt-4 text-primary-foreground/70 text-sm tracking-wider">
        {progress < 100 ? 'Yükleniyor...' : 'Hoş Geldiniz'}
      </p>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden opacity-20">
        <div className="absolute bottom-0 left-0 w-full flex justify-around">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-primary"
              style={{
                width: `${Math.random() * 40 + 20}px`,
                height: `${Math.random() * 80 + 40}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
