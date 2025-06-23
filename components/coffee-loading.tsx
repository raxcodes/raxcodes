"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface CoffeeLoadingProps {
  onLoadingComplete: () => void
}

export default function CoffeeLoading({ onLoadingComplete }: CoffeeLoadingProps) {
  const [progress, setProgress] = useState(0)
  const [currentPhase, setCurrentPhase] = useState<"brewing" | "pouring" | "steaming" | "complete">("brewing")

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2

        // Update phases based on progress
        if (newProgress <= 30) {
          setCurrentPhase("brewing")
        } else if (newProgress <= 70) {
          setCurrentPhase("pouring")
        } else if (newProgress <= 95) {
          setCurrentPhase("steaming")
        } else {
          setCurrentPhase("complete")
        }

        if (newProgress >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            onLoadingComplete()
          }, 1000)
          return 100
        }
        return newProgress
      })
    }, 80)

    return () => clearInterval(timer)
  }, [onLoadingComplete])

  const getPhaseText = () => {
    switch (currentPhase) {
      case "brewing":
        return "Brewing your experience..."
      case "pouring":
        return "Pouring the perfect blend..."
      case "steaming":
        return "Adding the finishing touches..."
      case "complete":
        return "Ready to serve!"
      default:
        return "Loading..."
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-dark-bg via-deep-navy/20 to-dark-bg flex items-center justify-center"
    >
      <div className="text-center px-4">
        {/* Coffee Cup Container */}
        <div className="relative mb-8">
          {/* Steam Animation */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 bg-gradient-to-t from-warm-orange/60 to-transparent rounded-full"
                style={{
                  left: `${i * 8 - 8}px`,
                  height: "30px",
                }}
                animate={{
                  opacity: currentPhase === "steaming" || currentPhase === "complete" ? [0.3, 0.8, 0.3] : 0,
                  scaleY: currentPhase === "steaming" || currentPhase === "complete" ? [0.5, 1, 0.5] : 0,
                  y: currentPhase === "steaming" || currentPhase === "complete" ? [-10, -20, -10] : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Coffee Cup */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto">
            {/* Cup Body */}
            <motion.div
              className="absolute inset-0 border-4 border-warm-orange rounded-b-full bg-gradient-to-b from-transparent to-dark-card/50"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Coffee Fill Animation */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900 via-amber-700 to-amber-600 rounded-b-full"
                initial={{ height: 0 }}
                animate={{
                  height:
                    currentPhase === "brewing"
                      ? "20%"
                      : currentPhase === "pouring"
                        ? "60%"
                        : currentPhase === "steaming" || currentPhase === "complete"
                          ? "80%"
                          : 0,
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              {/* Coffee Surface Ripple */}
              <motion.div
                className="absolute top-[20%] left-2 right-2 h-1 bg-amber-500/30 rounded-full"
                animate={{
                  opacity:
                    currentPhase === "pouring" || currentPhase === "steaming" || currentPhase === "complete"
                      ? [0.3, 0.7, 0.3]
                      : 0,
                  scaleX:
                    currentPhase === "pouring" || currentPhase === "steaming" || currentPhase === "complete"
                      ? [0.8, 1, 0.8]
                      : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Cup Handle */}
            <motion.div
              className="absolute right-0 top-1/4 w-6 h-12 border-4 border-warm-orange border-l-0 rounded-r-full"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />

            {/* Saucer */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-36 sm:w-44 h-4 bg-gradient-to-r from-warm-orange/20 via-warm-orange/40 to-warm-orange/20 rounded-full border border-warm-orange/30"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
          </div>

          {/* Floating Coffee Beans */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-3 bg-amber-800 rounded-full"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 20}%`,
              }}
              animate={{
                y: [-5, 5, -5],
                rotate: [0, 180, 360],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.div
          className="mb-6"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-warm-white mb-2 font-manrope">CafeHopper</h2>
          <p className="text-sm sm:text-base text-warm-gray">{getPhaseText()}</p>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-64 sm:w-80 mx-auto mb-4">
          <div className="flex justify-between text-xs text-warm-gray mb-2">
            <span>0%</span>
            <span>{Math.round(progress)}%</span>
            <span>100%</span>
          </div>
          <div className="h-2 bg-dark-card rounded-full overflow-hidden border border-dark-border">
            <motion.div
              className="h-full bg-warm-gradient rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Progress Bar Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-1">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-warm-orange rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Completion Animation */}
        <AnimatePresence>
          {currentPhase === "complete" && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                className="w-32 h-32 border-4 border-warm-orange rounded-full"
                animate={{
                  scale: [1, 2, 3],
                  opacity: [1, 0.5, 0],
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-warm-orange/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
