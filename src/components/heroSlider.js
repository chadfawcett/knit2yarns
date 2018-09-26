import React from 'react'
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
    return (
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
        {data => {
          const images = data.heroImages.edges.map(({ node }) => node)
          const { html: heroTextHtml, excerpt } = data.heroText
          console.log(excerpt)
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
        }}
      </StaticQuery>
    )
  }
}

export default HeroSlider
