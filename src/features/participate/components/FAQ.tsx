'use client'

import { useTranslation } from 'react-i18next'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

export default function FAQ() {
  const { t } = useTranslation('participate')

  return (
    <section className="py-16 max-w-2xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">{t('faq.title')}</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="q1">
          <AccordionTrigger>{t('faq.q1')}</AccordionTrigger>
          <AccordionContent>{t('faq.a1')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="q2">
          <AccordionTrigger>{t('faq.q2')}</AccordionTrigger>
          <AccordionContent>{t('faq.a2')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="q3">
          <AccordionTrigger>{t('faq.q3')}</AccordionTrigger>
          <AccordionContent>{t('faq.a3')}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
