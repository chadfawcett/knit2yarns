import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Nav from '../components/nav'
import HeroSlider from '../components/heroSlider'
import Clients from '../components/clients'
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
      <Clients />
      <About />
      <Sessions />
      <Instagram data={data.instagram} />
      <Contact />
      <Map />
    </div>
    <Footer />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query Instagram {
    instagram: allInstagramContent(limit: 7) {
      edges {
        node {
          id
          link
          localImage {
            childImageSharp {
              fluid(maxHeight: 500, maxWidth: 500, quality: 90) {
                src
              }
            }
          }
        }
      }
    }
  }
`
