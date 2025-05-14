'use client'

import { useTranslation } from 'react-i18next'
import {
  CalendarDays,
  FileText,
  FlaskConical,
  Trophy,
  Megaphone,
} from 'lucide-react'

const events = [
  {
    icon: Megaphone,
    titleKey: 'timeline.registration',
    dateKey: 'timeline.dates.registration',
  },
  {
    icon: FileText,
    titleKey: 'timeline.problems',
    dateKey: 'timeline.dates.problems',
  },
  {
    icon: FlaskConical,
    titleKey: 'timeline.research',
    dateKey: 'timeline.dates.research',
  },
  {
    icon: CalendarDays,
    titleKey: 'timeline.tournament',
    dateKey: 'timeline.dates.tournament',
  },
  {
    icon: Trophy,
    titleKey: 'timeline.announcement',
    dateKey: 'timeline.dates.announcement',
  },
]

export function TimelineSection() {
  const { t } = useTranslation('landing')

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          {t('timeline.title')}
        </h2>

        <ol className="relative border-l border-border pl-6 space-y-10">
          {events.map((event, idx) => {
            const Icon = event.icon
            return (
              <li key={idx} className="relative cursor-pointer">
                {/* Dot Icon */}
                <span className="absolute -left-[13px] top-1 w-6 h-6 text-primary text-white rounded-full flex items-center justify-center shadow-md">
                  <Icon className="w-4 h-4" />
                </span>

                {/* Content */}
                <div className="ml-2">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {t(event.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(event.dateKey)}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
