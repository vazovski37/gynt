'use client'

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

export function TimelineSection() {
  const { t } = useTranslation('landing')

  return (
    <section className="py-24 bg-gradient-to-b from-background via-background to-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('timeline.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your journey from registration to victory
          </p>
        </motion.div>

        {/* Timeline Cards - Horizontal scroll on mobile, grid on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          {/* Connecting Line - Desktop only */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-border rounded-full" />

          {/* Cards Container */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-4 items-stretch">
            {events.map((event, idx) => {
              const Icon = event.icon
              const isLast = idx === events.length - 1

              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className="flex-1 group"
                >
                  <div className="relative h-full">
                    {/* Card */}
                    <div className="relative h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 overflow-hidden">

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Step Number & Icon */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-primary shadow-lg">
                            <Icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <span className="text-5xl font-bold text-muted-foreground/20 group-hover:text-primary/30 transition-colors">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {t(event.titleKey)}
                        </h3>

                        {/* Date Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border">
                          <CalendarDays className="w-3.5 h-3.5 text-muted-foreground" />
                          <span className="text-sm font-medium text-muted-foreground">
                            {t(event.dateKey)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Connector Arrow - Desktop only, not for last item */}
                    {!isLast && (
                      <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-primary/30">
                        <svg className="w-4 h-4 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Bottom CTA or decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Ready to begin your journey?
            <span className="ml-2 text-primary font-semibold cursor-pointer hover:underline">
              Register your team today →
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
