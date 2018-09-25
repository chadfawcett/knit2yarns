import React from 'react'
//  TODO: Should we use Link instead of anchor tags for relative links?
// import { Link } from 'gatsby'

const Nav = () => (
  <div className="nav-container">
    <nav className="centered-logo top-bar">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <a href="index.html">
              <img
                className="logo logo-dark"
                alt="Logo"
                src="img/knit2-logo.png"
              />
            </a>
          </div>

          <div className="col-sm-12 text-center nav-container__sub-header">
            <span className="vjs-1454979028076-4 vir" vic="vjs-1454979028076-4">
              <a
                href="https://maps.google.com/maps?q=40+1967+Trans-Canada+Hwy,+Kamloops,+BC"
                target="blank"
              >
                <i
                  className="icon icon_pin vjs-1454979028076-5"
                  vic="vjs-1454979028076-5"
                />{' '}
                40-1967 Trans Canada Hwy E<br />
                Kamloops BC
              </a>
            </span>
          </div>
          <div className="col-sm-12 text-center nav-container__sub-header">
            <span className="vjs-1454979028076-4 vir" vic="vjs-1454979028076-4">
              <i
                className="icon icon_clock_alt vjs-1454979028076-5"
                vic="vjs-1454979028076-5"
              />{' '}
              Mon-Fri 9:30am-5:30pm; Sat 10:00am-5:00pm
              <br />
              Closed Sundays and Statutory holidays
            </span>
          </div>
          <div className="col-sm-12 text-center nav-container__sub-header">
            <span className="vjs-1454979028076-4 vir" vic="vjs-1454979028076-4">
              <i
                className="icon icon_envelope vjs-1454979028076-5"
                vic="vjs-1454979028076-5"
              />{' '}
              250-314-0276
              <br />
              contact@knit2yarns.com
            </span>
          </div>
        </div>

        <div className="row nav-menu">
          <div className="col-sm-12 columns text-center">
            <ul className="menu">
              <li>
                <a href="#newsletter">Newsletter</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#classes">Classes</a>
              </li>
              <li>
                <a href="#dropin">Drop In</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-border" />
    </nav>
  </div>
)

export default Nav
