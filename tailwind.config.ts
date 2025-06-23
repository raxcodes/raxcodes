import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colors extracted from the café image
        "warm-orange": "#FF8C42",
        "warm-orange-light": "#FFA726",
        "warm-orange-dark": "#E65722",
        "golden-amber": "#FFB74D",
        "golden-light": "#FFD54F",
        "cool-blue": "#4FC3F7",
        "cool-blue-dark": "#29B6F6",
        "deep-navy": "#1A1A2E",
        "deep-navy-light": "#16213E",
        "warm-cream": "#FFECB3",
        "dark-bg": "#0F0F0F",
        "dark-card": "#1A1A1A",
        "dark-border": "#2A2A2A",
        "warm-gray": "#A0A0A0",
        "warm-white": "#FAFAFA",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        manrope: ["var(--font-manrope)", "sans-serif"],
        lato: ["var(--font-lato)", "sans-serif"],
        sans: ["var(--font-lato)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        minimal: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "minimal-lg": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "warm-glow": "0 0 20px rgba(255, 140, 66, 0.3)",
      },
      backgroundImage: {
        "warm-gradient": "linear-gradient(135deg, #FF8C42 0%, #FFB74D 100%)",
        "cool-gradient": "linear-gradient(135deg, #4FC3F7 0%, #29B6F6 100%)",
        "hero-gradient": "linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #FF8C42 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(255, 140, 66, 0.5)" },
          "100%": { boxShadow: "0 0 20px rgba(255, 140, 66, 0.8)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
