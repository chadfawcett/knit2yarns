import React from 'react'
import PropTypes from 'prop-types'
import Linkify from 'linkifyjs/react'

const Session = ({ session, ...rest }) => (
  <div className="col-md-4 col-sm-6 blog-masonry-item branding" {...rest}>
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
          {parseFloat(session.price) > 0 && (
            <span className="price">${session.price} </span>
          )}
          {session.price_details && <Linkify>{session.price_details}</Linkify>}
        </p>
        <div className="post-meta">
          <span className="sub alt-font">{session.meta_1}</span>
          <span className="sub alt-font">{session.meta_2}</span>
        </div>
      </div>
    </div>
  </div>
)

Session.propTypes = {
  session: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image_url: PropTypes.string,
    meta_1: PropTypes.string,
    meta_2: PropTypes.string,
    price: PropTypes.number,
    price_details: PropTypes.string,
    description: PropTypes.string.isRequired,
  }),
}

export const SessionPreview = ({ entry }) => {
  const session = entry.toJS().data
  session.date = session.date.toString()
  session.title = session.title || ''
  session.description = session.description || ''

  const previewStyles = {
    width: 300,
  }

  return <Session style={previewStyles} session={session} />
}

export default Session
