import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export default function TeamInfoFields({ control, t }: any) {
  return (
    <>
      <FormField control={control} name="team_name" render={({ field }) => (
        <FormItem>
          <FormLabel>{t('team_name')}</FormLabel>
          <FormControl><Input {...field} /></FormControl>
          <FormMessage />
        </FormItem>
      )} />

      <FormField control={control} name="school_name" render={({ field }) => (
        <FormItem>
          <FormLabel>{t('school_name')}</FormLabel>
          <FormControl><Input {...field} /></FormControl>
          <FormMessage />
        </FormItem>
      )} />

      <FormField control={control} name="city" render={({ field }) => (
        <FormItem>
          <FormLabel>{t('city')}</FormLabel>
          <FormControl><Input {...field} /></FormControl>
          <FormMessage />
        </FormItem>
      )} />
    </>
  )
}