import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ProductGallery from '@/components/ProductGallery'


export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <ProductGallery /> {/* <-- New section */}
        <Features />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
