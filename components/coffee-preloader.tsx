"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface CoffeePreloaderProps {
  onPreloadComplete: () => void
}

export default function CoffeePreloader({ onPreloadComplete }: CoffeePreloaderProps) {
  const [fillProgress, setFillProgress] = useState(0)
  const [brewingPhase, setBrewingPhase] = useState<"empty" | "brewing" | "steaming" | "ready">("empty")
  const [showDroplets, setShowDroplets] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setFillProgress((prev) => {
        const newProgress = prev + 1.5

        // Update brewing phases
        if (newProgress <= 15) {
          setBrewingPhase("empty")
        } else if (newProgress <= 85) {
          setBrewingPhase("brewing")
          setShowDroplets(true)
        } else if (newProgress <= 95) {
          setBrewingPhase("steaming")
        } else {
          setBrewingPhase("ready")
          setShowDroplets(false)
        }

        if (newProgress >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            onPreloadComplete()
          }, 1200)
          return 100
        }
        return newProgress
      })
    }, 60)

    return () => clearInterval(timer)
  }, [onPreloadComplete])

  const getBrewingText = () => {
    switch (brewingPhase) {
      case "empty":
        return "Preparing your cup..."
      case "brewing":
        return "Brewing the perfect blend..."
      case "steaming":
        return "Adding the final touches..."
      case "ready":
        return "Your experience is ready!"
      default:
        return "Loading..."
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-dark-bg via-deep-navy/30 to-dark-bg flex items-center justify-center overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 140, 66, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(255, 183, 77, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="text-center px-4 relative z-10">
        {/* Main Coffee Cup Container */}
        <div className="relative mb-8">
          {/* Coffee Cup SVG with Filling Animation */}
          <div className="relative w-48 h-56 sm:w-56 sm:h-64 lg:w-64 lg:h-72 mx-auto">
            <svg
              viewBox="0 0 200 240"
              className="w-full h-full drop-shadow-lg"
              style={{ filter: "drop-shadow(0 0 20px rgba(255, 140, 66, 0.2))" }}
            >
              {/* Cup Body Outline */}
              <defs>
                {/* Coffee Liquid Gradient */}
                <linearGradient id="coffeeGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#451a03" />
                  <stop offset="20%" stopColor="#7c2d12" />
                  <stop offset="50%" stopColor="#a16207" />
                  <stop offset="80%" stopColor="#d97706" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>

                {/* Cup Gradient */}
                <linearGradient id="cupGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fafafa" />
                  <stop offset="50%" stopColor="#e5e5e5" />
                  <stop offset="100%" stopColor="#d4d4d4" />
                </linearGradient>

                {/* Clip Path for Coffee Fill */}
                <clipPath id="cupClip">
                  <path d="M40 80 L40 200 Q40 220 60 220 L140 220 Q160 220 160 200 L160 80 Z" />
                </clipPath>
              </defs>

              {/* Cup Body */}
              <path
                d="M40 80 L40 200 Q40 220 60 220 L140 220 Q160 220 160 200 L160 80 Z"
                fill="url(#cupGradient)"
                stroke="#FF8C42"
                strokeWidth="3"
                className="drop-shadow-sm"
              />

              {/* Coffee Fill with Animated Height */}
              <g clipPath="url(#cupClip)">
                <motion.rect
                  x="40"
                  y="80"
                  width="120"
                  height="140"
                  fill="url(#coffeeGradient)"
                  initial={{ y: 220, height: 0 }}
                  animate={{
                    y: 220 - fillProgress * 1.4,
                    height: fillProgress * 1.4,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />

                {/* Coffee Surface with Ripple Effect */}
                <motion.ellipse
                  cx="100"
                  cy={220 - fillProgress * 1.4}
                  rx="58"
                  ry="4"
                  fill="rgba(245, 158, 11, 0.8)"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: fillProgress > 10 ? [0.6, 1, 0.6] : 0,
                    ry: fillProgress > 10 ? [3, 5, 3] : 3,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                {/* Coffee Foam/Crema Layer */}
                <motion.ellipse
                  cx="100"
                  cy={220 - fillProgress * 1.4}
                  rx="55"
                  ry="3"
                  fill="rgba(255, 183, 77, 0.9)"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: fillProgress > 70 ? 0.8 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </g>

              {/* Cup Handle - Static */}
              <path
                d="M160 120 Q180 120 180 140 Q180 160 160 160"
                fill="none"
                stroke="#FF8C42"
                strokeWidth="8"
                strokeLinecap="round"
                style={{ filter: "drop-shadow(0 0 5px rgba(255, 140, 66, 0.3))" }}
              />

              {/* Cup Rim */}
              <ellipse cx="100" cy="80" rx="60" ry="8" fill="none" stroke="#FF8C42" strokeWidth="3" />

              {/* Inner Rim Shadow */}
              <ellipse cx="100" cy="82" rx="57" ry="6" fill="rgba(0, 0, 0, 0.1)" />
            </svg>

            {/* Animated Coffee Droplets */}
            <AnimatePresence>
              {showDroplets && (
                <div className="absolute inset-0">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-2 bg-amber-600 rounded-full opacity-70"
                      style={{
                        left: `${45 + i * 8}%`,
                        top: "25%",
                      }}
                      initial={{ y: -20, opacity: 0, scale: 0 }}
                      animate={{
                        y: [0, 40, 80],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0.5],
                      }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                        ease: "easeIn",
                      }}
                    />
                  ))}
                </div>
              )}
            </AnimatePresence>

            {/* Steam Animation */}
            <AnimatePresence>
              {brewingPhase === "steaming" && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-8 bg-gradient-to-t from-warm-orange/60 to-transparent rounded-full blur-sm"
                      style={{
                        left: `${i * 8 - 12}px`,
                      }}
                      initial={{ opacity: 0, scaleY: 0 }}
                      animate={{
                        opacity: [0.3, 0.8, 0.3],
                        scaleY: [0.5, 1.2, 0.5],
                        y: [-10, -25, -10],
                        x: [0, Math.sin(i) * 4, 0],
                      }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.3,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              )}
            </AnimatePresence>

            {/* Saucer - Static */}
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-56 sm:w-64 lg:w-72 h-3 bg-gradient-to-r from-warm-orange/10 via-warm-orange/30 to-warm-orange/10 rounded-full border border-warm-orange/20"
              style={{ boxShadow: "0 0 15px rgba(255, 140, 66, 0.2)" }}
            />
          </div>

          {/* Brewing Progress Indicator */}
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="text-2xl sm:text-3xl font-bold text-warm-orange mb-1">{Math.round(fillProgress)}%</div>
          </motion.div>
        </div>

        {/* Brand and Status Text */}
        <motion.div
          className="mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-warm-white mb-3 font-manrope">CafeHopper</h1>
          <motion.p
            className="text-sm sm:text-base text-warm-gray"
            key={brewingPhase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {getBrewingText()}
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-72 sm:w-80 lg:w-96 mx-auto mb-6">
          <div className="h-2 bg-dark-card rounded-full overflow-hidden border border-dark-border relative">
            <motion.div
              className="h-full bg-warm-gradient rounded-full relative overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: `${fillProgress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ boxShadow: "0 0 10px rgba(255, 140, 66, 0.4)" }}
            >
              {/* Progress Bar Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>

          {/* Progress Labels */}
          <div className="flex justify-between text-xs text-warm-gray mt-2">
            <span>Empty</span>
            <span>Brewing</span>
            <span>Ready</span>
          </div>
        </div>

        {/* Brewing Stage Indicators */}
        <div className="flex justify-center space-x-4 mb-4">
          {["empty", "brewing", "steaming", "ready"].map((phase, index) => (
            <motion.div
              key={phase}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                brewingPhase === phase
                  ? "bg-warm-orange shadow-warm-glow"
                  : index < ["empty", "brewing", "steaming", "ready"].indexOf(brewingPhase)
                    ? "bg-warm-orange/60"
                    : "bg-dark-border"
              }`}
              animate={{
                scale: brewingPhase === phase ? [1, 1.3, 1] : 1,
              }}
              transition={{
                duration: 1,
                repeat: brewingPhase === phase ? Number.POSITIVE_INFINITY : 0,
              }}
            />
          ))}
        </div>

        {/* Completion Animation */}
        <AnimatePresence>
          {brewingPhase === "ready" && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <motion.div
                className="w-64 h-64 border-2 border-warm-orange rounded-full"
                animate={{
                  scale: [1, 2.5],
                  opacity: [0.8, 0],
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Ambient Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-warm-orange/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0, 0.6, 0],
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
