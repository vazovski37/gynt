'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useLanguage } from '@/lib/language-context'
import { useTranslation } from 'react-i18next'
import { fetchResearchById, fetchResearchFiles } from '@/features/researches/services/fetchResearches'
import { Research, ResearchFile } from '@/features/researches/types/research'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Download, FileText, User, Calendar, Tag } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ResearchDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { language } = useLanguage()
  const { t } = useTranslation('common')
  const [research, setResearch] = useState<Research | null>(null)
  const [files, setFiles] = useState<ResearchFile[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadResearch = async () => {
      if (!params.id || typeof params.id !== 'string') {
        setError('Invalid research ID')
        setLoading(false)
        return
      }

      setLoading(true)
      setError(null)

      try {
        const [researchData, filesData] = await Promise.all([
          fetchResearchById(params.id, language),
          fetchResearchFiles(params.id, language),
        ])

        if (!researchData) {
          setError('Research not found')
          return
        }

        setResearch(researchData)
        setFiles(filesData)
      } catch (err: any) {
        console.error('Error loading research:', err)
        setError('Failed to load research')
      } finally {
        setLoading(false)
      }
    }

    loadResearch()
  }, [params.id, language])

  if (loading) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-16 pt-24">
        <p className="text-sm text-muted-foreground text-center py-12">
          {t('researches.loading', { defaultValue: 'Loading research...' })}
        </p>
      </section>
    )
  }

  if (error || !research) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-16 pt-24">
        <div className="text-center py-12">
          <p className="text-sm text-red-500 mb-4">
            {error || t('researches.notFound', { defaultValue: 'Research not found' })}
          </p>
          <Button variant="outline" onClick={() => router.push('/researches')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Researches
          </Button>
        </div>
      </section>
    )
  }

  const { title, authors, field, tags, abstract, content, methodology, results, conclusions, year, created_at } = research

  return (
    <section className="max-w-4xl mx-auto px-6 py-16 pt-24">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <Button
          variant="ghost"
          onClick={() => router.push('/researches')}
          className="text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('researches.back', { defaultValue: 'Back to Researches' })}
        </Button>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
            {field}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{authors}</span>
          </div>
          {year && (
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{year}</span>
            </div>
          )}
        </div>
      </motion.div>

      <Separator className="mb-8" />

      {/* Tags */}
      {Array.isArray(tags) && tags.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">
              {t('researches.tags', { defaultValue: 'Tags' })}:
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="inline-flex items-center px-3 py-1 rounded-md text-xs text-muted-foreground bg-muted/50 border border-border/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      )}

      {/* Content Sections */}
      <div className="space-y-8">
        {abstract && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {t('researches.abstract', { defaultValue: 'Abstract' })}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{abstract}</p>
          </motion.div>
        )}

        {content && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {t('researches.content', { defaultValue: 'Content' })}
            </h2>
            <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {content}
            </div>
          </motion.div>
        )}

        {methodology && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {t('researches.methodology', { defaultValue: 'Methodology' })}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{methodology}</p>
          </motion.div>
        )}

        {results && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {t('researches.results', { defaultValue: 'Results' })}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{results}</p>
          </motion.div>
        )}

        {conclusions && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {t('researches.conclusions', { defaultValue: 'Conclusions' })}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{conclusions}</p>
          </motion.div>
        )}
      </div>

      {/* Files */}
      {files.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-border/30"
        >
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {t('researches.files', { defaultValue: 'Related Files' })}
          </h2>
          <div className="space-y-2">
            {files.map((file) => (
              <Link
                key={file.id}
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30 hover:border-border/50 hover:bg-card/50 transition-all duration-300 group"
              >
                <FileText className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{file.label}</p>
                  <p className="text-xs text-muted-foreground">{file.file_type}</p>
                </div>
                <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  )
}

