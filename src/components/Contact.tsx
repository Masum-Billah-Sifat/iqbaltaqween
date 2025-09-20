// src/components/Contact.tsx

/**
 * Contact section with form and contact details.
 */
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-serif text-brand mb-10 text-center">
          Get in Touch
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Form */}
          <form className="w-full md:w-2/3 space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-neutral-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border border-neutral-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full border border-neutral-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>

            <button
              type="submit"
              className="bg-brand text-white px-6 py-3 rounded-md hover:bg-brand/90 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="md:w-1/3 space-y-4 text-sm text-neutral-700">
            <div>
              <h4 className="font-semibold text-brand mb-1">Phone</h4>
              <p>+964 770 123 4567</p>
              <p>+880 1711 234567</p>
            </div>

            <div>
              <h4 className="font-semibold text-brand mb-1">Email</h4>
              <p>info@zaraffi.com</p>
            </div>

            <div>
              <h4 className="font-semibold text-brand mb-1">Office Address</h4>
              <p>Zaraffi Ltd., Industrial Zone, Erbil, Iraq</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
