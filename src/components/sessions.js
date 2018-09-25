import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Session from './session'

class Sessions extends React.Component {
  componentDidMount() {
    const $ = window.$

    //  Setup Masonry
    $('.blog-masonry-container').isotope({
      itemSelector: '.blog-masonry-item',
      layoutMode: 'masonry',
    })

    $('.blog-filters li').click(function() {
      var current = $(this)

      current.siblings('li').removeClass('active')
      current.addClass('active')

      var filterValue = current.attr('data-filter')
      var container = current
        .closest('.blog-masonry')
        .find('.blog-masonry-container')
      container.isotope({ filter: filterValue })
    })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query Sessions {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    title
                    date
                    image_url
                    meta_1
                    meta_2
                    price
                    price_details
                    description
                  }
                }
              }
            }
          }
        `}
      >
        {data => {
          const sessions = data.allMarkdownRemark.edges
            .map(({ node }) => node)
            .filter(
              ({ frontmatter }) => new Date(frontmatter.date) > Date.now()
            )

          return (
            <section>
              <div className="container">
                <h1 id="classes">Upcoming classes</h1>

                <p className="lead">
                  If you are interested in any of our classes, please call the
                  store (<span className="bold">250-314-0276</span>) or email us
                  (<span className="bold">contact@knit2yarns.com</span>
                  ). If you would like to see what the finished products look
                  like, stop by the store and we'll be happy to show you.
                  Materials not included in class price.
                </p>
                <br />

                <div className="row">
                  <div className="blog-masonry-container">
                    {sessions.map(({ frontmatter }) => (
                      <Session
                        key={frontmatter.title + frontmatter.date}
                        session={frontmatter}
                      />
                    ))}

                    {sessions.length === 0 && (
                      <p className="lead">
                        We currently don't have any classes scheduled. Join our
                        newsletter to be notified when we have some planned.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )
        }}
      </StaticQuery>
    )
  }
}

export default Sessions
