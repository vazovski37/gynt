'use client'

import Hero from './components/Hero'
import WhoCanParticipate from './components/WhoCanParticipate'
import TournamentFormat from './components/TournamentFormat'
import ImportantDates from './components/ImportantDates'
import RegistrationCard from './components/RegistrationCard'
import ContactList from './components/ContactList'
import FAQ from './components/FAQ'

export default function ParticipatePage() {
  return (
    <>
      <Hero />
      <WhoCanParticipate />
      <TournamentFormat />
      <ImportantDates />
      <RegistrationCard />
      <ContactList />
      <FAQ />
    </>
  )
}
