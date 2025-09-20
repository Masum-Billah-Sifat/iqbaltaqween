// src/components/Navbar.tsx

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

/**
 * Navbar component for top navigation — sticky, minimalist, and scroll-aware.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-xl font-serif text-brand">
          <Link href="/">Zaraffi Ltd.</Link>
        </div>

        {/* Right: Nav links */}
        <div className="space-x-6 font-medium hidden md:flex">
          <Link href="#about" className="hover:text-brand">About</Link>
          <Link href="#certificates" className="hover:text-brand">Certificates</Link>
          <Link href="#contact" className="hover:text-brand">Contact</Link>
        </div>
      </nav>
    </header>
  )
}
