'use client'

import TournamentCard from './TournamentCard'
import { Tournament } from '../types/tournament'
import { useTranslation } from 'react-i18next'

type Props = {
  tournaments: Tournament[]
}

export default function TournamentList({ tournaments }: Props) {
  const { t } = useTranslation('tournaments')

  if (!tournaments.length) {
    return (
      <p className="text-muted-foreground text-sm text-center">
        {t('noTournaments')}
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {tournaments.map((tournament) => (
        <TournamentCard key={tournament.id} tournament={tournament} />
      ))}
    </div>
  )
}
