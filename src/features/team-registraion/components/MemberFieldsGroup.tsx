import MemberFields from './MemberFields'

export default function MemberFieldsGroup({ fields, control, t }: any) {
  return (
    <>
      {fields.map((field: any, index: number) => (
        <div key={field.id} className="col-span-1 sm:col-span-2 border rounded-md p-4 space-y-4">
          <h3 className="font-semibold">{t('member', { number: index + 1 })}</h3>
          <MemberFields index={index} control={control} t={t} />
        </div>
      ))}
    </>
  )
}
