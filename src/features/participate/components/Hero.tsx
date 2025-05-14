'use client'

import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { navRoutes } from '@/constants/navRoutes'

export default function Hero() {
  const { t } = useTranslation('participate')
  const router = useRouter()

  return (
    <section className="py-16 text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">{t('hero.title')}</h1>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">{t('hero.subtitle')}</p>
      <Button size="lg" onClick={() => router.push(navRoutes.teamRegistration)}>
        {t('hero.button')}
      </Button>
    </section>
  )
}
