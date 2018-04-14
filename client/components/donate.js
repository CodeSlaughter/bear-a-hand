import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

/**
 * COMPONENT
 */
export const Donate = (props) => {
  const {email} = props

  return (
    <div>
      <div id="page-wrapper">
                      <header id="header">
                      <h1 id="logo"><NavLink to="/"><img style={{ height: 45}} src="/images/dlt.png" /></NavLink></h1>
                          <nav id="nav">
                          <ul>
                              <li><NavLink to="/about-us">About Us</NavLink></li>
                              <li className="submenu"><NavLink to="/services">Services</NavLink>
                                <ul>
                                    <li ><a href="/trainings">Trainings</a></li>
                                </ul>
                              </li>
                              <li className="submenu"><NavLink to="/contact">Contact</NavLink>
                                <ul>
                                    <li><a href="#">Volunteer</a></li>
                                    <li><a href="#">Feedback</a></li>
                                    <li><a href="https://goo.gl/forms/GHTwnKtnFoyxwfj02" target="_blank">Apply</a></li>
                                </ul>
                              </li>
                              <li><a href="/donate" className="button special">Donate</a></li>
                          </ul>
                      </nav>
                      </header>
      
                      <article id="main">
                      
                                          <header className="special container">
                                              <span className="icon fa-exclamation"></span>
                                              <h2><strong>Donate</strong></h2>
                                              <p>Check back soon for more details on how you can donate.</p>
                                          </header>
                                      </article>

                                      <footer id="footer">
                      
                                          <ul className="icons">
                                              <li><a href="#" className="icon circle fa-twitter"><span className="label">Twitter</span></a></li>
                                              <li><a href="#" className="icon circle fa-facebook"><span className="label">Facebook</span></a></li>
                                          </ul>
                      
                                          <ul className="copyright">
                                              <li>&copy; Bear-A-Hand</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                                          </ul>
                      
                                      </footer>
            </div>
            </div>
  )
      
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(Donate)