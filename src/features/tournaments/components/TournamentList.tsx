'use client'

import TournamentCard from './TournamentCard'
import { Tournament } from '../types/tournament'

type Props = {
  tournaments: Tournament[]
}

export default function TournamentList({ tournaments }: Props) {
  if (!tournaments.length) {
    return (
      <p className="text-muted-foreground text-sm text-center">
        No tournaments available.
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
