'use client'

import { useTranslation } from 'react-i18next'

export default function ContactList() {
  const { t } = useTranslation('participate')

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-primary text-center mb-6">{t('contact.title')}</h2>
      <div className="max-w-xl mx-auto text-center space-y-3 text-sm text-muted-foreground">
        <p>📞 {t('contact.teimuraz')}: <span dir="ltr">+995 577 33 56 16</span></p>
        <p>📞 {t('contact.giorgi')}: <span dir="ltr">+995 557 73 22 28</span></p>
      </div>
    </section>
  )
}
