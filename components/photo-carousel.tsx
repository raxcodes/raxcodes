"use client"

import { motion, AnimatePresence, type PanInfo } from "framer-motion"
import { Instagram, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const cafePhotos = [
  { id: 1, src: "/placeholder.svg?height=300&width=300", alt: "Latte art masterpiece" },
  { id: 2, src: "/placeholder.svg?height=300&width=300", alt: "Cozy café corner" },
  { id: 3, src: "/placeholder.svg?height=300&width=300", alt: "Fresh pastries display" },
  { id: 4, src: "/placeholder.svg?height=300&width=300", alt: "Barista at work" },
  { id: 5, src: "/placeholder.svg?height=300&width=300", alt: "Café exterior view" },
  { id: 6, src: "/placeholder.svg?height=300&width=300", alt: "Coffee beans close-up" },
]

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (cafePhotos.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (cafePhotos.length - 2)) % (cafePhotos.length - 2))
  }

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 50
    if (info.offset.x > threshold) {
      prevSlide()
    } else if (info.offset.x < -threshold) {
      nextSlide()
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-dark-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-warm-white mb-3 sm:mb-4 font-manrope">
            Latest Café Shots
          </h2>
          <p className="text-warm-gray flex items-center justify-center gap-2 text-sm sm:text-base">
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            @heycafehopper
          </p>
        </motion.div>

        <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-3 sm:gap-4 lg:gap-6"
              animate={{ x: -currentIndex * (window.innerWidth < 640 ? 280 : window.innerWidth < 1024 ? 300 : 320) }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
            >
              {cafePhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  className="flex-shrink-0 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-xl overflow-hidden bg-dark-card border border-dark-border cursor-grab active:cursor-grabbing"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows - Hidden on mobile, shown on tablet+ */}
          <AnimatePresence>
            {isHovered && (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 hidden sm:block"
                >
                  <Button
                    onClick={prevSlide}
                    size="icon"
                    className="bg-dark-card/80 hover:bg-warm-orange border border-dark-border text-warm-white rounded-full w-10 h-10 sm:w-12 sm:h-12"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 hidden sm:block"
                >
                  <Button
                    onClick={nextSlide}
                    size="icon"
                    className="bg-dark-card/80 hover:bg-warm-orange border border-dark-border text-warm-white rounded-full w-10 h-10 sm:w-12 sm:h-12"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 sm:hidden">
            {Array.from({ length: cafePhotos.length - 2 }).map((_, index) => (
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
      </div>
    </section>
  )
}
