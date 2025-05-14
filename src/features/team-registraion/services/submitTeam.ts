import { supabase } from '@/lib/supabaseClient'
import { TeamRegistrationPayload } from '../types/team'

export async function submitTeam(data: TeamRegistrationPayload) {
  const { error } = await supabase
    .from('gynt_teams')
    .insert([{ ...data, team_members: data.team_members.map(m => m.name) }])

  if (error) {
    throw new Error(error.message)
  }
}
