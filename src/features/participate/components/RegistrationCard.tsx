'use client'

import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { navRoutes } from '@/constants/navRoutes'
import Link from 'next/link'

export default function RegistrationCard() {
  const { t } = useTranslation('participate')

  return (
    <section className="py-16 text-center">
      <div className="max-w-xl mx-auto bg-muted/30 p-8 rounded-lg">
        <h3 className="text-xl font-semibold text-primary mb-3">{t('register.title')}</h3>
        <p className="text-sm text-muted-foreground mb-4">{t('register.desc')}</p>
        <Button asChild>
          <Link href={navRoutes.schoolRegistration}>{t('register.button')}</Link>
        </Button>
      </div>
    </section>
  )
}
