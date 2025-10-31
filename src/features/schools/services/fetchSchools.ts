import { supabase } from '@/lib/supabaseClient'
import { School } from '../types/school'

export async function fetchRegisteredSchools(): Promise<School[]> {
  const { data, error } = await supabase
    .from('registered_schools')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('[fetchRegisteredSchools] Error:', error.message)
    return []
  }

  return data as School[]
}

