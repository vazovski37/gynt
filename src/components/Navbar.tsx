'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '@/lib/useLanguage'
import { navRoutes } from '@/constants/navRoutes'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { Disclosure } from '@headlessui/react'
import { ThemeToggleWithToast } from './ThemeToggleWithToast'

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'

const navItems = [
  { key: 'home', href: navRoutes.home },
  { key: 'about', href: navRoutes.about },
  { key: 'participate', href: navRoutes.participate },
  { key: 'resources', href: navRoutes.resources },
  { key: 'news', href: navRoutes.news },
  { key: 'support', href: navRoutes.support },
  { key: 'contact', href: navRoutes.contact },
  { key: 'tournaments', href: navRoutes.tournaments },
]

export default function Navbar() {
  const pathname = usePathname()
  const { language, changeLanguage } = useLanguage()
  const { t } = useTranslation('navbar')

  return (
    <Disclosure as="header" className="bg-background border-b sticky top-0 z-50 shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold text-primary tracking-tight">
                  GYNT
                </Link>
              </div>

              {/* Desktop Nav */}
              <div className="hidden md:flex md:space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-sm font-medium hover:text-primary transition-colors',
                      pathname === item.href
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    )}
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </div>

              {/* Right Controls */}
              <div className="flex items-center gap-2">
                <Select value={language} onValueChange={changeLanguage}>
                  <SelectTrigger className="w-[70px] h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">EN</SelectItem>
                    <SelectItem value="ge">GE</SelectItem>
                  </SelectContent>
                </Select>

                <ThemeToggleWithToast />

                {/* Mobile Menu Button */}
                <Disclosure.Button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-primary focus:outline-none">
                  {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="md:hidden border-t px-4 pt-2 pb-4 bg-background shadow-sm">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block text-sm font-medium py-1.5 px-2 rounded-md hover:bg-accent transition-colors',
                    pathname === item.href
                      ? 'text-primary bg-accent'
                      : 'text-muted-foreground'
                  )}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
