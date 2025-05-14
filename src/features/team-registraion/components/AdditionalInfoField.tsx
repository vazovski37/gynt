import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'

export default function AdditionalInfoField({ control, t }: any) {
  return (
    <FormField control={control} name="additional_info" render={({ field }) => (
      <FormItem className="sm:col-span-2">
        <FormLabel>{t('additional_info')}</FormLabel>
        <FormControl><Textarea rows={3} {...field} /></FormControl>
        <FormMessage />
      </FormItem>
    )} />
  )
}