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
      className="fixed inset-0 z-50 bg-gradient-to-br from-dark-bg via-deep-navy/20 to-dark-bg flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Rotating Coffee Bean Pattern */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-5 bg-gradient-to-b from-amber-900/10 to-amber-700/5 rounded-full"
              style={{
                left: `${50 + 35 * Math.cos((i * 30 * Math.PI) / 180)}%`,
                top: `${50 + 35 * Math.sin((i * 30 * Math.PI) / 180)}%`,
                transform: `rotate(${i * 30}deg)`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Gradient Waves */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(255, 140, 66, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 183, 77, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(79, 195, 247, 0.05) 0%, transparent 50%)
            `,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Floating Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          >
            <div
              className={`w-2 h-2 ${
                i % 3 === 0
                  ? "bg-warm-orange/20 rounded-full"
                  : i % 3 === 1
                    ? "bg-golden-amber/20 rotate-45"
                    : "bg-cool-blue/20 rounded-sm"
              }`}
            />
          </motion.div>
        ))}

        {/* Dynamic Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 140, 66, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 140, 66, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px", "0px 0px"],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="text-center px-4 relative z-10">
        {/* Coffee Cup Container with Enhanced Glow */}
        <div className="relative mb-8">
          {/* Multi-layered Glow Effect */}
          <motion.div
            className="absolute inset-0 -m-8"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-warm-orange/20 via-golden-amber/30 to-warm-orange/20 blur-xl" />

            {/* Middle Glow Ring */}
            <motion.div
              className="absolute inset-2 rounded-full bg-gradient-to-r from-warm-orange/30 via-golden-amber/40 to-warm-orange/30 blur-lg"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            {/* Inner Shimmer Ring */}
            <motion.div
              className="absolute inset-4 rounded-full bg-gradient-to-r from-transparent via-warm-orange/50 to-transparent blur-md"
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </motion.div>

          {/* Pulsing Border Effect */}
          <motion.div
            className="absolute inset-0 -m-4 rounded-full"
            animate={{
              boxShadow: [
                "0 0 20px rgba(255, 140, 66, 0.3)",
                "0 0 40px rgba(255, 140, 66, 0.6)",
                "0 0 60px rgba(255, 183, 77, 0.4)",
                "0 0 40px rgba(255, 140, 66, 0.6)",
                "0 0 20px rgba(255, 140, 66, 0.3)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Steam Animation with Enhanced Effects */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${i * 6 - 12}px`,
                  width: "2px",
                  height: "35px",
                  background: `linear-gradient(to top, 
                    rgba(255, 140, 66, 0.6) 0%, 
                    rgba(255, 183, 77, 0.4) 50%, 
                    transparent 100%
                  )`,
                  filter: "blur(1px)",
                }}
                animate={{
                  opacity: currentPhase === "steaming" || currentPhase === "complete" ? [0.2, 0.9, 0.2] : 0,
                  scaleY: currentPhase === "steaming" || currentPhase === "complete" ? [0.3, 1.2, 0.3] : 0,
                  scaleX: currentPhase === "steaming" || currentPhase === "complete" ? [0.5, 1, 0.5] : 0,
                  y: currentPhase === "steaming" || currentPhase === "complete" ? [-15, -30, -15] : 0,
                  x: [0, Math.sin(i) * 3, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Coffee Cup with Enhanced Glow Border */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto">
            {/* Glowing Cup Border */}
            <motion.div
              className="absolute inset-0 rounded-b-full"
              style={{
                background: `linear-gradient(45deg, 
                  rgba(255, 140, 66, 0.8) 0%, 
                  rgba(255, 183, 77, 0.6) 25%, 
                  rgba(79, 195, 247, 0.4) 50%, 
                  rgba(255, 183, 77, 0.6) 75%, 
                  rgba(255, 140, 66, 0.8) 100%
                )`,
                padding: "3px",
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {/* Cup Body */}
              <div className="w-full h-full border-2 border-warm-orange rounded-b-full bg-gradient-to-b from-transparent to-dark-card/50 relative overflow-hidden">
                {/* Shimmer Effect on Cup */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                {/* Coffee Fill Animation with Glow */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 rounded-b-full relative overflow-hidden"
                  style={{
                    background: `linear-gradient(to top, 
                      #92400e 0%, 
                      #b45309 30%, 
                      #d97706 60%, 
                      #f59e0b 100%
                    )`,
                    boxShadow: "inset 0 0 20px rgba(255, 140, 66, 0.3)",
                  }}
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
                >
                  {/* Coffee Surface Glow */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400/50 via-amber-300/70 to-amber-400/50 blur-sm"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scaleX: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Coffee Surface Ripple with Enhanced Effect */}
                <motion.div
                  className="absolute top-[20%] left-2 right-2 h-1 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255, 183, 77, 0.8), transparent)",
                    boxShadow: "0 0 10px rgba(255, 183, 77, 0.5)",
                  }}
                  animate={{
                    opacity:
                      currentPhase === "pouring" || currentPhase === "steaming" || currentPhase === "complete"
                        ? [0.3, 0.9, 0.3]
                        : 0,
                    scaleX:
                      currentPhase === "pouring" || currentPhase === "steaming" || currentPhase === "complete"
                        ? [0.6, 1.4, 0.6]
                        : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>

            {/* Cup Handle with Glow */}
            <motion.div
              className="absolute right-0 top-1/4 w-6 h-12 border-3 border-warm-orange border-l-0 rounded-r-full"
              style={{
                filter: "drop-shadow(0 0 8px rgba(255, 140, 66, 0.5))",
              }}
              initial={{ opacity: 0, x: 10 }}
              animate={{
                opacity: 1,
                x: 0,
                boxShadow: [
                  "0 0 5px rgba(255, 140, 66, 0.3)",
                  "0 0 15px rgba(255, 140, 66, 0.6)",
                  "0 0 5px rgba(255, 140, 66, 0.3)",
                ],
              }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                boxShadow: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            />

            {/* Saucer with Enhanced Glow */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-36 sm:w-44 h-4 rounded-full border border-warm-orange/50"
              style={{
                background: `linear-gradient(to right, 
                  rgba(255, 140, 66, 0.1), 
                  rgba(255, 140, 66, 0.3), 
                  rgba(255, 183, 77, 0.4), 
                  rgba(255, 140, 66, 0.3), 
                  rgba(255, 140, 66, 0.1)
                )`,
                boxShadow: "0 0 20px rgba(255, 140, 66, 0.3)",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                boxShadow: [
                  "0 0 15px rgba(255, 140, 66, 0.2)",
                  "0 0 30px rgba(255, 140, 66, 0.4)",
                  "0 0 15px rgba(255, 140, 66, 0.2)",
                ],
              }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                boxShadow: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            />
          </div>

          {/* Enhanced Floating Coffee Beans */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-3 rounded-full"
              style={{
                top: `${15 + i * 12}%`,
                left: `${8 + i * 15}%`,
                background: `linear-gradient(45deg, #92400e, #b45309)`,
                boxShadow: "0 0 8px rgba(146, 64, 14, 0.5)",
              }}
              animate={{
                y: [-8, 8, -8],
                x: [-3, 3, -3],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.9, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Enhanced Loading Text with Glow */}
        <motion.div
          className="mb-6"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          style={{
            filter: "drop-shadow(0 0 10px rgba(255, 140, 66, 0.3))",
          }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-warm-white mb-2 font-manrope">CafeHopper</h2>
          <p className="text-sm sm:text-base text-warm-gray">{getPhaseText()}</p>
        </motion.div>

        {/* Enhanced Progress Bar */}
        <div className="w-64 sm:w-80 mx-auto mb-4">
          <div className="flex justify-between text-xs text-warm-gray mb-2">
            <span>0%</span>
            <span>{Math.round(progress)}%</span>
            <span>100%</span>
          </div>
          <div className="h-3 bg-dark-card rounded-full overflow-hidden border border-dark-border relative">
            <motion.div
              className="h-full rounded-full relative overflow-hidden"
              style={{
                background: `linear-gradient(90deg, 
                  #FF8C42 0%, 
                  #FFB74D 50%, 
                  #4FC3F7 100%
                )`,
                boxShadow: "0 0 15px rgba(255, 140, 66, 0.5)",
              }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Enhanced Progress Bar Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Progress Bar Pulse */}
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full"
                animate={{
                  opacity: [0, 0.5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Enhanced Loading Dots */}
        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{
                background: `linear-gradient(45deg, #FF8C42, #FFB74D)`,
                boxShadow: "0 0 10px rgba(255, 140, 66, 0.5)",
              }}
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.4, 1, 0.4],
                boxShadow: [
                  "0 0 5px rgba(255, 140, 66, 0.3)",
                  "0 0 20px rgba(255, 140, 66, 0.8)",
                  "0 0 5px rgba(255, 140, 66, 0.3)",
                ],
              }}
              transition={{
                duration: 1.2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Enhanced Completion Animation */}
        <AnimatePresence>
          {currentPhase === "complete" && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Multiple Expanding Rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-32 h-32 border-4 rounded-full"
                  style={{
                    borderColor: i === 0 ? "#FF8C42" : i === 1 ? "#FFB74D" : "#4FC3F7",
                    borderStyle: "solid",
                  }}
                  animate={{
                    scale: [1, 3 + i, 4 + i],
                    opacity: [1, 0.5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.2,
                    ease: "easeOut",
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `linear-gradient(45deg, 
                rgba(255, 140, 66, ${0.1 + Math.random() * 0.3}), 
                rgba(255, 183, 77, ${0.1 + Math.random() * 0.3})
              )`,
              boxShadow: `0 0 ${5 + Math.random() * 10}px rgba(255, 140, 66, 0.3)`,
            }}
            animate={{
              y: [-30, -60, -30],
              x: [-10, 10, -10],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
