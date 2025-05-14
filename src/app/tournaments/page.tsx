'use client'

import { useTournaments, TournamentList } from '@/features/tournaments'
import { Separator } from '@/components/ui/separator'

export default function TournamentsPage() {
  const { tournaments, loading, error } = useTournaments()

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
        🏆 Tournaments
      </h1>
      <p className="text-muted-foreground text-base mb-6 max-w-2xl">
        Each year, GYNT brings together Georgia’s brightest young scientists.
        Explore past editions, research problems, and winning solutions.
      </p>

      <Separator className="mb-8" />

      {loading && <p className="text-sm text-muted-foreground">Loading tournaments...</p>}
      {error && <p className="text-sm text-red-500">Failed to load tournaments.</p>}

      {!loading && !error && <TournamentList tournaments={tournaments} />}
    </section>
  )
}
