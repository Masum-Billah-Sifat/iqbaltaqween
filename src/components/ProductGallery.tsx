// ✅ Updated ProductGallery — Popup Centered & Mid-Size
"use client"

import { useState } from 'react'
import Image from 'next/image'

/**
 * ProductGallery component displays sample product images with popup on click.
 */

const products = [
  { src: '/products/product-one.jpeg', alt: 'Casual Shirt' },
  { src: '/products/product-two.jpeg', alt: 'Formal Shirt' },
  { src: '/products/product-three.jpeg', alt: 'Men Pants' },
  { src: '/products/product-four.jpeg', alt: 'Ladies Dress' },
  { src: '/products/product-five.jpeg', alt: 'Men Pants' },
  { src: '/products/product-six.jpeg', alt: 'Ladies Dress' },
  { src: '/products/product-seven.jpeg', alt: 'Casual Shirt' },
  { src: '/products/product-eight.jpeg', alt: 'Formal Shirt' },
  { src: '/products/product-nine.jpeg', alt: 'Men Pants' },
  { src: '/products/product-ten.jpeg', alt: 'Ladies Dress' },
  { src: '/products/product-eleven.jpeg', alt: 'Men Pants' },
  { src: '/products/product-twelve.jpeg', alt: 'Ladies Dress' },
  // Add more as needed
]

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [altText, setAltText] = useState<string>('')

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage(src)
    setAltText(alt)
  }

  const handleClose = () => {
    setSelectedImage(null)
    setAltText('')
  }

  return (
    <section id='product-gallery' className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => handleImageClick(product.src, product.alt)}
            >
              <Image
                src={product.src}
                alt={product.alt}
                width={500}
                height={500}
                className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg p-4 w-full max-w-md md:max-w-lg cursor-default"
            onClick={(e) => e.stopPropagation()} // prevent modal from closing on inner click
          >
            <Image
              src={selectedImage}
              alt={altText}
              width={600}
              height={600}
              className="w-full h-auto rounded"
            />
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  )
}