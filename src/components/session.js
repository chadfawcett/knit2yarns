import React from 'react'
import PropTypes from 'prop-types'

const Session = session => (
  <div className="col-md-4 col-sm-6 blog-masonry-item branding">
    <div className="item-inner">
      {session.image_url && (
        <a
          href={session.image_url}
          data-lightbox={session.title.replace(' ', '-').toLowerCase()}
          data-title={session.title}
        >
          <img alt="Class Preview" src={session.image_url} />
        </a>
      )}

      <div className="post-title">
        <h2>{session.title}</h2>
        <p>{session.description}</p>
        <p className="price-details">
          <span className="price">${session.price}</span>{' '}
          {session.price_details}
        </p>
        <div className="post-meta">
          <span className="sub alt-font">{session.meta_1}s</span>
          <span className="sub alt-font">{session.meta_2}</span>
        </div>
      </div>
    </div>
  </div>
)

Session.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image_url: PropTypes.string,
  meta_1: PropTypes.string,
  meta_2: PropTypes.string,
  price: PropTypes.number,
  price_details: PropTypes.string,
  description: PropTypes.string.isRequired,
}

export default Session
