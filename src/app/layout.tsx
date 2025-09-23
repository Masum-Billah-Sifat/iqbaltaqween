
// src/app/layout.tsx
import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'EBDAA AL-TAKWEN CO.',
  description: 'Trusted Apparel Importer from Bangladesh to Iraq having the name ebdaa al takwen co',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white text-neutral-900">{children}</body>
    </html>
  )
}

