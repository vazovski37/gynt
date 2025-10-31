'use client'

import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSchoolRegistration } from '../hooks/useSchoolRegistration'
import { useTranslation } from 'react-i18next'
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Building2, Mail, Phone, MapPin, School } from 'lucide-react'
import { motion } from 'framer-motion'

const formSchema = z.object({
  school_name: z.string().min(1, 'School name is required'),
  school_address: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  school_type: z.string().optional(),
  contact_person: z.string().min(1, 'Contact person is required'),
  contact_phone: z.string().optional(),
  contact_email: z.string().email('Invalid email address'),
  additional_info: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function SchoolRegistrationForm() {
  const { t } = useTranslation('schoolRegistration')
  const { registerSchool, loading, success, error } = useSchoolRegistration()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      school_name: '',
      school_address: '',
      city: '',
      school_type: '',
      contact_person: '',
      contact_phone: '',
      contact_email: '',
      additional_info: '',
    },
  })

  const onSubmit = async (data: FormValues) => {
    const success = await registerSchool(data)
    if (success) {
      form.reset()
    }
  }

  return (
    <Card className="max-w-3xl mx-auto shadow-xl border border-border/50 bg-gradient-to-br from-card/50 to-card/20 backdrop-blur-sm">
      <CardContent className="p-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto">
            <School className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-center text-foreground mb-2">
            {t('title', { defaultValue: 'School Registration' })}
          </h2>
          <p className="text-center text-muted-foreground">
            {t('subtitle', { defaultValue: 'Register your school to participate in GYNT' })}
          </p>
        </motion.div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* School Information */}
            <div className="space-y-4 p-6 rounded-xl bg-muted/20 border border-border/30">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  {t('schoolInfo', { defaultValue: 'School Information' })}
                </h3>
              </div>

              <FormField
                control={form.control}
                name="school_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('schoolName', { defaultValue: 'School Name' })} *</FormLabel>
                    <FormControl>
                      <Input placeholder={t('schoolNamePlaceholder', { defaultValue: 'Enter school name' })} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('city', { defaultValue: 'City' })} *</FormLabel>
                      <FormControl>
                        <Input placeholder={t('cityPlaceholder', { defaultValue: 'City' })} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="school_type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('schoolType', { defaultValue: 'School Type' })}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('schoolTypePlaceholder', { defaultValue: 'Public/Private' })} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="school_address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('address', { defaultValue: 'Address' })}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('addressPlaceholder', { defaultValue: 'School address' })} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Contact Information */}
            <div className="space-y-4 p-6 rounded-xl bg-muted/20 border border-border/30">
              <div className="flex items-center gap-2 mb-4">
                <Phone className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  {t('contactInfo', { defaultValue: 'Contact Information' })}
                </h3>
              </div>

              <FormField
                control={form.control}
                name="contact_person"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contactPerson', { defaultValue: 'Contact Person' })} *</FormLabel>
                    <FormControl>
                      <Input placeholder={t('contactPersonPlaceholder', { defaultValue: 'Full name' })} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="contact_phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contactPhone', { defaultValue: 'Phone' })}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('contactPhonePlaceholder', { defaultValue: '+995 XX XXX XXXX' })} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contact_email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contactEmail', { defaultValue: 'Email' })} *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder={t('contactEmailPlaceholder', { defaultValue: 'example@school.ge' })} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Additional Info */}
            <FormField
              control={form.control}
              name="additional_info"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('additionalInfo', { defaultValue: 'Additional Information' })}</FormLabel>
                  <FormControl>
                    <textarea
                      className="flex min-h-[100px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder={t('additionalInfoPlaceholder', { defaultValue: 'Any additional information...' })}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Success Message */}
            {success && (
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                <p className="text-green-600 dark:text-green-400 font-medium text-center">
                  {t('success', { defaultValue: 'School registered successfully! ✅' })}
                </p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                <p className="text-red-600 dark:text-red-400 font-medium text-center">
                  ❌ {error}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg"
              disabled={loading}
            >
              {loading ? t('submitting', { defaultValue: 'Submitting...' }) : t('submit', { defaultValue: 'Register School' })}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

