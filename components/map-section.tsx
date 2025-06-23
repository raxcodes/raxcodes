"use client"

import { motion } from "framer-motion"
import { Globe, Wifi } from "lucide-react"

export default function MapSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-warm-white mb-3 sm:mb-4 font-manrope">
            Remote Operations
          </h2>
          <p className="text-base sm:text-lg text-warm-gray">Working with cafés worldwide, digitally</p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-dark-card rounded-xl p-6 sm:p-8 border border-dark-border"
        >
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-warm-orange/20 rounded-lg flex items-center justify-center mr-3">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-warm-orange" />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cool-blue/20 rounded-lg flex items-center justify-center">
              <Wifi className="w-5 h-5 sm:w-6 sm:h-6 text-cool-blue" />
            </div>
          </div>

          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 font-manrope text-warm-white">100% Remote Service 🌍</h3>
            <p className="text-warm-gray mb-6 sm:mb-8 text-sm sm:text-base">
              Serving café owners globally through digital collaboration and remote Instagram management
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-warm-orange mb-1">50+</div>
                <div className="text-xs sm:text-sm text-warm-gray">Cafés Served</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-warm-orange mb-1">2M+</div>
                <div className="text-xs sm:text-sm text-warm-gray">Reach Generated</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-warm-orange mb-1">85%</div>
                <div className="text-xs sm:text-sm text-warm-gray">Growth Rate</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-warm-orange mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-warm-gray">Digital Support</div>
              </div>
            </div>
          </div>

          <div className="bg-dark-bg/30 rounded-lg p-4 sm:p-6 border border-warm-orange/10">
            <h4 className="text-warm-white font-semibold mb-4 text-center">Remote Collaboration Benefits</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-warm-gray max-w-md mx-auto">
              <div className="flex items-center justify-center sm:justify-start">
                <div className="w-1.5 h-1.5 bg-warm-orange rounded-full mr-3 flex-shrink-0" />
                Global accessibility
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <div className="w-1.5 h-1.5 bg-cool-blue rounded-full mr-3 flex-shrink-0" />
                Flexible scheduling
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <div className="w-1.5 h-1.5 bg-golden-amber rounded-full mr-3 flex-shrink-0" />
                Cost-effective solutions
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <div className="w-1.5 h-1.5 bg-warm-orange rounded-full mr-3 flex-shrink-0" />
                Digital-first approach
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
