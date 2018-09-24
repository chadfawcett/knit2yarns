import React from 'react'

const Classes = () => (
  <section>
    <div className="container">
      <h1 id="classes">Upcoming classes</h1>

      {/* {% assign count = 0 %}
      {% capture now_unix %}{{ 'now' | date: "%s" }}{% endcapture %} */}

      <p className="lead">
        If you are interested in any of our classes, please call the store (
        <span className="bold">250-314-0276</span>) or email us (
        <span className="bold">contact@knit2yarns.com</span>
        ). If you would like to see what the finished products look like, stop
        by the store and we'll be happy to show you. Materials not included in
        class price.
      </p>
      <br />

      <div className="row">
        <div className="blog-masonry-container">
          {/* {% for class in site.classes %}
            {% capture event_date %}{{ class.date | date: "%s" }}{% endcapture %}
            {% if event_date > now_unix %}
              {% assign count = count | plus: 1 %}
              <div className="col-md-4 col-sm-6 blog-masonry-item branding">
                <div className="item-inner">
                  {% if class.image_url %}
                    <a
                      href="{{ class.image_url }}"
                      data-lightbox="{{ class.title | replace: " ", "-" | downcase }}"
                      data-title="{{ class.title }}">
                      <img alt="Blog Preview" src="{{ class.image_url }}">
                    </a>
                  {% endif %}

                  <div className="post-title">
                    <h2>{{ class.title }}</h2>
                    <p>{{ class.description }}</p>
                    <p className="price-details">
                      <span className="price">${{ class.price }}</span>
                      {% if class.price_details %}
                        {{ class.price_details }}
                      {% endif %}
                    </p>
                    <div className="post-meta">
                      <span className="sub alt-font">{{ class.meta_1 }}</span>
                      <span className="sub alt-font">{{ class.meta_2 }}</span>
                    </div>
                  </div>
                </div>
              </div>
            {% endif %}
          {% endfor %} */}

          {/* {% if count == 0 %}
            <p className="lead">
              We currently don't have any classes scheduled. Join our newsletter to
              be notified when we have some planned.
            </p>
          {% endif %} */}
        </div>
      </div>
    </div>
  </section>
)

export default Classes
