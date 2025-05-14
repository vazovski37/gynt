import { useState } from 'react'
import { submitTeam } from '../services/submitTeam'
import { TeamRegistrationPayload } from '../types/team'

export function useTeamRegistration() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const registerTeam = async (payload: TeamRegistrationPayload) => {
    setLoading(true)
    setError(null)
    try {
      await submitTeam(payload)
      setSuccess(true)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { registerTeam, loading, error, success }
}
