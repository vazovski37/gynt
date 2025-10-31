'use client'

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FlaskConical, BrainCircuit } from 'lucide-react'

export default function TournamentFormat() {
  const { t } = useTranslation('participate')

  const stages = [
    {
      icon: FlaskConical,
      title: t('format.prep'),
      desc: t('format.prepDesc'),
      emoji: '🔬',
    },
    {
      icon: BrainCircuit,
      title: t('format.fight'),
      desc: t('format.fightDesc'),
      emoji: '🧠',
    },
  ]

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
            {t('format.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {stages.map((stage, idx) => {
            const Icon = stage.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-border/50 hover:bg-card/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{stage.emoji} {stage.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                  {stage.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
