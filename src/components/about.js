import React from 'react'

const About = () => (
  <section id="about" className="side-image text-heavy clearfix">
    <div className="image-container col-md-5 col-sm-3 pull-left">
      <div
        className="background-image-holder"
        style={{ backgroundImage: 'url(img/side1.jpg)' }}
      />
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-6 col-sm-8 col-sm-offset-4 content clearfix">
          <h1 id="newsletter">Newsletter Signup</h1>
          <p className="lead m-b-2">
            Signup to our newsletter to be notified of upcoming classes and
            sales.
          </p>
          <form className="mail-list-signup">
            <input
              type="text"
              className="signup-email-field validate-required validate-email"
              placeholder="Enter your email"
            />
            <input
              type="submit"
              className="btn btn-primary btn-filled"
              value="Subscribe"
            />
          </form>

          <h1>About Knit2 Yarns</h1>
          <p className="lead">
            Knit2 Yarns is Kamloops' destination yarn shop. We have a great
            selection of yarns and notions for all your knitting needs. We carry
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
