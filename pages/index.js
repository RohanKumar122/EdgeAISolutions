import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import Technology from '../components/Technology'
import Demo from '../components/Demo'
import UseCases from '../components/UseCases'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Edge AI Local — Private AI. Secure Systems. Edge Intelligence.</title>
        <meta name="description" content="AI-powered edge computing and security products built on Raspberry Pi. 100% offline AI for homes, businesses, and institutions. Face recognition, smart cameras, local LLM — no cloud required." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Edge AI Local" />
        <meta property="og:description" content="Private AI. Secure Systems. Edge Intelligence. AI security that never leaves your premises." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Edge AI Local" />
        <meta name="twitter:description" content="100% offline AI security systems built on Raspberry Pi." />
      </Head>

      <div className="min-h-screen bg-slate-50 dark:bg-[#050d18] text-slate-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Products />
          <HowItWorks />
          <Features />
          <Technology />
          <Demo />
          <UseCases />
          <Pricing />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
