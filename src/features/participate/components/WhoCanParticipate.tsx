'use client'

import { useTranslation } from 'react-i18next'
import { Users, School, BadgeCheck, UserCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const icons = [Users, School, BadgeCheck, UserCheck]

export default function WhoCanParticipate() {
  const { t } = useTranslation('participate')
  const rules = t('whoCan.rules', { returnObjects: true }) as string[]

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('whoCan.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {rules.map((rule, idx) => {
            const Icon = icons[idx]
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-border/50 hover:bg-card/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Icon className="text-primary w-6 h-6" />
                </div>
                <p className="text-sm text-foreground leading-relaxed flex-1">{rule}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
