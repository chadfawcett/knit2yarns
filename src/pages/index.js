import React from 'react'
import { graphql } from 'gatsby'

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

const IndexPage = ({ data }) => (
  <Layout>
    <Nav />
    <div className="main-container">
      <HeroSlider />
      <NewsletterSignup />
      <About />
      <Sessions />
      <Instagram instagram={data.instagram} />
      <Contact />
      <Map />
    </div>
    <Footer />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query Instagram {
    instagram: allInstagramContent {
      edges {
        node {
          images {
            standard_resolution {
              url
            }
          }
        }
      }
    }
  }
`
