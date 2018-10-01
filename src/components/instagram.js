import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

class Instagram extends React.Component {
  componentDidMount() {
    const $ = window.$

    $('.instafeed li').each(function() {
      var imgSrc = $(this)
        .children('a')
        .children('img')
        .attr('src')
      $(this).css('background', 'url("' + imgSrc + '")')
      $(this)
        .children('a')
        .children('img')
        .hide()
      $(this).css('background-position', '50% 0%')
    })
  }

  render() {
    const {
      data: { site },
      ...rest
    } = this.props
    return (
      <section className="instagram-feed" {...rest}>
        <div className="container">
          <div className="row text-center">
            <div>
              <span className="alt-font">
                Insta <i className="icon social_instagram" /> Gram
              </span>
            </div>
          </div>
        </div>

        <div
          className="instafeed"
          data-user-name={site.siteMetadata.instagram_username}
        >
          <ul />
        </div>
      </section>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query Instagram {
        site {
          siteMetadata {
            instagram_username
          }
        }
      }
    `}
  >
    {data => <Instagram data={data} {...props} />}
  </StaticQuery>
)
