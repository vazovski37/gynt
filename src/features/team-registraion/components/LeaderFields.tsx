import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export default function LeaderFields({ control, t }: any) {
  return (
    <>
      <FormField control={control} name="team_leader_name" render={({ field }) => (
        <FormItem>
          <FormLabel>{t('team_leader_name')}</FormLabel>
          <FormControl><Input {...field} /></FormControl>
          <FormMessage />
        </FormItem>
      )} />

      <FormField control={control} name="team_leader_phone" render={({ field }) => (
        <FormItem>
          <FormLabel>{t('team_leader_phone')}</FormLabel>
          <FormControl><Input {...field} /></FormControl>
          <FormMessage />
        </FormItem>
      )} />

      <FormField control={control} name="team_leader_email" render={({ field }) => (
        <FormItem>
          <FormLabel>{t('team_leader_email')}</FormLabel>
          <FormControl><Input type="email" {...field} /></FormControl>
          <FormMessage />
        </FormItem>
      )} />
    </>
  )
}