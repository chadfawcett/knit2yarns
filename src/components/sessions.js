import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import compareAsc from 'date-fns/compare_asc'

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
    //  Gatsby does not allow us to query our date using less than/greater than
    //  so we have to do this dynamically.
    const sessions = this.props.data.sessions.edges
      .map(({ node }) => node)
      .filter(
        ({ frontmatter }) => compareAsc(frontmatter.date, Date.now()) >= 0
      )

    return (
      <section>
        <div className="container">
          <h1 id="classes">Upcoming classes</h1>

          <p className="lead">
            If you are interested in any of our classes, please call the store (
            <span className="bold">250-314-0276</span>) or email us (
            <span className="bold">contact@knit2yarns.com</span>
            ). If you would like to see what the finished products look like,
            stop by the store and we'll be happy to show you. Materials not
            included in class price.
          </p>
          <br />

          <div className="row">
            <div className="blog-masonry-container">
              {sessions.map(({ id, frontmatter }) => (
                <Session key={id} session={frontmatter} />
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
  }
}

Sessions.propTypes = {
  data: PropTypes.shape({
    sessions: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              dateDiff: PropTypes.string.isRequired,
              image_url: PropTypes.string,
              meta_1: PropTypes.string,
              meta_2: PropTypes.string,
              price: PropTypes.number,
              price_details: PropTypes.string,
              description: PropTypes.string.isRequired,
            }),
          }),
        })
      ),
    }),
  }),
}

export default props => (
  <StaticQuery
    query={graphql`
      query Sessions {
        sessions: allMarkdownRemark(
          filter: { fileAbsolutePath: { glob: "**/sessions/*.md" } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                date
                dateDiff: date(difference: "days")
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
    {data => <Sessions data={data} {...props} />}
  </StaticQuery>
)
