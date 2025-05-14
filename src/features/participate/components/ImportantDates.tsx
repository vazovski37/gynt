'use client'

import { useTranslation } from 'react-i18next'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

export default function ImportantDates() {
  const { t } = useTranslation('participate')
  const rows = t('dates.list', { returnObjects: true }) as { date: string; event: string }[]

  return (
    <section className="py-16 max-w-3xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">{t('dates.title')}</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Date</TableHead>
            <TableHead>Event</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.event}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  )
}
