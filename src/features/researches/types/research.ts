// types/research.ts
export interface Research {
  id: string;
  title: string;
  description?: string;
  authors: string; // Could be a string or array - using string for simplicity
  field: string; // Main field/category
  tags?: string[] | null; // Array of tags (optional)
  year?: number; // Year the research was completed
  created_at: string;
  updated_at?: string;
  language: string; // 'en' or 'ge'
  // Optional fields for detail page
  content?: string; // Full research content
  abstract?: string; // Research abstract
  methodology?: string; // Research methodology
  results?: string; // Research results
  conclusions?: string; // Conclusions
  files?: ResearchFile[]; // Related files
}

export interface ResearchFile {
  id: string;
  research_id: string;
  label: string;
  url: string;
  file_type: string;
  language: string;
}

