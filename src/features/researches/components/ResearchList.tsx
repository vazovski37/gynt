'use client'

import { Research } from '../types/research'
import ResearchCard from './ResearchCard'
import { useTranslation } from 'react-i18next'

type Props = {
  researches: Research[]
}

export default function ResearchList({ researches }: Props) {
  const { t } = useTranslation('common')

  if (!researches.length) {
    return (
      <p className="text-muted-foreground text-sm text-center py-12">
        {t('researches.noResearchesAvailable')}
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {researches.map((research) => (
        <ResearchCard key={research.id} research={research} />
      ))}
    </div>
  )
}

