import { useEffect, useState } from 'react'
import { Research } from '../types/research'
import { fetchResearches } from '../services/fetchResearches'

/**
 * Custom hook to fetch researches for a specific language.
 * @param language The desired language ('en', 'ge', etc.)
 */
export function useResearches(language: string) {
  const [researches, setResearches] = useState<Research[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!language) {
      setError('Language is required to fetch researches.')
      setLoading(false)
      return
    }

    const load = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await fetchResearches(language)
        setResearches(data)
      } catch (err: any) {
        console.error("Error fetching researches:", err)
        setError('Failed to load researches. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [language])

  return { researches, loading, error }
}

