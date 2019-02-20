import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

class HeroSlider extends React.Component {
  componentDidMount() {
    const $ = window.$

    //  Initialize hero slider
    $('.hero-slider').flexslider({ slideshowSpeed: 5000 })
  }

  render() {
    const { data, ...rest } = this.props
    const images = data.heroImages.edges.map(({ node }) => node)
    const { html: heroTextHtml, excerpt } = data.heroText

    return (
      <section className="hero-slider" {...rest}>
        <ul className="slides">
          {images.map(({ id, frontmatter }) => (
            <li key={id} className={excerpt ? 'overlay' : ''}>
              <div
                className="background-image-holder"
                style={{ backgroundImage: `url('${frontmatter.image_url}')` }}
              />
              {excerpt && (
                <div
                  className="container align-vertical"
                  style={{ paddingTop: 200 }}
                >
                  <div className="row">
                    <div
                      className="col-md-6 col-sm-9 hero-text"
                      dangerouslySetInnerHTML={{
                        __html: heroTextHtml,
                      }}
                    />
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

HeroSlider.propTypes = {
  data: PropTypes.shape({
    heroImages: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
              image_url: PropTypes.string.isRequired,
            }),
          }),
        })
      ),
    }),
    heroText: PropTypes.shape({
      html: PropTypes.string,
      excerpt: PropTypes.string,
    }),
  }),
}

export default props => (
  <StaticQuery
    query={graphql`
      query Hero {
        heroImages: allMarkdownRemark(
          filter: { fileAbsolutePath: { glob: "**/hero-images/*.md" } }
        ) {
          edges {
            node {
              id
              frontmatter {
                image_url
              }
            }
          }
        }

        heroText: markdownRemark(
          fileAbsolutePath: { glob: "**/hero-text.md" }
        ) {
          html
          excerpt
        }
      }
    `}
  >
    {data => <HeroSlider data={data} {...props} />}
  </StaticQuery>
)

export const HeroTextPreview = ({ widgetFor }) => (
  <section className="hero-slider">
    <ul className="slides">
      <li className="overlay">
        <div
          className="background-image-holder"
          style={{ backgroundImage: 'url("/img/banner1.jpg")' }}
        />
        <div className="container align-vertical" style={{ paddingTop: 200 }}>
          <div className="row">
            <div className="col-md-6 col-sm-9 hero-text">
              {widgetFor('text')}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
)
