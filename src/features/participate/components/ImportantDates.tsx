'use client'

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

export default function ImportantDates() {
  const { t } = useTranslation('participate')
  const rows = t('dates.list', { returnObjects: true }) as { date: string; event: string }[]

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
            {t('dates.title')}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {rows.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-border/50 hover:bg-card/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-foreground mb-1">{row.date}</div>
                <div className="text-sm text-muted-foreground">{row.event}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
