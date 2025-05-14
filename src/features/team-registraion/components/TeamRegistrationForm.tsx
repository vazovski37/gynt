'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTeamRegistration } from '../hooks/useTeamRegistration'
import { useTranslation } from 'react-i18next'

const formSchema = z.object({
  team_name: z.string().min(1),
  school_name: z.string().min(1),
  city: z.string().min(1),
  team_leader_name: z.string().min(1),
  team_leader_phone: z.string(),
  team_leader_email: z.string().email(),
  team_members: z.array(z.object({ name: z.string() })),
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
      team_members: [{ name: '' }, { name: '' }, { name: '' }],
      team_supervisor: '',
      supervisor_phone: '',
      supervisor_email: '',
      additional_info: '',
    },
  })

  const onSubmit = async (data: FormValues) => {
    await registerTeam(data)
  }

  return (
    <Card className="max-w-4xl mx-auto mt-8 p-8 shadow-lg">
      <CardContent>
        <h2 className="text-2xl font-semibold mb-6 text-center">{t('title')}</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="team_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('team_name')}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t('team_name')} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="school_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('school_name')}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t('school_name')} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('city')}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t('city')} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="team_leader_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('team_leader_name')}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t('team_leader_name')} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="team_leader_phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('team_leader_phone')}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t('team_leader_phone')} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="team_leader_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('team_leader_email')}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t('team_leader_email')} type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.watch('team_members').map((_, index) => (
              <FormField
                key={index}
                control={form.control}
                name={`team_members.${index}.name`}
                render={({ field }) => (
                  <FormItem className="col-span-1 md:col-span-2">
                    <FormLabel>{t('member', { number: index + 1 })}</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder={t('member_placeholder', { number: index + 1 })} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <FormField
              control={form.control}
              name="team_supervisor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('team_supervisor')}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t('team_supervisor')} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="supervisor_phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('supervisor_phone')}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t('supervisor_phone')} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="supervisor_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('supervisor_email')}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t('supervisor_email')} type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="additional_info"
              render={({ field }) => (
                <FormItem className="col-span-1 md:col-span-2">
                  <FormLabel>{t('additional_info')}</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder={t('additional_info_placeholder')} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="col-span-1 md:col-span-2">
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
