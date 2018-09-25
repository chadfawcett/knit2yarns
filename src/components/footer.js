import React from 'react'

const Footer = () => (
  <div className="footer-container">
    <footer className="short bg-secondary-1">
      <div className="container">
        <div className="row">
          <div className="sm-text-center m-t-2 col-sm-6">
            <span className="sub">
              © Copyright {new Date().getFullYear()} Knit2 Yarns Limited
              <br />
            </span>
          </div>

          <div className="text-right sm-text-center m-t-2 col-sm-6">
            <ul className="social-icons">
              <li>
                <a
                  href="https://www.instagram.com/{{ site.instagram_username }}/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon social_instagram" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/{{ site.facebook_username }}/?fref=ts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon social_facebook" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.pinterest.com/{{ site.pinterest_username }}/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon social_pinterest" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
)

export default Footer
