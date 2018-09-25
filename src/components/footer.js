import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SiteSocialQuery {
        site {
          siteMetadata {
            instagram_username
            facebook_username
            pinterest_username
          }
        }
      }
    `}
  >
    {({ site }) => (
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
                      href={`https://www.instagram.com/${
                        site.siteMetadata.instagram_username
                      }/`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icon social_instagram" />
                    </a>
                  </li>

                  <li>
                    <a
                      href={`https://www.facebook.com/${
                        site.siteMetadata.facebook_username
                      }/?fref=ts`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icon social_facebook" />
                    </a>
                  </li>

                  <li>
                    <a
                      href={`https://www.pinterest.com/${
                        site.siteMetadata.pinterest_username
                      }/`}
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
    )}
  </StaticQuery>
)

export default Footer
