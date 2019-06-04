import React from 'react'

const Contact = () => (
  <section id="contact" className="contact-thirds">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <h1 className="no-margin-bottom">
            Contact Us
            <br />
            We'd love to hear from you
          </h1>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-1" />
        <div className="col-sm-5 text-center">
          <h5 className="m-t-4">Hours</h5>
          <p>
            Tue-Fri 9:30am-5:30pm
            <br />
            Sat 10:00am-5:00pm
          </p>
          <p>Closed Sundays and Statutory holidays</p>
        </div>

        <div className="col-sm-5 text-center">
          <h5 className="m-t-4">Details</h5>
          <p className="lead">
            250 314 0276
            <br />
            contact@knit2yarns.com
            <br />
            <br />
            40-1967 Trans Canada Hwy E<br />
            Kamloops BC
          </p>
        </div>
        <div className="col-sm-1" />
      </div>
    </div>
  </section>
)

export default Contact
