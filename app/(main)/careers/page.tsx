import { Careers } from '@/components/Careers'
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import React from 'react'

const Page = () => {
  return (
    <div>
        <Navigation />
      <Careers />
      <Footer />
    </div>
  )
}

export default Page;
