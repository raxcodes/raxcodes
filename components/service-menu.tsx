"use client"

import { motion } from "framer-motion"
import { Coffee, Zap, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Coffee,
    name: "Growth Strategy",
    price: "₹15,000",
    description: "Comprehensive Instagram growth plan",
    benefits: ["Content strategy & planning", "Hashtag research & optimization", "Growth analytics & reporting"],
    gradient: "bg-warm-gradient",
    iconBg: "bg-warm-orange/20",
    iconColor: "text-warm-orange",
  },
  {
    icon: Zap,
    name: "Engagement Boost",
    price: "₹25,000",
    description: "Rapid engagement improvement",
    benefits: ["Community management", "Story & reel optimization", "Influencer collaboration setup"],
    gradient: "bg-gradient-to-br from-golden-amber to-golden-light",
    iconBg: "bg-golden-amber/20",
    iconColor: "text-golden-amber",
  },
  {
    icon: Heart,
    name: "Full Management",
    price: "₹35,000",
    description: "Complete social media management",
    benefits: ["Professional content creation", "Brand photography direction", "Complete account management"],
    gradient: "bg-cool-gradient",
    iconBg: "bg-cool-blue/20",
    iconColor: "text-cool-blue",
  },
]

export default function ServiceMenu() {
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
            Services
          </h2>
          <p className="text-base sm:text-lg text-warm-gray max-w-2xl mx-auto px-4">
            Choose your perfect Instagram growth package
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-dark-card rounded-xl p-6 sm:p-8 border border-dark-border hover:border-warm-orange/50 transition-all duration-300 group hover:warm-glow"
            >
              <div className="text-center mb-6 sm:mb-8">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 ${service.iconBg} rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${service.iconColor}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-warm-white mb-2 font-manrope">{service.name}</h3>
                <p className="text-sm sm:text-base text-warm-gray mb-3 sm:mb-4">{service.description}</p>
                <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-warm-gradient mb-4 sm:mb-6">
                  Starting at {service.price}
                </div>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start text-sm sm:text-base text-warm-gray">
                    <div className="w-1.5 h-1.5 bg-warm-orange rounded-full mr-3 flex-shrink-0 mt-2" />
                    <span className="leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${service.gradient} hover:shadow-warm-glow text-white rounded-lg py-3 font-medium transition-all duration-300 hover:scale-105 active:scale-95 border-0 min-h-[48px]`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
