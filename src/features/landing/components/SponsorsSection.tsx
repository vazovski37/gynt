'use client'

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export function SponsorsSection() {
  const { t } = useTranslation('landing')

  // Simplified sponsor list - just names/logos
  const sponsors = [
    'Ministry of Education',
    'Science Foundation',
    'Tech Partners',
    'Academic Partners',
  ]

  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-6">
            {t('sponsors.title')}
          </h2>
        </motion.div>

        {/* Sponsor Logos - Simple Row */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="px-6 py-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30 hover:border-border/50 hover:bg-card/50 transition-all duration-300"
            >
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                {sponsor}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
