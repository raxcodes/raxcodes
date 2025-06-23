"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingCTA() {
  const scrollToContact = () => {
    const contactSection = document.querySelector("section:last-of-type")
    contactSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
    >
      <motion.div
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <Button
          onClick={scrollToContact}
          className="bg-warm-gradient hover:shadow-warm-glow text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 shadow-minimal-lg hover:shadow-minimal transition-all duration-300 hover:scale-110 active:scale-95 border-0 animate-glow"
          size="icon"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="sr-only">Contact Me</span>
        </Button>
      </motion.div>

      {/* Tooltip - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3 }}
        className="absolute right-full top-1/2 -translate-y-1/2 mr-3 bg-dark-card/90 backdrop-blur-sm border border-warm-orange/20 text-warm-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap hidden sm:block"
      >
        Let's Chat
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-dark-card/90" />
      </motion.div>
    </motion.div>
  )
}
