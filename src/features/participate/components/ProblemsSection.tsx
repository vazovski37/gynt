'use client'

import { useTranslation } from 'react-i18next'
import { Beaker } from 'lucide-react'
import Link from 'next/link'

export default function ProblemsSection() {
    const { t } = useTranslation('participate')

    const problems = t('problems.list', { returnObjects: true }) as { title: string; desc: string }[]

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {t('problems.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
                        {t('problems.subtitle').split('[')[0]}
                        <Link href="https://www.iynt.org/" target="_blank" className="text-primary hover:underline font-medium">
                            iynt.org
                        </Link>
                        {t('problems.subtitle').split(')')[1]}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {problems.map((prob, idx) => (
                        <div key={idx} className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all group">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                                    <Beaker className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2">{prob.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{prob.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
