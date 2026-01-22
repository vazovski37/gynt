'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Users, Target, FlaskConical, Lightbulb, GraduationCap, Microscope, MessageSquare, Atom, Award } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function AboutPage() {
  const { t } = useTranslation('about')

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 50,
        damping: 20
      }
    }
  }

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Abstract Scientific Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-7xl relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-20 sm:space-y-32"
        >
          {/* Hero Section */}
          <motion.div variants={fadeInUp} className="text-center space-y-6 max-w-4xl mx-auto pt-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-wide uppercase mb-4">
              <Atom className="w-4 h-4" />
              <span>International Young Naturalists' Tournament</span>
            </div>

            <h1 className="text-5xl sm:text-7xl encode-sans-expanded-black tracking-tight leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/50">
                {t('title')}
              </span>
            </h1>

            <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
          </motion.div>

          {/* Section 1: Who We Are & Mission */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Glass Panel: Who We Are */}
            <motion.div variants={fadeInUp} className="h-full">
              <GlassPanel className="h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] transform group-hover:scale-110 transition-transform duration-700">
                  <Users className="w-64 h-64" />
                </div>

                <div className="relative z-10 p-8 sm:p-12 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/10 mb-2">
                    <Users className="w-7 h-7 text-primary" />
                  </div>

                  <h2 className="text-3xl encode-sans-expanded-bold">{t('whoWeAre.title')}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <BoldText text={t('whoWeAre.content')} />
                  </p>
                </div>
              </GlassPanel>
            </motion.div>

            {/* Glass Panel: Mission */}
            <motion.div variants={fadeInUp} className="h-full">
              <GlassPanel className="h-full relative overflow-hidden group">
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-700" />

                <div className="relative z-10 p-8 sm:p-12 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center border border-blue-500/10 mb-2">
                    <Target className="w-7 h-7 text-blue-500" />
                  </div>

                  <h2 className="text-3xl encode-sans-expanded-bold">{t('ourMission.title')}</h2>

                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {t('ourMission.content')}
                    </p>

                    <div className="space-y-3 pt-2">
                      {(t('ourMission.list', { returnObjects: true }) as string[]).map((listItem, index) => (
                        <div key={index} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                          <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                          <span className="text-muted-foreground font-medium">{listItem}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          </div>

          {/* Section 2: What We Do */}
          <motion.div variants={fadeInUp}>
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-zinc-900 to-black overflow-hidden border border-white/10 shadow-2xl">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-primary/20 to-transparent blur-[100px] opacity-30" />

              <div className="relative z-10 grid lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="w-20 h-20 rounded-3xl bg-secondary/10 flex items-center justify-center mb-8 ring-1 ring-white/10">
                    <Microscope className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h2 className="text-4xl text-white encode-sans-expanded-bold mb-6">{t('whatWeDo.title')}</h2>
                  <div className="h-1 w-12 bg-primary rounded-full" />
                </div>

                <div className="lg:col-span-3 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                  <p className="text-xl sm:text-2xl text-zinc-300 leading-relaxed font-light">
                    <BoldText text={t('whatWeDo.content')} className="font-semibold text-white" />
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 3: Why IYNT (Roles) */}
          <motion.div variants={fadeInUp} className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-4xl encode-sans-expanded-bold">{t('whyIYNT.title')}</h2>
              <p className="text-lg text-muted-foreground">
                <BoldText text={t('whyIYNT.content')} />
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <RoleCard
                icon={GraduationCap}
                title="Reporter"
                description="Presents the solution to the problem and defends it in scientific discussion."
                color="text-emerald-500"
                bg="bg-emerald-500/10"
                border="border-emerald-500/20"
              />
              <RoleCard
                icon={MessageSquare}
                title="Opponent"
                description="Criticizes the Reporter, challenging the presentation and pointing out inaccuracies."
                color="text-amber-500"
                bg="bg-amber-500/10"
                border="border-amber-500/20"
              />
              <RoleCard
                icon={Award}
                title="Reviewer"
                description="Evaluates the performances of both Reporter and Opponent, summarizing the debate."
                color="text-purple-500"
                bg="bg-purple-500/10"
                border="border-purple-500/20"
              />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}

// Helper Components

function GlassPanel({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn(
      "rounded-[2rem] border border-border/40 bg-background/60 backdrop-blur-xl shadow-xl",
      className
    )}>
      {children}
    </div>
  )
}

function BoldText({ text, className }: { text: string, className?: string }) {
  if (!text) return null;
  return (
    <>
      {text.split('**').map((part, i) =>
        i % 2 === 1 ? <span key={i} className={cn("text-foreground font-semibold", className)}>{part}</span> : part
      )}
    </>
  )
}

function RoleCard({ icon: Icon, title, description, color, bg, border }: any) {
  return (
    <div className={cn("group p-8 rounded-3xl border bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 hover:-translate-y-1", border)}>
      <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", bg)}>
        <Icon className={cn("w-6 h-6", color)} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {description}
      </p>
    </div>
  )
}
