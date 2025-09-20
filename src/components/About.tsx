// ✅ Updated About Section — Responsive Layout

/**
 * About section — no image, with typographic background texture and rich styling.
 */
export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20 bg-white overflow-hidden">
      {/* Background Typography Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none text-[4rem] sm:text-[6rem] font-serif whitespace-nowrap tracking-widest leading-none text-gray-300 rotate-[-15deg]">
        Zaraffi • Quality • Trust • Since 2015 • Zaraffi • Quality • Trust
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center md:text-left">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          About EBDAA AL-TAKWEN CO.
        </h2>

        {/* Paragraphs */}
        <div className="text-base sm:text-lg text-gray-700 space-y-4 sm:space-y-5 leading-relaxed">
          <p>
            EBDAA AL-TAKWEN CO. is a registered clothing company based in Iraq, working closely with trusted manufacturing partners in Bangladesh. Since our inception, we've focused on delivering high-quality apparel that meets international standards.
          </p>
          <p>
            We specialize in importing bulk garments from Bangladesh and distributing them across Iraq through reliable logistics and local partnerships. Our network ensures that every shipment is on time and meets the expectations of our business clients.
          </p>
          <p>
            Our team is committed to transparency, fair trade practices, and long-term cooperation with Bangladeshi exporters and Iraqi distributors alike.
          </p>
        </div>

        {/* Highlight Tags */}
        <div className="flex flex-wrap gap-3 mt-6 sm:mt-8 justify-center md:justify-start">
          <span className="bg-[#e0f2fe] text-blue-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium">
            Export Partner Since 2015
          </span>
          <span className="bg-[#e0f2fe] text-blue-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium">
            Govt Registered in Iraq
          </span>
          <span className="bg-[#e0f2fe] text-blue-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium">
            Partnered with Bangladesh
          </span>
        </div>
      </div>
    </section>
  )
}