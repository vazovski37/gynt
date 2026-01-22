import { Tournament, TournamentFile, TournamentProblem, TournamentYear } from '../types/tournament'

/**
 * Fetches all tournaments for a given language, ordered by year descending.
 * @param language The desired language ('en', 'ka', etc.)
 */
export async function fetchTournaments(language: string): Promise<Tournament[]> {
  return []
}

/**
 * Fetches a single tournament for a specific year and language.
 * @param year The desired tournament year.
 * @param language The desired language ('en', 'ka', etc.)
 */
export async function fetchTournamentByYear(year: number, language: string): Promise<Tournament | null> {
  return null
}

/**
 * Fetches problems for a specific tournament and language.
 * Assumes 'problems' table also has a 'language' column.
 * @param tournamentId The ID of the tournament.
 * @param language The desired language ('en', 'ka', etc.)
 */
export async function fetchTournamentProblems(tournamentId: string, language: string): Promise<TournamentProblem[]> {
  return []
}

/**
 * Fetches files for a specific tournament and language.
 * Assumes 'tournament_files' table also has a 'language' column.
 * @param tournamentId The ID of the tournament.
 * @param language The desired language ('en', 'ka', etc.)
 */
export async function fetchTournamentFiles(tournamentId: string, language: string): Promise<TournamentFile[]> {
  return []
}