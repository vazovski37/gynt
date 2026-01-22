'use client'

import { useTranslation } from 'react-i18next'
import { Check } from 'lucide-react'

export default function WhoCanParticipate() {
  const { t } = useTranslation('participate')

  const rules = t('whoCan.rules', { returnObjects: true }) as { label: string; text: string }[]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {t('whoCan.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {rules.map((rule, idx) => (
            <div
              key={idx}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{rule.label}</h3>
              <p className="text-muted-foreground">{rule.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
