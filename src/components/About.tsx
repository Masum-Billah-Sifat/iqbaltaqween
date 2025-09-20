// src/components/About.tsx

import Image from 'next/image'

/**
 * About section with company info and visual side-by-side.
 */
export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/about-photo.jpg" // 📌 Replace this with a real image later
            alt="About Company"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-serif text-brand mb-4">About Our Company</h2>
          <p className="mb-4 text-neutral-700 leading-relaxed">
            Zaraffi Ltd. is a registered clothing company based in Iraq, working closely with trusted manufacturing partners in Bangladesh. Since our inception, we've focused on delivering high-quality apparel that meets international standards.
          </p>
          <p className="mb-4 text-neutral-700 leading-relaxed">
            We specialize in importing bulk garments from Bangladesh and distributing them across Iraq through reliable logistics and local partnerships. Our network ensures that every shipment is on time and meets the expectations of our business clients.
          </p>
          <p className="mb-6 text-neutral-700 leading-relaxed">
            Our team is committed to transparency, fair trade practices, and long-term cooperation with Bangladeshi exporters and Iraqi distributors alike.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            <span className="bg-brand-light text-brand px-3 py-1 rounded-full text-sm font-medium">
              Export Partner Since 2015
            </span>
            <span className="bg-brand-light text-brand px-3 py-1 rounded-full text-sm font-medium">
              Govt Registered in Iraq
            </span>
            <span className="bg-brand-light text-brand px-3 py-1 rounded-full text-sm font-medium">
              Partnered with Bangladesh
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
