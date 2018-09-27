import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

class HeroSlider extends React.Component {
  componentDidMount() {
    const $ = window.$

    //  Initialize hero slider
    $('.hero-slider').flexslider({})

    //  Add padding to container depending on nav class
    if (
      !$('nav').hasClass('overlay-bar') &&
      !$('nav').hasClass('contained-bar')
    ) {
      $('.main-container')
        .first()
        .css('margin-top', $('nav').outerHeight())
    }

    //  Append .background-image-holder <img>'s as CSS backgrounds
    $('.background-image-holder').each(function() {
      var imgSrc = $(this)
        .children('img')
        .attr('src')
      $(this).css('background', 'url("' + imgSrc + '")')
      $(this)
        .children('img')
        .hide()
      $(this).css('background-position', '50% 0%')
    })
  }

  render() {
    const images = this.props.data.heroImages.edges.map(({ node }) => node)
    const { html: heroTextHtml, excerpt } = this.props.data.heroText

    return (
      <section className="hero-slider">
        <ul className="slides">
          {images.map(({ id, frontmatter }) => (
            <li key={id} className={excerpt ? 'overlay' : ''}>
              <div className="background-image-holder">
                <img
                  className="background-image"
                  alt="Hero"
                  src={frontmatter.image_url}
                />
              </div>
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
