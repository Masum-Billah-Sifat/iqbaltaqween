// ✅ Updated Hero — Mobile & Desktop Friendly

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
          src="/hero-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      {/* Main Content */}
      <div className="text-center px-4 sm:px-6 max-w-2xl md:max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand mb-4 sm:mb-6">
          Trusted Apparel Importer from Bangladesh to Iraq
        </h1>

        <p className="text-sm sm:text-base text-neutral-700 mb-4 sm:mb-6">
          Empowering global connections through high-quality garments.
        </p>

        <Image
          src="/ceo.jpeg"
          alt="CEO"
          width={100}
          height={100}
          className="rounded-full mx-auto mb-3 sm:mb-4 shadow-md object-cover"
        />
        <p className="text-base sm:text-lg font-semibold">Mohammad Sagban Ali</p>
        <p className="text-sm text-neutral-600 mb-4 sm:mb-6">Founder & CEO</p>

        <Link
          href="#about"
          className="inline-block bg-brand text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full font-medium hover:bg-brand/90 transition"
        >
          View Company Info
        </Link>
      </div>
    </section>
  )
}