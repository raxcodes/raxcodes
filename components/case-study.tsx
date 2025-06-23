import type React from "react"

interface CaseStudyProps {
  children: React.ReactNode
}

const CaseStudy: React.FC<CaseStudyProps> = ({ children }) => {
  return (
    <section
      data-section="case-study"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-bg via-deep-navy/10 to-dark-bg"
    >
      {children}
    </section>
  )
}

export default CaseStudy
