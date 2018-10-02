import React from 'react'

const About = () => (
  <section id="about" className="side-image text-heavy clearfix">
    <div className="image-container col-md-5 col-sm-3 pull-left">
      <div className="background-image-holder">
        <img
          className="background-image"
          alt="Background"
          src="img/side1.jpg"
        />
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-6 col-sm-8 col-sm-offset-4 content clearfix">
          <h1>About Knit2 Yarns</h1>
          <p className="lead">
            Knit2 Yarns is Kamloops' newest Yarn Shop. We have a great selection
            of yarns and notions for all your knitting needs. We carry
            Malabrigo, Noro, Sweet Georgia, Smith and Ewe, Cascade, Berroco, and
            much more!
          </p>
          <h1 id="dropin">Drop in Knitting Days</h1>
          <p className="lead no-margin-bottom">
            Drop in knitting happens twice a week, Wednesday's at 9:30 a.m. and
            Saturdays at 10:00 a.m. Bring your current work in progress or come
            and get started on a new project. You can call the shop with any
            questions{' '}
            <span className="bold" style={{ whiteSpace: 'nowrap' }}>
              250 314 0276
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default About
