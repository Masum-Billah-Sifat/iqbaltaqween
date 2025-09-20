// ✅ Updated Footer — Mobile Responsive

import Link from 'next/link'

/**
 * Footer section — dark background, legal links, and basic site info.
 */
export default function Footer() {
  return (
    <footer className="bg-brand text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-center md:text-left">
        {/* Left */}
        <div className="font-serif text-lg">EBDAA AL-TAKWEN CO. </div>

        {/* Center */}
        <div className="text-sm">
          © {new Date().getFullYear()} EBDAA AL-TAKWEN CO.  All rights reserved.
        </div>

        {/* Right: Links */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <Link href="#" className="hover:underline">Terms of Use</Link>
          <a href="mailto:Mohammad2343@gmail.com" className="hover:underline">Mohammad2343@gmail.com</a>
        </div>
        {/* Bangladesh Agent Info */}
        <div className="text-center text-sm mt-8 sm:mt-10 leading-relaxed text-white/90">
          <p className="font-semibold">Contact Bangladesh Agent / Agency</p>
          <p>AMM FASHION</p>
          <p>House 27, Road 1, Sector 9</p>
          <p>Uttara, Dhaka, Bangladesh</p>
          <p>Email: <a href="mailto:ammfashion98@gmail.com" className="underline">ammfashion98@gmail.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/8801879403894" className="underline">+8801879403894</a></p>
        </div>
      </div>
    </footer>
  )
}