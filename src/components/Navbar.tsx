'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'

/**
 * Navbar component for top navigation — sticky, responsive, with mobile side drawer menu.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="text-base sm:text-xl text-brand font-bold max-w-[60%] truncate">
            <Link href="/">EBDAA AL-TAKWEN CO. | شركة إبداع التكوين</Link>
          </div>

          {/* Right: Nav links for desktop */}
          <div className="space-x-4 sm:space-x-6 font-medium hidden md:flex">
            <Link href="#about" className="hover:text-brand">About</Link>
            <Link href="#product-gallery" className="hover:text-brand">Products</Link>
            <Link href="#contact" className="hover:text-brand">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-brand"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </nav>
      </header>

      {/* Mobile Side Drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="bg-white w-64 h-full p-6 space-y-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-brand mb-4">Menu</h2>
            <Link
              href="#about"
              className="block text-neutral-800 hover:text-brand"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#product-gallery"
              className="block text-neutral-800 hover:text-brand"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="#contact"
              className="block text-neutral-800 hover:text-brand"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
