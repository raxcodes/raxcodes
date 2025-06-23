"use client"

import { motion } from "framer-motion"
import { Play, Instagram } from "lucide-react"
import Image from "next/image"

export default function LatestReel() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-warm-white mb-3 sm:mb-4 font-manrope">
            Latest Reel
          </h2>
          <p className="text-warm-gray flex items-center justify-center gap-2 text-sm sm:text-base">
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            @heycafehopper
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-xs sm:max-w-sm mx-auto"
        >
          <div className="bg-dark-card rounded-xl overflow-hidden shadow-minimal-lg border border-dark-border">
            <div className="relative aspect-[9/16] bg-gradient-to-br from-warm-orange/10 to-warm-orange/5">
              <Image
                src="/placeholder.svg?height=640&width=360"
                alt="Latest Instagram Reel"
                fill
                className="object-cover"
              />

              {/* Play Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-warm-orange rounded-full flex items-center justify-center shadow-minimal-lg active:scale-95 transition-transform"
                  onClick={() => window.open("https://www.instagram.com/heycafehopper/", "_blank")}
                >
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-0.5 sm:ml-1" fill="currentColor" />
                </motion.button>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <h3 className="font-semibold text-warm-white mb-2 text-sm sm:text-base">
                5 Instagram Tips Every Café Owner Needs
              </h3>
              <p className="text-xs sm:text-sm text-warm-gray leading-relaxed">
                Transform your café's Instagram presence with these proven strategies...
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
