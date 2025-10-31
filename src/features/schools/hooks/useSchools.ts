import { useEffect, useState } from 'react'
import { School } from '../types/school'
import { fetchRegisteredSchools } from '../services/fetchSchools'

export function useSchools() {
  const [schools, setSchools] = useState<School[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await fetchRegisteredSchools()
        setSchools(data)
      } catch (err: any) {
        console.error('Error fetching schools:', err)
        setError('Failed to load registered schools')
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  return { schools, loading, error }
}

