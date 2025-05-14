'use client'

import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { navRoutes } from '@/constants/navRoutes'

export function HeroSection() {
  const { t } = useTranslation('landing')
  const router = useRouter()

  return (
    <section className="relative w-full bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* GYNT decorative (mobile first on top) */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="flex space-x-[-14px] sm:space-x-[-20px] md:space-x-[-30px] lg:space-x-[-40px]">
            {['G', 'Y', 'N', 'T'].map((letter, index) => (
              <span
                key={index}
                className="text-[80px] sm:text-[100px] md:text-[150px] lg:text-[250px] text-primary font-extrabold leading-none tracking-tight mix-blend-lighten"
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Headline and CTA (mobile second, desktop left) */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight tracking-tight mb-4">
            🧪 {t('hero.title')}
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Button
              size="lg"
              className="shadow-lg px-6 py-3"
              onClick={() => router.push(navRoutes.teamRegistration)}
            >
              {t('hero.register')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="shadow-lg px-6 py-3 border-primary text-primary"
              onClick={() => router.push(navRoutes.research)}
            >
              {t('hero.learnMore')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
