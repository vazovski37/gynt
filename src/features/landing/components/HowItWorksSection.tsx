'use client'

import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { navRoutes } from '@/constants/navRoutes'
import { Lightbulb, FlaskConical, UsersRound } from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    icon: UsersRound,
    titleKey: 'howItWorks.step1.title',
    descKey: 'howItWorks.step1.desc',
  },
  {
    icon: FlaskConical,
    titleKey: 'howItWorks.step2.title',
    descKey: 'howItWorks.step2.desc',
  },
  {
    icon: Lightbulb,
    titleKey: 'howItWorks.step3.title',
    descKey: 'howItWorks.step3.desc',
  },
]

export function HowItWorksSection() {
  const { t } = useTranslation('landing')

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
          {t('howItWorks.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card
                key={index}
                className="transition-shadow duration-300 hover:shadow-xl h-full"
              >
                <CardHeader className="flex items-center justify-around">
                  <Icon className="h-10 w-10 text-primary" />
                  <CardTitle className="text-xl mt-4">
                    {t(step.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm text-center px-4 pb-6">
                  {t(step.descKey)}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Button asChild className="px-6 py-3 rounded-xl shadow-lg">
          <Link href={navRoutes.participate}>{t('hero.learnMore')}</Link>
        </Button>
      </div>
    </section>
  )
}
