import { supabase } from '@/lib/supabaseClient'
import { Tournament, TournamentFile, TournamentProblem, TournamentYear } from '../types/tournament' // Ensure TournamentYear is also imported

/**
 * Fetches all tournaments for a given language, ordered by year descending.
 * @param language The desired language ('en', 'ka', etc.)
 */
export async function fetchTournaments(language: string): Promise<Tournament[]> {
  const { data, error } = await supabase
    .from('tournaments')
    .select(`
      *,
      tournament_years (year)
    `)
    .eq('language', language) // Filter by language
    .order('year', { foreignTable: 'tournament_years', ascending: false })

  if (error) {
    console.error(`[fetchTournaments] Error for language '${language}':`, error.message)
    return []
  }

  const tournamentsWithYear = data.map(tournament => ({
    ...tournament,
    year: tournament.tournament_years?.year
  })) as Tournament[];

  return tournamentsWithYear;
}

/**
 * Fetches a single tournament for a specific year and language.
 * @param year The desired tournament year.
 * @param language The desired language ('en', 'ka', etc.)
 */
export async function fetchTournamentByYear(year: number, language: string): Promise<Tournament | null> {
  // First, find the tournament_year_id for the given year
  const { data: tournamentYearData, error: yearError } = await supabase
    .from('tournament_years')
    .select('id')
    .eq('year', year)
    .single()

  if (yearError) {
    console.error(`[fetchTournamentByYear] Could not find tournament year ${year} for language '${language}':`, yearError.message)
    return null
  }

  if (!tournamentYearData) {
    console.warn(`[fetchTournamentByYear] No tournament year found for ${year}.`)
    return null
  }

  const tournamentYearId = tournamentYearData.id;

  // Then, fetch the tournament using the found tournament_year_id and language
  const { data: tournamentData, error: tournamentError } = await supabase
    .from('tournaments')
    .select(`
      *,
      tournament_years (year)
    `)
    .eq('tournament_year_id', tournamentYearId)
    .eq('language', language) // Filter by language
    .single()

  if (tournamentError) {
    console.error(`[fetchTournamentByYear] Error fetching tournament for year ${year} and language '${language}':`, tournamentError.message)
    return null
  }

  if (!tournamentData) {
      console.warn(`[fetchTournamentByYear] No tournament found for year_id: ${tournamentYearId} and language: ${language}.`)
      return null;
  }

  const tournamentWithYear = {
    ...tournamentData,
    year: tournamentData.tournament_years?.year
  } as Tournament;

  return tournamentWithYear;
}

/**
 * Fetches problems for a specific tournament and language.
 * Assumes 'problems' table also has a 'language' column.
 * @param tournamentId The ID of the tournament.
 * @param language The desired language ('en', 'ka', etc.)
 */
export async function fetchTournamentProblems(tournamentId: string, language: string): Promise<TournamentProblem[]> {
  const { data, error } = await supabase
    .from('problems')
    .select('*')
    .eq('tournament_id', tournamentId)
    .eq('language', language) // Filter by language
    .order('code', { ascending: true })

  if (error) {
    console.error(`[fetchTournamentProblems] Error for tournament ID '${tournamentId}' and language '${language}':`, error.message)
    return []
  }

  return data as TournamentProblem[]
}

/**
 * Fetches files for a specific tournament and language.
 * Assumes 'tournament_files' table also has a 'language' column.
 * @param tournamentId The ID of the tournament.
 * @param language The desired language ('en', 'ka', etc.)
 */
export async function fetchTournamentFiles(tournamentId: string, language: string): Promise<TournamentFile[]> {
  const { data, error } = await supabase
    .from('tournament_files')
    .select('*')
    .eq('tournament_id', tournamentId)
    .eq('language', language) // Filter by language
    .order('label', { ascending: true })

  if (error) {
    console.error(`[fetchTournamentFiles] Error for tournament ID '${tournamentId}' and language '${language}':`, error.message)
    return []
  }

  return data as TournamentFile[]
}