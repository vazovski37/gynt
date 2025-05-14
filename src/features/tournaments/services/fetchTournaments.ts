import { supabase } from '@/lib/supabaseClient'
import { Tournament, TournamentFile, TournamentProblem } from '../types/tournament'

export async function fetchTournaments(): Promise<Tournament[]> {
  const { data, error } = await supabase
    .from('tournaments')
    .select('*')
    .order('year', { ascending: false })

  if (error) {
    console.error('[fetchTournaments] Error:', error.message)
    return []
  }

  return data as Tournament[]
}

export async function fetchTournamentByYear(year: number): Promise<Tournament | null> {
  const { data, error } = await supabase
    .from('tournaments')
    .select('*')
    .eq('year', year)
    .single()

  if (error) {
    console.error(`[fetchTournamentByYear] Year ${year}:`, error.message)
    return null
  }

  return data as Tournament
}

export async function fetchTournamentProblems(tournamentId: string): Promise<TournamentProblem[]> {
  const { data, error } = await supabase
    .from('problems')
    .select('*')
    .eq('tournament_id', tournamentId)
    .order('code', { ascending: true })

  if (error) {
    console.error('[fetchTournamentProblems] Error:', error.message)
    return []
  }

  return data as TournamentProblem[]
}

export async function fetchTournamentFiles(tournamentId: string): Promise<TournamentFile[]> {
  const { data, error } = await supabase
    .from('tournament_files')
    .select('*')
    .eq('tournament_id', tournamentId)
    .order('label', { ascending: true })

  if (error) {
    console.error('[fetchTournamentFiles] Error:', error.message)
    return []
  }

  return data as TournamentFile[]
}
