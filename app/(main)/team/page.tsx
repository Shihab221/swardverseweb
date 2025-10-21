import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { TeamMember } from '@/components/Team'
import React from 'react'

const page = () => {
  return (
    <div>
    <Navigation />
      <TeamMember />
      <Footer />
    </div>
  )
}

export default page
