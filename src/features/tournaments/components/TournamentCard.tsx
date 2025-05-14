'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Tournament } from '../types/tournament'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

type Props = {
  tournament: Tournament
}

export default function TournamentCard({ tournament }: Props) {
  const { year, edition, city, location } = tournament

  return (
    <div className="p-6 border rounded-xl bg-background shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-primary mb-1">{edition} — {year}</h3>
      <p className="text-sm text-muted-foreground mb-2">{city} • {location}</p>

      <Separator className="my-4" />

      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-muted-foreground">
          {new Date(tournament.start_date).toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
          })} – {new Date(tournament.end_date).toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </span>

        <Button variant="link" className="text-sm px-0" asChild>
          <Link href={`/tournaments/${year}`}>
            Explore {year} <ArrowRight className="ml-1 w-4 h-4 inline" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
