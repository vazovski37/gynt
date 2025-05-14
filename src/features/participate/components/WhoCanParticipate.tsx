'use client'

import { useTranslation } from 'react-i18next'
import { Users, School, BadgeCheck, UserCheck } from 'lucide-react'

const icons = [Users, School, BadgeCheck, UserCheck]

export default function WhoCanParticipate() {
  const { t } = useTranslation('participate')
  const rules = t('whoCan.rules', { returnObjects: true }) as string[]

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-primary mb-8 text-center">
        {t('whoCan.title')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {rules.map((rule, idx) => {
          const Icon = icons[idx]
          return (
            <div key={idx} className="flex items-start gap-4 bg-background p-4 rounded-xl shadow-sm">
              <Icon className="text-primary w-6 h-6 mt-1" />
              <p className="text-sm text-muted-foreground">{rule}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
