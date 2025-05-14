'use client'

import {
  Form
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useForm, useFieldArray } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTeamRegistration } from '../hooks/useTeamRegistration'
import { useTranslation } from 'react-i18next'

// Modular components
import TeamInfoFields from './TeamInfoFields'
import LeaderFields from './LeaderFields'
import SupervisorFields from './SupervisorFields'
import AdditionalInfoField from './AdditionalInfoField'
import MemberFieldsGroup from './MemberFieldsGroup'

const formSchema = z.object({
  team_name: z.string().min(1),
  school_name: z.string().min(1),
  city: z.string().min(1),
  team_leader_name: z.string().min(1),
  team_leader_phone: z.string(),
  team_leader_email: z.string().email(),
  team_members: z.array(
    z.object({
      name: z.string().min(1),
      surname: z.string().min(1),
      date_of_birth: z
        .string()
        .regex(/^\d{2}\/\d{2}\/\d{4}$/, 'Use dd/mm/yyyy format'),
      class: z.string().min(1),
    })
  ),
  team_supervisor: z.string(),
  supervisor_phone: z.string(),
  supervisor_email: z.string().email(),
  additional_info: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function TeamRegistrationForm() {
  const { t } = useTranslation('teamRegistration')
  const { registerTeam, loading, success, error } = useTeamRegistration()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      team_name: '',
      school_name: '',
      city: '',
      team_leader_name: '',
      team_leader_phone: '',
      team_leader_email: '',
      team_members: [
        { name: '', surname: '', date_of_birth: '', class: '' },
        { name: '', surname: '', date_of_birth: '', class: '' },
        { name: '', surname: '', date_of_birth: '', class: '' },
      ],
      team_supervisor: '',
      supervisor_phone: '',
      supervisor_email: '',
      additional_info: '',
    },
  })

  const { fields } = useFieldArray({
    control: form.control,
    name: 'team_members',
  })

  const onSubmit = async (data: FormValues) => {
    const formattedData = {
      ...data,
      team_members: data.team_members.map((member) => {
        const [day, month, year] = member.date_of_birth.split('/')
        const isoDate = new Date(`${year}-${month}-${day}`).toISOString().split('T')[0]
        return { ...member, date_of_birth: isoDate }
      }),
    }

    await registerTeam(formattedData)
  }

  return (
    <Card className="max-w-4xl mx-auto mt-8 p-2 sm:p-2 shadow-lg">
      <CardContent className="px-2 lg:px-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">{t('title')}</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TeamInfoFields control={form.control} t={t} />
            <LeaderFields control={form.control} t={t} />
            <MemberFieldsGroup fields={fields} control={form.control} t={t} />
            <SupervisorFields control={form.control} t={t} />
            <AdditionalInfoField control={form.control} t={t} />

            <div className="sm:col-span-2">
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? t('submitting') : t('submit')}
              </Button>

              {success && <p className="text-green-500 mt-4">{t('success')}</p>}
              {error && <p className="text-red-500 mt-4">{t('error', { message: error })}</p>}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
