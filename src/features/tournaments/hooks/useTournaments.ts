import { useEffect, useState } from 'react'
import { Tournament } from '../types/tournament'
import { fetchTournaments } from '../services/fetchTournaments'

/**
 * Custom hook to fetch tournaments for a specific language.
 * @param language The desired language ('en', 'ka', etc.)
 */
export function useTournaments(language: string) {
  const [tournaments, setTournaments] = useState<Tournament[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Ensure a language is provided before attempting to fetch
    if (!language) {
      setError('Language is required to fetch tournaments.');
      setLoading(false);
      return;
    }

    const load = async () => {
      setLoading(true)
      setError(null); // Clear any previous errors
      try {
        // Pass the language to the fetchTournaments function
        const data = await fetchTournaments(language)
        setTournaments(data)
      } catch (err: any) {
        console.error("Error fetching tournaments:", err)
        setError('Failed to load tournaments. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [language]) // Add 'language' to the dependency array so it re-fetches when the language changes

  return { tournaments, loading, error }
}