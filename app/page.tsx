"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import CoffeePreloader from "@/components/coffee-preloader"
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
  const [showPreloader, setShowPreloader] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handlePreloadComplete = () => {
    setShowPreloader(false)
    setTimeout(() => {
      setShowContent(true)
    }, 300)
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      <AnimatePresence mode="wait">
        {showPreloader ? (
          <CoffeePreloader key="preloader" onPreloadComplete={handlePreloadComplete} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
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
