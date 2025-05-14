import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export default function SupervisorFields({ control, t }: any) {
  return (
    <>
      <FormField control={control} name="team_supervisor" render={({ field }) => (
        <FormItem>
          <FormLabel>{t('team_supervisor')}</FormLabel>
          <FormControl><Input {...field} /></FormControl>
          <FormMessage />
        </FormItem>
      )} />

      <FormField control={control} name="supervisor_phone" render={({ field }) => (
        <FormItem>
          <FormLabel>{t('supervisor_phone')}</FormLabel>
          <FormControl><Input {...field} /></FormControl>
          <FormMessage />
        </FormItem>
      )} />

      <FormField control={control} name="supervisor_email" render={({ field }) => (
        <FormItem>
          <FormLabel>{t('supervisor_email')}</FormLabel>
          <FormControl><Input type="email" {...field} /></FormControl>
          <FormMessage />
        </FormItem>
      )} />
    </>
  )
}