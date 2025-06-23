"use client"

import { motion } from "framer-motion"
import { Instagram, FileText, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const scrollToCaseStudy = () => {
    const caseStudySection = document.querySelector('[data-section="case-study"]')
    caseStudySection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-hero-gradient">
      <div className="max-w-4xl mx-auto text-center w-full">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto rounded-full overflow-hidden ring-2 sm:ring-4 ring-warm-orange/30 warm-glow">
            <Image
              src="/images/cafehopper-profile.png"
              alt="CafeHopper - Coffee enthusiast and Instagram growth specialist"
              width={128}
              height={128}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>

        {/* Name & Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-warm-white mb-4 sm:mb-6 font-manrope tracking-tight"
        >
          CafeHopper
        </motion.h1>

        {/* Tagline */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8 sm:mb-12 px-4"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-warm-gray leading-relaxed max-w-3xl mx-auto">
            I Love Cafés. I work from cafés.{" "}
            <span className="text-transparent bg-clip-text bg-warm-gradient font-medium">
              I grow cafés on Instagram.
            </span>
          </p>
        </motion.div>

        {/* Link Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
        >
          <Button
            className="w-full sm:w-auto bg-warm-gradient hover:shadow-warm-glow text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 border-0 min-h-[48px]"
            size="lg"
            onClick={() => window.open("https://www.instagram.com/heycafehopper/", "_blank")}
          >
            <Instagram className="w-5 h-5 mr-2" />
            @heycafehopper
          </Button>

          <Button
            variant="outline"
            className="w-full sm:w-auto border-warm-orange/30 bg-dark-card/50 backdrop-blur-sm hover:bg-warm-orange hover:border-warm-orange text-warm-white hover:text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 min-h-[48px]"
            size="lg"
            onClick={scrollToCaseStudy}
          >
            <FileText className="w-5 h-5 mr-2" />
            Case Study
          </Button>

          <Button
            variant="outline"
            className="w-full sm:w-auto border-cool-blue/30 bg-dark-card/50 backdrop-blur-sm hover:bg-cool-blue hover:border-cool-blue text-warm-white hover:text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 min-h-[48px]"
            size="lg"
            onClick={() => window.open("https://calendly.com/heycafehopper", "_blank")}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book a Call
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
