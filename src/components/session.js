import react from 'React'

const Session = ({ session }) => (
  <div className="col-md-4 col-sm-6 blog-masonry-item branding">
    <div className="item-inner">
      {/* {% if session.image_url %}
      <a
        href="{{ session.image_url }}"
        data-lightbox="{{ session.title | replace: " ", "-" | downcase }}"
        data-title="{{ session.title }}">
        <img alt="Blog Preview" src="{{ session.image_url }}">
      </a>
    {% endif %} */}

      <div className="post-title">
        <h2>{session.title}</h2>
        <p>{session.description}</p>
        <p className="price-details">
          <span className="price">${session.price}</span>
          {/* {% if session.price_details %}
          {{ session.price_details }}
        {% endif %} */}
        </p>
        <div className="post-meta">
          <span className="sub alt-font">{session.meta_1}</span>
          <span className="sub alt-font">{session.meta_2}</span>
        </div>
      </div>
    </div>
  </div>
)

export default Session
