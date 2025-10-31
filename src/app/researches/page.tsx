'use client'

import { useEffect, useState, useMemo } from 'react'
import { useResearches, ResearchList } from '@/features/researches'
import { useLanguage } from '@/lib/language-context'
import { useTranslation } from 'react-i18next'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { Research } from '@/features/researches/types/research'

export default function ResearchesPage() {
  const { language } = useLanguage()
  const { t } = useTranslation('common')
  const { researches, loading, error } = useResearches(language)
  const [isMounted, setIsMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Filter researches based on search query
  const filteredResearches = useMemo(() => {
    if (!searchQuery.trim()) return researches

    const query = searchQuery.toLowerCase().trim()
    
    return researches.filter((research: Research) => {
      // Search in title
      const matchesTitle = research.title?.toLowerCase().includes(query)
      
      // Search in authors
      const matchesAuthors = research.authors?.toLowerCase().includes(query)
      
      // Search in field
      const matchesField = research.field?.toLowerCase().includes(query)
      
      // Search in tags
      const tagsArray = Array.isArray(research.tags) ? research.tags : []
      const matchesTags = tagsArray.some(tag => tag.toLowerCase().includes(query))
      
      return matchesTitle || matchesAuthors || matchesField || matchesTags
    })
  }, [researches, searchQuery])

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 pt-24">
      {isMounted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('researches.title', { defaultValue: 'Research Projects' })}
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl">
            {t('researches.subtitle', { 
              defaultValue: 'Explore groundbreaking research conducted by GYNT participants. Discover innovative solutions and scientific discoveries.' 
            })}
          </p>
        </motion.div>
      ) : (
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('researches.title', { defaultValue: 'Research Projects' })}
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl">
            {t('researches.subtitle', { 
              defaultValue: 'Explore groundbreaking research conducted by GYNT participants. Discover innovative solutions and scientific discoveries.' 
            })}
          </p>
        </div>
      )}

      <Separator className="mb-8" />

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8"
      >
        <div className="relative max-w-2xl">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <Search className="w-5 h-5 text-muted-foreground" />
          </div>
          <Input
            type="text"
            placeholder={t('researches.searchPlaceholder', { defaultValue: 'Search by title, author, field, or tags...' })}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-12 h-12 rounded-xl bg-card/40 backdrop-blur-sm border-border/50 focus-visible:border-primary/50 text-base"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-muted/50 rounded-full p-1 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
        </div>
        
        {/* Results count */}
        {!loading && !error && (
          <p className="text-sm text-muted-foreground mt-3 ml-1">
            {filteredResearches.length === researches.length ? (
              <span>{researches.length} {t('researches.totalResults', { defaultValue: 'research projects' })}</span>
            ) : (
              <span>
                {filteredResearches.length} {t('researches.filteredResults', { defaultValue: 'results' })} {t('researches.of', { defaultValue: 'of' })} {researches.length}
              </span>
            )}
          </p>
        )}
      </motion.div>

      {loading && (
        <p className="text-sm text-muted-foreground text-center py-12">
          {t('researches.loading', { defaultValue: 'Loading researches...' })}
        </p>
      )}
      {error && (
        <p className="text-sm text-red-500 text-center py-12">
          {t('researches.error', { defaultValue: 'Failed to load researches.' })}
        </p>
      )}

      {!loading && !error && (
        <>
          {filteredResearches.length === 0 ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/30 mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t('researches.noResults', { defaultValue: 'No results found' })}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                {t('researches.noResultsDesc', { 
                  defaultValue: 'Try adjusting your search terms or filters to find what you\'re looking for.' 
                })}
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-sm text-primary hover:underline font-medium"
              >
                {t('researches.clearSearch', { defaultValue: 'Clear search' })}
              </button>
            </div>
          ) : (
            <ResearchList researches={filteredResearches} />
          )}
        </>
      )}
    </section>
  )
}

