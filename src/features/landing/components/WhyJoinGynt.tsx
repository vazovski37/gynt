'use client'

import { useTranslation } from 'react-i18next'
import {
  Microscope,
  UsersRound,
  MessageSquare,
  Globe2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { navRoutes } from '@/constants/navRoutes'
import Link from 'next/link'

export function WhyJoinGynt() {
  const { t } = useTranslation('landing')

  const items = [
    {
      icon: Microscope,
      titleKey: 'whyJoin.research',
      descKey: 'whyJoin.researchDesc',
    },
    {
      icon: MessageSquare,
      titleKey: 'whyJoin.speaking',
      descKey: 'whyJoin.speakingDesc',
    },
    {
      icon: Globe2,
      titleKey: 'whyJoin.recognition',
      descKey: 'whyJoin.recognitionDesc',
    },
    {
      icon: UsersRound,
      titleKey: 'whyJoin.teamwork',
      descKey: 'whyJoin.teamworkDesc',
    },
  ]

  return (
    <section className="py-20 text-center ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary mb-12">
          {t('whyJoin.title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {items.map((item, idx) => {
            const Icon = item.icon
            return (
              <Card
                key={idx}
                className="h-full bg-background transition-shadow hover:shadow-2xl"
              >
                <CardHeader className="flex flex-col items-center text-center">
                  <Icon className="w-10 h-10 text-primary mb-3" />
                  <CardTitle className="text-lg font-semibold">
                    {t(item.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground px-4 pb-6">
                  {t(item.descKey)}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Button asChild className="px-6 py-3 rounded-xl shadow-lg">
          <Link href={navRoutes.participate}>{t('whyJoin.cta')}</Link>
        </Button>
      </div>
    </section>
  )
}
