'use client'

import { useEffect, useState } from 'react'
import { useSchools } from '../hooks/useSchools'
import { School } from '../types/school'
import { motion } from 'framer-motion'
import { Building2, Mail, Phone, MapPin, Calendar } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function RegisteredSchoolsList() {
  const { schools, loading, error } = useSchools()
  const [isMounted, setIsMounted] = useState(false)
  const { t } = useTranslation('common')

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (loading) {
    return (
      <div className="text-center py-16">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mb-4" />
        <p className="text-sm text-muted-foreground">
          {t('schools.loading', { defaultValue: 'Loading registered schools...' })}
        </p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-sm text-red-500 mb-4">{error}</p>
      </div>
    )
  }

  if (schools.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/30 mb-4">
          <Building2 className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {t('schools.noSchools', { defaultValue: 'No registered schools yet' })}
        </h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          {t('schools.noSchoolsDesc', { defaultValue: 'Be the first to register your school for GYNT!' })}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          {t('schools.title', { defaultValue: 'Registered Schools' })}
        </h2>
        <p className="text-muted-foreground">
          {t('schools.count', { 
            defaultValue: '{{count}} schools registered', 
            count: schools.length 
          })}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schools.map((school: School, index) => (
          <SchoolCard key={school.id} school={school} index={index} isMounted={isMounted} />
        ))}
      </div>
    </div>
  )
}

function SchoolCard({ school, index, isMounted }: { school: School; index: number; isMounted: boolean }) {
  const { t } = useTranslation('common')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isMounted ? 1 : 0, y: isMounted ? 0 : 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-md border border-border/40 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer relative overflow-hidden">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <div className="relative z-10">
          {/* School Icon Badge */}
          <div className="mb-5">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
          </div>

          {/* School Name */}
          <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
            {school.school_name}
          </h3>

          {/* Location */}
          {school.city && (
            <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{school.city}</span>
              {school.school_type && (
                <>
                  <span>•</span>
                  <span>{school.school_type}</span>
                </>
              )}
            </div>
          )}

          {/* Contact Person */}
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border/20">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground truncate">
                {school.contact_person}
              </div>
              {school.contact_email && (
                <div className="text-xs text-muted-foreground truncate">
                  {school.contact_email}
                </div>
              )}
            </div>
          </div>

          {/* Additional Info */}
          {school.school_address && (
            <div className="mb-4">
              <p className="text-xs text-muted-foreground line-clamp-2">
                {school.school_address}
              </p>
            </div>
          )}

          {/* Registration Date */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground pt-4 border-t border-border/20">
            <Calendar className="w-3.5 h-3.5" />
            <span>
              {new Date(school.created_at).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

