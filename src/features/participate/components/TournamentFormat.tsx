'use client'

import { useTranslation } from 'react-i18next'

export default function TournamentFormat() {
  const { t } = useTranslation('participate')

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">
        {t('format.title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-muted/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">🔬 {t('format.prep')}</h3>
          <p className="text-sm text-muted-foreground whitespace-pre-line">
            {t('format.prepDesc')}
          </p>
        </div>
        <div className="bg-muted/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">🧠 {t('format.fight')}</h3>
          <p className="text-sm text-muted-foreground whitespace-pre-line">
            {t('format.fightDesc')}
          </p>
        </div>
      </div>
    </section>
  )
}
