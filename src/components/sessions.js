import React from 'react'

const Sessions = () => (
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
              <Class />
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

export default Sessions
