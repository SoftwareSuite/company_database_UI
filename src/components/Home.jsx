import React from 'react'

import Navbar from './Navbar'
import Hero from './Hero'
import Pricing from './Pricing'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import Contact from './Contact'
import Footer from './Footer'
import './Home.css'

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Pricing />
    <Testimonials />
    <FAQ />
    <Contact />
    <Footer />
    </>
  )
}

export default Home