import React from 'react'

import Layout from '../components/layout'
import Nav from '../components/nav'
import HeroSlider from '../components/heroSlider'
import NewsletterSignup from '../components/newsletterSignup'
import About from '../components/about'
import Sessions from '../components/sessions'
import Instagram from '../components/instagram'
import Contact from '../components/contact'
import Map from '../components/map'
import Footer from '../components/footer'

const IndexPage = () => (
  <Layout>
    <Nav />
    <div className="main-container">
      <HeroSlider />
      <NewsletterSignup />
      <About />
      <Sessions />
      <Instagram />
      <Contact />
      <Map />
    </div>
    <Footer />
  </Layout>
)

export default IndexPage
