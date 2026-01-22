import { Research, ResearchFile } from '../types/research'

/**
 * Fetches all researches for a given language, ordered by created_at descending.
 * @param language The desired language ('en', 'ge', etc.)
 */
export async function fetchResearches(language: string): Promise<Research[]> {
  return []
}

/**
 * Fetches a single research by ID and language.
 * @param id The research ID.
 * @param language The desired language ('en', 'ge', etc.)
 */
export async function fetchResearchById(id: string, language: string): Promise<Research | null> {
  return null
}

/**
 * Fetches files for a specific research.
 * @param researchId The ID of the research.
 * @param language The desired language ('en', 'ge', etc.)
 */
export async function fetchResearchFiles(researchId: string, language: string): Promise<ResearchFile[]> {
  return []
}
