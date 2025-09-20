// src/components/Features.tsx

import { CheckCircle, Truck, ShieldCheck, Globe } from 'lucide-react'

/**
 * Features section showing company highlights in icon grid layout.
 */
export default function Features() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand" />,
      title: 'Govt Approved',
      description: 'Fully licensed export company registered in Iraq',
    },
    {
      icon: <Truck className="w-8 h-8 text-brand" />,
      title: 'Fast Delivery',
      description: 'Weekly shipments from Bangladesh to Iraq',
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-brand" />,
      title: 'Premium Materials',
      description: 'Cotton, Denim, Knitwear, and other high-grade fabrics',
    },
    {
      icon: <Globe className="w-8 h-8 text-brand" />,
      title: 'Global Standards',
      description: 'ISO Compliant and inspected before shipping',
    },
  ]

  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif text-brand mb-10">
          Why Work With Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
