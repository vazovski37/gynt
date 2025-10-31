'use client'

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'

const contacts = [
  { name: 'contact.teimuraz', phone: '+995 577 33 56 16' },
  { name: 'contact.giorgi', phone: '+995 557 73 22 28' },
]

export default function ContactList() {
  const { t } = useTranslation('participate')

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {contacts.map((contact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-border/50 hover:bg-card/50 transition-all duration-300 group text-center"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {t(contact.name)}
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
