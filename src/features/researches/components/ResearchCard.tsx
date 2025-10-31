'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, User, Calendar, Beaker } from 'lucide-react'
import { Research } from '../types/research'
import { cn } from '@/lib/utils'

type Props = {
  research: Research
}

export default function ResearchCard({ research }: Props) {
  const { id, title, authors, tags, field, year } = research
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Ensure tags is always an array
  const tagsArray = Array.isArray(tags) ? tags : []

  const cardContent = (
    <Link href={`/researches/${id}`}>
      <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-md border border-border/40 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer group relative overflow-hidden">
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <div className="relative z-10">
          {/* Field Badge with icon */}
          <div className="mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-primary/15 to-primary/5 text-primary border border-primary/20 group-hover:border-primary/40 transition-colors">
              <Beaker className="w-3.5 h-3.5" />
              {field || 'Research'}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
            {title}
          </h3>

          {/* Authors */}
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border/20">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <User className="w-4 h-4 text-primary flex-shrink-0" />
            </div>
            <span className="text-sm font-medium text-foreground line-clamp-1 flex-1">
              {authors || 'Unknown'}
            </span>
          </div>

          {/* Tags */}
          {tagsArray.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tagsArray.slice(0, 3).map((tag, index) => (
                <span
                  key={`${tag}-${index}`}
                  className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium text-muted-foreground bg-muted/30 border border-border/20 group-hover:border-primary/20 group-hover:bg-primary/5 transition-all"
                >
                  {tag}
                </span>
              ))}
              {tagsArray.length > 3 && (
                <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium text-primary bg-primary/10 border border-primary/20">
                  +{tagsArray.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Footer with year and arrow */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/20">
            {year && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                <span className="font-medium">{year}</span>
              </div>
            )}
            <div className="flex items-center gap-2 ml-auto">
              <span className="text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform inline-block">
                Read More
              </span>
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )

  if (!isMounted) {
    return <div className="group">{cardContent}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group"
    >
      {cardContent}
    </motion.div>
  )
}

