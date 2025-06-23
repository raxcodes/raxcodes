"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import CoffeeLoading from "@/components/coffee-loading"
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
  const [isLoading, setIsLoading] = useState(true)
  const [isContentLoaded, setIsContentLoaded] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setTimeout(() => {
      setIsContentLoaded(true)
    }, 300)
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <CoffeeLoading key="loading" onLoadingComplete={handleLoadingComplete} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: isContentLoaded ? 1 : 0 }}
            transition={{ duration: 0.6 }}
          >
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
