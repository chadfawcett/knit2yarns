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
          <iframe
            title="Mailchimp signup form"
            className="mail-list-form"
            srcDoc="
            <!-- Begin MailChimp Signup Form -->
            <style type=&quot;text/css&quot;>#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; } 	/* Add your own MailChimp form style overrides in your site stylesheet or in this style block. 	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */ </style>
            <div id=&quot;mc_embed_signup&quot;>
              <form action=&quot;//knit2yarns.us12.list-manage.com/subscribe/post?u=dd2b520b72a13254847a57cda&amp;amp;id=089798dabf&quot; method=&quot;post&quot; id=&quot;mc-embedded-subscribe-form&quot; name=&quot;mc-embedded-subscribe-form&quot; class=&quot;validate&quot; target=&quot;_blank&quot; novalidate>
                <div id=&quot;mc_embed_signup_scroll&quot;>
                  <input type=&quot;email&quot; value=&quot;&quot; name=&quot;EMAIL&quot; class=&quot;email&quot; id=&quot;mce-EMAIL&quot; placeholder=&quot;email address&quot; required />
                  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div style=&quot;position: absolute; left: -5000px;&quot; aria-hidden=&quot;true&quot;><input type=&quot;text&quot; name=&quot;b_dd2b520b72a13254847a57cda_089798dabf&quot; tabindex=&quot;-1&quot; value=&quot;&quot;></div>
                  <div class=&quot;clear&quot;><input type=&quot;submit&quot; value=&quot;Subscribe&quot; name=&quot;subscribe&quot; id=&quot;mc-embedded-subscribe&quot; class=&quot;button&quot;></div>
                  </div>
              </form>
            </div>
            <!--End mc_embed_signup-->"
          />

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
