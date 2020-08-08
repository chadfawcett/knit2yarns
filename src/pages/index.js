import React from 'react'

import Layout from '../components/layout'
import Nav from '../components/nav'
import HeroSlider from '../components/heroSlider'
import Clients from '../components/clients'
import About from '../components/about'
import Sessions from '../components/sessions'
import Contact from '../components/contact'
import Map from '../components/map'
import Footer from '../components/footer'

const IndexPage = ({ data }) => (
  <Layout>
    <Nav />
    <div className="main-container">
      <HeroSlider />
      <Clients />
      <About />
      <Sessions />
      <Contact />
      <Map />
    </div>
    <Footer />
  </Layout>
)

export default IndexPage
