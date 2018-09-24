import React from 'react'
import PropTypes from 'prop-types'

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src="js/jquery.min.js" />
          <script src="js/jquery.plugin.min.js" />
          <script src="js/bootstrap.min.js" />
          <script src="js/jquery.flexslider-min.js" />
          <script src="js/smooth-scroll.min.js" />
          <script src="js/skrollr.min.js" />
          <script src="js/spectragram.min.js" />
          <script src="js/scrollReveal.min.js" />
          <script src="js/isotope.min.js" />
          <script src="js/twitterFetcher_v10_min.js" />
          <script src="js/lightbox.min.js" />
          <script src="js/jquery.countdown.min.js" />
          <script src="js/scripts.js" />
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
