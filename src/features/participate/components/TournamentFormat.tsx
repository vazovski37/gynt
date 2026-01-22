'use client'

import { useTranslation } from 'react-i18next'
import { Swords } from 'lucide-react'

export default function TournamentFormat() {
  const { t } = useTranslation('participate')

  const roles = t('format.roles', { returnObjects: true }) as { role: string; desc: string }[]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Swords className="w-4 h-4" />
            <span>Science Battles</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('format.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('format.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((item, idx) => (
            <div key={idx} className="bg-background rounded-2xl p-8 border border-border shadow-lg relative">
              <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl text-primary">
                {idx + 1}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{item.role}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
