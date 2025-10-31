'use client'

import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { navRoutes } from '@/constants/navRoutes'
import { motion } from 'framer-motion'
import { GridBackground } from '@/components/landing/GridBackground'
import { HeroGlow } from '@/components/landing/HeroGlow'
import { AnimatedHeroBackground } from '@/components/landing/AnimatedHeroBackground'
import { Sparkles, FlaskConical, BrainCircuit, Trophy, Microscope, Zap, UsersRound, Rocket } from 'lucide-react'

// Animation variants
const containerVariants = { 
  hidden: { opacity: 0 }, 
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.5 } } 
}
const itemVariants = { 
  hidden: { y: 20, opacity: 0 }, 
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } } 
}
const headlineVariants = { 
  visible: { transition: { staggerChildren: 0.05 } } 
}
const wordVariants = { 
  hidden: { y: 20, opacity: 0 }, 
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } 
}

export function HeroSection() {
  const { t } = useTranslation('landing')
  const router = useRouter()

  // Split title into words for animation
  const headlineLine1 = t('hero.titleLine1', { defaultValue: 'Compete. Research. Excel.' }).split(' ')
  const headlineLine2 = t('hero.titleLine2', { defaultValue: 'The Ultimate Science Tournament' }).split(' ')

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden py-20 pt-24">
      <GridBackground />
      <HeroGlow />
      <AnimatedHeroBackground />
      
      <motion.div
        className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="flex items-center justify-center gap-2 text-md text-muted-foreground">
          <span>{t('hero.prefix', { defaultValue: 'GYNT, your' })}</span>
          <span className="inline-flex items-center gap-1.5 bg-primary/10 px-2.5 py-1 rounded-full text-xs font-medium text-primary border border-primary/20">
            <Rocket size={14} className="text-primary" />
            {t('hero.badge', { defaultValue: 'success' })}
          </span>
        </motion.p>
        
        <motion.div variants={itemVariants} className="mt-4">
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground" 
            variants={headlineVariants}
          >
            {headlineLine1.map((word, index) => (
              <motion.span 
                key={index} 
                variants={wordVariants} 
                className="inline-block mr-3 md:mr-4"
              >
                {word}
              </motion.span>
            ))}
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-muted-foreground">
              {headlineLine2.map((word, index) => (
                <motion.span 
                  key={index} 
                  variants={wordVariants} 
                  className="inline-block mr-2.5 md:mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>
        </motion.div>

        {/* Feature Snippets */}
        <motion.div 
          variants={itemVariants} 
          className="mt-8 flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
            <Microscope size={16} className="text-primary/70" /> 
            {t('hero.feature1', { defaultValue: 'Real Research' })}
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
            <BrainCircuit size={16} className="text-primary/70" /> 
            {t('hero.feature2', { defaultValue: 'Scientific Debate' })}
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
            <Trophy size={16} className="text-primary/70" /> 
            {t('hero.feature3', { defaultValue: 'National Recognition' })}
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all group"
            onClick={() => router.push(navRoutes.teamRegistration)}
          >
            {t('hero.register')}
            <Zap className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 border-2 bg-white/5 backdrop-blur-sm"
            onClick={() => router.push(navRoutes.participate)}
          >
            {t('hero.howItWorks')}
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div 
          variants={itemVariants} 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: t('hero.stat1.label'), value: t('hero.stat1.value'), icon: UsersRound },
            { label: t('hero.stat2.label'), value: t('hero.stat2.value'), icon: Trophy },
            { label: t('hero.stat3.label'), value: t('hero.stat3.value'), icon: FlaskConical },
            { label: t('hero.stat4.label'), value: t('hero.stat4.value'), icon: Rocket },
          ].map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div 
                key={idx} 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Icon className="w-5 h-5 text-primary" />
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
