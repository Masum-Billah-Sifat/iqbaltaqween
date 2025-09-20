// src/components/Footer.tsx

import Link from 'next/link'

/**
 * Footer section — dark background, legal links, and basic site info.
 */
export default function Footer() {
  return (
    <footer className="bg-brand text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        {/* Left */}
        <div className="font-serif text-lg">Zaraffi Ltd.</div>

        {/* Center */}
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} Zaraffi Ltd. All rights reserved.
        </div>

        {/* Right: Links */}
        <div className="space-x-4">
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <Link href="#" className="hover:underline">Terms of Use</Link>
          <a href="mailto:info@zaraffi.com" className="hover:underline">info@zaraffi.com</a>
        </div>
      </div>
    </footer>
  )
}
