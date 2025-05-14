'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Construction } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function ComingSoon() {
  const router = useRouter()
  const { t } = useTranslation('common') // Assumes translations are in common.json

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <Construction className="w-12 h-12 text-primary mb-4" />
      <h1 className="text-3xl font-bold mb-2">{t('comingSoon.title')}</h1>
      <p className="text-muted-foreground max-w-md mb-6">
        {t('comingSoon.subtitle')}
      </p>
      <Button onClick={() => router.push('/')}>{t('comingSoon.home')}</Button>
    </div>
  )
}
