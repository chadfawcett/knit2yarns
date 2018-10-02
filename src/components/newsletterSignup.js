import React from 'react'

const NewsletterSignup = () => (
  <section id="newsletter" className="strip bg-primary">
    <div className="container">
      <form className="mail-list-signup">
        <div className="text-center content">
          <h1 className="text-white">Newsletter Signup</h1>
          <p className="lead">
            Signup to our newsletter to be notified of upcoming classes and
            sales.
          </p>

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
        </div>
      </form>
    </div>
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
  </section>
)

export default NewsletterSignup
