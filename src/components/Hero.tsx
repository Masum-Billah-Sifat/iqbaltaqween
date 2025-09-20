// src/components/Hero.tsx

import Image from 'next/image'
import Link from 'next/link'

/**
 * Hero section with headline, CEO image, and scroll CTA.
 */
export default function Hero() {
  return (
    <section
      className="relative h-[90vh] w-full flex items-center justify-center bg-brand-light"
      id="hero"
    >
      {/* Background image (optional blur or textile) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.jpg" // 📌 Replace this with your textile or product image later
          alt="Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      {/* Main Content */}
      <div className="text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif text-brand mb-6">
          Trusted Apparel Exporters from Bangladesh to Iraq
        </h1>

        <p className="text-neutral-700 mb-6">
          Empowering global connections through high-quality garments.
        </p>

        <Image
          src="/ceo.jpg" // 📌 Replace this later
          alt="CEO"
          width={120}
          height={120}
          className="rounded-full mx-auto mb-4 shadow-md object-cover"
        />
        <p className="text-lg font-semibold">Mr. Ali Hassan</p>
        <p className="text-sm text-neutral-600 mb-6">Founder & CEO</p>

        <Link
          href="#about"
          className="inline-block bg-brand text-white px-6 py-3 rounded-full font-medium hover:bg-brand/90 transition"
        >
          View Company Info
        </Link>
      </div>
    </section>
  )
}
