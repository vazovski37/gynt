'use client'

import { useTranslation } from 'react-i18next'
import {
  Microscope,
  UsersRound,
  MessageSquare,
  Trophy,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { navRoutes } from '@/constants/navRoutes'
import { useRouter } from 'next/navigation'

export function WhyJoinGynt() {
  const { t } = useTranslation('landing')
  const router = useRouter()

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
      icon: Trophy,
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
    <section className="py-24 text-center relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {t('whyJoin.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
          {t('whyJoin.subtitle')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {items.map((item, idx) => {
            const Icon = item.icon
            return (
              <Card
                key={idx}
                className="h-full bg-background border-2 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <CardHeader className="flex flex-col items-center text-center pb-4">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {t(item.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base text-muted-foreground px-6 pb-6">
                  {t(item.descKey)}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Button
          size="lg"
          className="px-8 py-6 text-lg shadow-xl hover:shadow-2xl group"
          onClick={() => router.push(navRoutes.teamRegistration)}
        >
          {t('whyJoin.cta')}
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  )
}
