import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export default function MemberFields({ index, control, t }: any) {
  return (
    <>
      <FormField control={control} name={`team_members.${index}.name`} render={({ field }) => (
        <FormItem>
          <FormLabel>{t('name')}</FormLabel>
          <FormControl><Input {...field} /></FormControl>
          <FormMessage />
        </FormItem>
      )} />

      <FormField control={control} name={`team_members.${index}.surname`} render={({ field }) => (
        <FormItem>
          <FormLabel>{t('surname')}</FormLabel>
          <FormControl><Input {...field} /></FormControl>
          <FormMessage />
        </FormItem>
      )} />

      <FormField control={control} name={`team_members.${index}.class`} render={({ field }) => (
        <FormItem>
          <FormLabel>{t('class')}</FormLabel>
          <FormControl><Input {...field} /></FormControl>
          <FormMessage />
        </FormItem>
      )} />

      <FormField control={control} name={`team_members.${index}.date_of_birth`} render={({ field }) => (
        <FormItem>
          <FormLabel>{t('date_of_birth')}</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder="dd/mm/yyyy"
              inputMode="numeric"
              maxLength={10}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, '')
                if (value.length > 2) value = value.slice(0, 2) + '/' + value.slice(2)
                if (value.length > 5) value = value.slice(0, 5) + '/' + value.slice(5)
                if (value.length > 10) value = value.slice(0, 10)
                field.onChange(value)
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
    </>
  )
}