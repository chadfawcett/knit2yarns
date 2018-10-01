import React from 'react'
import PropTypes from 'prop-types'

const Instagram = ({ instagram, ...rest }) => {
  const images = instagram.edges.map(
    ({ node }) => node.images.standard_resolution.url
  )

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

      <div className="insta-feed">
        {images.map(img => (
          <div
            key={img}
            className="insta-feed__image"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
    </section>
  )
}

Instagram.propTypes = {
  instagram: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          images: PropTypes.shape({
            standard_resolution: PropTypes.shape({
              url: PropTypes.string.isRequired,
            }),
          }),
        }),
      })
    ),
  }),
}

export default Instagram
