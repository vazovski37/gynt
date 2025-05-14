export type Tournament = {
  id: string
  year: number
  edition: string
  city: string
  location: string
  start_date: string // ISO format
  end_date: string
  host?: string
  winner?: string
  summary?: string
  created_at: string
}

export type TournamentFile = {
  id: string
  tournament_id: string
  label: string
  file_url: string
}

export type TournamentProblem = {
  id: string
  tournament_id: string
  code: string // e.g. P1
  title: string
}
