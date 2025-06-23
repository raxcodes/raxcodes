"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Hero from "@/components/hero"
import LatestReel from "@/components/latest-reel"
import PhotoCarousel from "@/components/photo-carousel"
import CaseStudy from "@/components/case-study"
import ServiceMenu from "@/components/service-menu"
import Testimonials from "@/components/testimonials"
import MapSection from "@/components/map-section"
import ContactForm from "@/components/contact-form"
import FloatingCTA from "@/components/floating-cta"

export default function CafeHopperPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-dark-bg">
      <AnimatePresence>
        {isLoaded && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <Hero />
            <LatestReel />
            <PhotoCarousel />
            <CaseStudy />
            <ServiceMenu />
            <Testimonials />
            <MapSection />
            <ContactForm />
            <FloatingCTA />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
