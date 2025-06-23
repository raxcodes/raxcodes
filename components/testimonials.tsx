"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    cafe: "Brew & Beans",
    quote: "CafeHopper transformed our Instagram presence! Our foot traffic increased by 40% in just 3 months.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Arjun Patel",
    cafe: "The Coffee Corner",
    quote: "The content strategy was spot-on. We went from 500 to 5000 followers with genuine engagement.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Meera Gupta",
    cafe: "Café Mocha",
    quote: "Professional, creative, and results-driven. CafeHopper understands the café business like no one else.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-dark-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-warm-white mb-3 sm:mb-4 font-manrope">
            What Clients Say
          </h2>
          <p className="text-base sm:text-lg text-warm-gray">Real results from real café owners</p>
        </motion.div>

        <div className="relative min-h-[280px] sm:min-h-[320px] lg:min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center px-4"
            >
              <div className="bg-dark-card rounded-xl p-6 sm:p-8 max-w-2xl mx-auto border border-dark-border text-center w-full">
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                  <Image
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-warm-orange/20 w-12 h-12 sm:w-15 sm:h-15"
                  />
                </div>

                <div className="flex justify-center mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-warm-orange fill-current" />
                  ))}
                </div>

                <p className="text-warm-gray mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg px-2">
                  "{testimonials[currentIndex].quote}"
                </p>

                <div>
                  <p className="font-semibold text-warm-white text-sm sm:text-base">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-xs sm:text-sm text-warm-orange">{testimonials[currentIndex].cafe}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-warm-orange" : "bg-dark-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
