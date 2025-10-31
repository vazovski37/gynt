import { useState } from 'react'
import { SchoolRegistrationPayload } from '../types/school'
import { submitSchool } from '../services/submitSchool'

export function useSchoolRegistration() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const registerSchool = async (data: SchoolRegistrationPayload) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      await submitSchool(data)
      setSuccess(true)
      return true
    } catch (err: any) {
      setError(err.message || 'Failed to register school')
      return false
    } finally {
      setLoading(false)
    }
  }

  return { registerSchool, loading, success, error }
}

