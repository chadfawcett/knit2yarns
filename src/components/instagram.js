import React from 'react'

const Instagram = () => (
  <section className="instagram-feed">
    <div className="container">
      <div className="row text-center">
        <div>
          <span className="alt-font">
            Insta <i className="icon social_instagram" /> Gram
          </span>
        </div>
      </div>
    </div>

    <div className="instafeed" data-user-name="{{ site.instagram_username }}">
      <ul />
    </div>
  </section>
)

export default Instagram
