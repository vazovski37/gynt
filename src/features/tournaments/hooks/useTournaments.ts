import { useEffect, useState } from 'react'
import { Tournament } from '../types/tournament'
import { fetchTournaments } from '../services/fetchTournaments'

export function useTournaments() {
  const [tournaments, setTournaments] = useState<Tournament[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const data = await fetchTournaments()
        setTournaments(data)
      } catch (err: any) {
        console.error(err)
        setError('Failed to load tournaments.')
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  return { tournaments, loading, error }
}
