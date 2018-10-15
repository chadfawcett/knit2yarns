import React from 'react'
//  TODO: Should we use Link instead of anchor tags for relative links?
// import { Link } from 'gatsby'
import logo from '../img/knit2-logo-purple.png'

const Nav = () => (
  <div className="nav-container">
    <nav className="centered-logo top-bar">
      <div>
        <div className="row">
          <div className="col-sm-12 text-center">
            <a href="index.html">
              <img className="logo logo-dark" alt="Logo" src={logo} />
            </a>
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
