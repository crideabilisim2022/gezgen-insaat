import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata = {
  title: 'Gezgen İnşaat | Güvenilir İnşaat Çözümleri',
  description: 'Gezgen İnşaat - 25 yıllık tecrübemizle konut, ticari ve endüstriyel inşaat projelerinde kaliteli ve güvenilir çözümler sunuyoruz.',
  keywords: ['inşaat', 'yapı', 'konut', 'ticari', 'proje', 'Gezgen İnşaat', 'müteahhit'],
}

export const viewport = {
  themeColor: '#8B5A2B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
