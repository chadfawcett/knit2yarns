import React from 'react'
import PropTypes from 'prop-types'

const Instagram = ({ data, ...rest }) => {
  const images = data.edges.map(({ node: { id, link, localImage } }) => ({
    id,
    link,
    ...localImage.childImageSharp.fluid,
  }))

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
          <a
            key={img.id}
            href={img.link}
            className="insta-feed__image"
            style={{ backgroundImage: `url(${img.src})` }}
          >
            {}
          </a>
        ))}
      </div>
    </section>
  )
}

Instagram.propTypes = {
  data: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
          localImage: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              fluid: PropTypes.shape({
                src: PropTypes.string.isRequired,
              }),
            }),
          }),
        }),
      })
    ),
  }),
}

export default Instagram
