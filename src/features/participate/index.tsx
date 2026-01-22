'use client'

import Hero from './components/Hero'
import WhoCanParticipate from './components/WhoCanParticipate'
import TournamentFormat from './components/TournamentFormat'
import ProblemsSection from './components/ProblemsSection'
import EvaluationSection from './components/EvaluationSection'
import RegisteredSchools from './components/RegisteredSchools'
import ContactList from './components/ContactList'
import FAQ from './components/FAQ'

export default function ParticipatePage() {
  return (
    <>
      <Hero />
      <WhoCanParticipate />
      <TournamentFormat />
      <ProblemsSection />
      <EvaluationSection />
      <RegisteredSchools />
      <ContactList />
      <FAQ />
    </>
  )
}
