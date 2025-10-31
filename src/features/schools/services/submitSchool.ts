import { supabase } from '@/lib/supabaseClient'
import { SchoolRegistrationPayload } from '../types/school'

export async function submitSchool(data: SchoolRegistrationPayload) {
  const { error } = await supabase
    .from('registered_schools')
    .insert([data])

  if (error) {
    throw new Error(error.message)
  }
}

