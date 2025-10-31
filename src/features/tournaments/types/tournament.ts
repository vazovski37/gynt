// types/tournament.ts
export interface Tournament {
  id: string;
  edition: string;
  city: string;
  location: string;
  start_date: string; // or Date
  end_date: string;   // or Date
  teams_count: number;
  jury_info: string;
  format: string;
  winner: any; // jsonb
  summary: string;
  created_at: string;
  host: string;
  language: string; // Add this
  tournament_year_id: string;
  year?: number; // Added in previous iteration for convenience
}

export interface TournamentYear {
  id: string;
  year: number;
  is_open: boolean;
}

export interface TournamentProblem {
  id: string;
  tournament_id: string;
  code: string;
  title: string;
  description: string;
  language: string; // Assuming problems also have a language
  // ... other fields
}

export interface TournamentFile {
  id: string;
  tournament_id: string;
  label: string;
  url: string;
  file_type: string;
  language: string; // Assuming files also have a language
  // ... other fields
}