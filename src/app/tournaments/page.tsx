'use client'

import { useTournaments, TournamentList } from '@/features/tournaments'
import { Separator } from '@/components/ui/separator'
import { useLanguage } from '@/lib/language-context'
import { useTranslation } from 'react-i18next'

export default function TournamentsPage() {
  const { language } = useLanguage()
  const { t } = useTranslation('tournaments')
  const { tournaments, loading, error } = useTournaments(language)

  return (
    <section key={language} className="max-w-5xl mx-auto px-6 py-16 pt-24">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
        🏆 {t('title')}
      </h1>
      <p className="text-muted-foreground text-base mb-6 max-w-2xl">
        {t('subtitle')}
      </p>

      <Separator className="mb-8" />

      {loading && <p className="text-sm text-muted-foreground">{t('loading')}</p>}
      {error && <p className="text-sm text-red-500">{t('error')}</p>}

      {!loading && !error && <TournamentList tournaments={tournaments} />}
    </section>
  )
}
