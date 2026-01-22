'use client'

import { useTranslation } from 'react-i18next'
import { Calculator, Calendar } from 'lucide-react'
// Imports removed to avoid dependency issues
// Note: react-katex might not be installed, using simple text fallback if needed, 
// but user requested formula display. Assuming katex or similar is available or I can simulate it.
// Actually, simple HTML/Tailwind is safer if dependencies aren't guaranteed.
// Let's use simple HTML/CSS for the formula to be safe and avoid new dependencies.

export default function EvaluationSection() {
    const { t } = useTranslation('participate')

    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Evaluation Formula */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Calculator className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold">{t('evaluation.title').split(' ')[0]}</h2>
                        </div>

                        <p className="text-muted-foreground mb-8 text-lg">
                            {t('evaluation.formula_desc')}
                        </p>

                        <div className="bg-card p-6 rounded-xl border border-border overflow-x-auto shadow-sm">
                            {/* Simulating formula display visually */}
                            <div className="flex items-center justify-center text-center min-w-max">
                                <span className="font-semibold text-lg">Ind. Score</span>
                                <span className="mx-3 text-xl">=</span>
                                <div className="flex flex-col items-center">
                                    <div className="border-b-2 border-primary w-full pb-1 mb-1 px-2 font-medium">
                                        Rep (30) + Opp (20) + Rev (10)
                                    </div>
                                    <div className="font-bold">6</div>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-center text-sm text-muted-foreground italic">
                            (Visual representation of the formula)
                        </p>
                    </div>

                    {/* National Team Selection */}
                    <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Calendar className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">{t('evaluation.selection_title')}</h2>
                        </div>
                        <p className="text-lg leading-relaxed">
                            {t('evaluation.selection_desc')}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
