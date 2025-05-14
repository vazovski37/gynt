'use client'

import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { navRoutes } from '@/constants/navRoutes'

export function AboutPreview() {
  const { t } = useTranslation('landing')

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          {t('about.title')}
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-6">
          {t('about.text')}
        </p>
        <div className="flex justify-center">
          <Button asChild className="rounded-xl shadow-lg px-6 py-3 text-sm sm:text-base">
            <Link href={navRoutes.about}>{t('hero.learnMore')}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
