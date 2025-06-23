"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    cafeName: "",
    espressoOrder: "",
    instagramLink: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.cafeName.trim()) {
      newErrors.cafeName = "Please tell us your café name"
    }

    if (!formData.instagramLink.trim()) {
      newErrors.instagramLink = "We need your Instagram link to help you grow"
    } else if (!formData.instagramLink.includes("instagram.com")) {
      newErrors.instagramLink = "Please enter a valid Instagram URL"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ cafeName: "", espressoOrder: "", instagramLink: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-bg via-deep-navy/20 to-dark-bg">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-warm-white mb-3 sm:mb-4 font-manrope">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg text-warm-gray">Ready to grow your café's Instagram presence?</p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-dark-card/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-warm-orange/20 warm-glow"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-6 sm:py-8"
            >
              <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-warm-orange mx-auto mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-warm-white mb-2">Message Sent!</h3>
              <p className="text-warm-gray text-sm sm:text-base">
                Thanks for reaching out! I'll get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <Input
                  name="cafeName"
                  placeholder="Your café name"
                  value={formData.cafeName}
                  onChange={handleChange}
                  className={`bg-dark-bg/50 border-dark-border text-warm-white placeholder:text-warm-gray rounded-lg py-3 px-4 focus:border-warm-orange focus:ring-warm-orange/20 transition-all duration-300 min-h-[48px] text-base ${
                    errors.cafeName ? "border-red-500" : ""
                  }`}
                />
                {errors.cafeName && <p className="text-red-400 text-sm mt-1">{errors.cafeName}</p>}
              </div>

              <div>
                <Input
                  name="espressoOrder"
                  placeholder="Your favorite coffee order (optional)"
                  value={formData.espressoOrder}
                  onChange={handleChange}
                  className="bg-dark-bg/50 border-dark-border text-warm-white placeholder:text-warm-gray rounded-lg py-3 px-4 focus:border-golden-amber focus:ring-golden-amber/20 transition-all duration-300 min-h-[48px] text-base"
                />
              </div>

              <div>
                <Input
                  name="instagramLink"
                  placeholder="Your Instagram link"
                  value={formData.instagramLink}
                  onChange={handleChange}
                  className={`bg-dark-bg/50 border-dark-border text-warm-white placeholder:text-warm-gray rounded-lg py-3 px-4 focus:border-cool-blue focus:ring-cool-blue/20 transition-all duration-300 min-h-[48px] text-base ${
                    errors.instagramLink ? "border-red-500" : ""
                  }`}
                />
                {errors.instagramLink && <p className="text-red-400 text-sm mt-1">{errors.instagramLink}</p>}
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Tell me about your café and your Instagram goals..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-dark-bg/50 border-dark-border text-warm-white placeholder:text-warm-gray rounded-lg py-3 px-4 focus:border-warm-orange focus:ring-warm-orange/20 resize-none transition-all duration-300 text-base"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-warm-gradient hover:shadow-warm-glow text-white rounded-lg py-4 font-medium text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 disabled:scale-100 border-0 min-h-[52px]"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
