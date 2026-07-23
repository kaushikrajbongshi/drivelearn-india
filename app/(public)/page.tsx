import CTA from '@/components/landing/cta/CTA'
import FAQ from '@/components/landing/faq/FAQ'
import Features from '@/components/landing/features/Features'
import Hero from '@/components/landing/hero/Hero'
import HowItWorks from '@/components/landing/how-it-works/HowItWorks'
import PopularSchools from '@/components/landing/popular-schools/PopularSchools'
import Stats from '@/components/landing/stats/Stats'
import Testimonials from '@/components/landing/testimonials/Testimonials'

const page = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <PopularSchools />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}

export default page