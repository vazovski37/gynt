'use client'

import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { navRoutes } from '@/constants/navRoutes'
import { motion } from 'framer-motion'
import { GridBackground } from '@/components/landing/GridBackground'
import { HeroGlow } from '@/components/landing/HeroGlow'
import { Rocket, Users, Trophy } from 'lucide-react'

export default function Hero() {
  const { t } = useTranslation('participate')
  const router = useRouter()

  return (
    <section className="relative py-32 pt-32 pb-20 flex items-center justify-center text-center overflow-hidden">
      <GridBackground />
      <HeroGlow />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto px-6 z-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-md text-muted-foreground mb-4"
        >
          <span>GYNT 2025</span>
          <span className="inline-flex items-center gap-1.5 bg-primary/10 px-2.5 py-1 rounded-full text-xs font-medium text-primary border border-primary/20">
            <Rocket size={14} className="text-primary" />
            {t('hero.badge', { defaultValue: 'Registration Open' })}
          </span>
        </motion.p>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
          {t('hero.title')}
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            onClick={() => window.open('https://forms.gle/qXrzRmsfKZ4WbgLC8', '_blank')}
            className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all group"
          >
            {t('hero.button')}
            <Rocket className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => router.push('#registered-schools')}
            className="text-lg px-8 py-6 border-2 bg-white/5 backdrop-blur-sm"
          >
            {t('hero.viewSchools', { defaultValue: 'View Participating Schools' })}
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
