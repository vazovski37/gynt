'use client'

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Phone, Building2 } from 'lucide-react'

export default function ContactList() {
  const { t } = useTranslation('participate')

  const people = t('contact.people', { returnObjects: true }) as { name: string; phone: string }[]

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
        </motion.div>

        {/* Organizer */}
        <div className="max-w-2xl mx-auto mb-12 text-center bg-card p-8 rounded-2xl border border-border">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mx-auto mb-4">
            <Building2 className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            {t('contact.organizer_label')}
          </h3>
          <p className="text-lg font-medium">{t('contact.organizer')}</p>
        </div>

        {/* Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {people.map((contact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-border/50 hover:bg-card/50 transition-all duration-300 group text-center"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {contact.name}
              </h3>
              <p className="text-sm text-muted-foreground" dir="ltr">
                {contact.phone}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
