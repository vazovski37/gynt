import { supabase } from '@/lib/supabaseClient'
import { Research, ResearchFile } from '../types/research'

/**
 * Fetches all researches for a given language, ordered by created_at descending.
 * @param language The desired language ('en', 'ge', etc.)
 */
export async function fetchResearches(language: string): Promise<Research[]> {
  const { data, error } = await supabase
    .from('researches')
    .select('*')
    .eq('language', language)
    .order('created_at', { ascending: false })

  if (error) {
    console.error(`[fetchResearches] Error for language '${language}':`, error.message)
    return []
  }

  return data as Research[]
}

/**
 * Fetches a single research by ID and language.
 * @param id The research ID.
 * @param language The desired language ('en', 'ge', etc.)
 */
export async function fetchResearchById(id: string, language: string): Promise<Research | null> {
  const { data, error } = await supabase
    .from('researches')
    .select('*')
    .eq('id', id)
    .eq('language', language)
    .single()

  if (error) {
    console.error(`[fetchResearchById] Error for ID '${id}' and language '${language}':`, error.message)
    return null
  }

  return data as Research
}

/**
 * Fetches files for a specific research.
 * @param researchId The ID of the research.
 * @param language The desired language ('en', 'ge', etc.)
 */
export async function fetchResearchFiles(researchId: string, language: string): Promise<ResearchFile[]> {
  const { data, error } = await supabase
    .from('research_files')
    .select('*')
    .eq('research_id', researchId)
    .eq('language', language)
    .order('label', { ascending: true })

  if (error) {
    console.error(`[fetchResearchFiles] Error for research ID '${researchId}' and language '${language}':`, error.message)
    return []
  }

  return data as ResearchFile[]
}

