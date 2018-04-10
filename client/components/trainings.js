import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

/**
 * COMPONENT
 */
export const Trainings = (props) => {
  const {email} = props

  return (
    <div>
      <div id="page-wrapper">
                      <header id="header">
                      <h1 id="logo"><NavLink to="/"><img style={{ height: 45}} src="/images/dlt.png" /></NavLink></h1>
                          <nav id="nav">
                          <ul>
                              <li><NavLink to="/about-us">About Us</NavLink></li>
                              <li className="submenu current"><NavLink to="/about-us">Services</NavLink>
                                <ul>
                                    <li ><a href="/trainings">Trainings</a></li>
                                </ul>
                              </li>
                              <li className="submenu"><NavLink to="/contact">Contact</NavLink>
                                <ul>
                                    <li><a href="#">Donate</a></li>
                                    <li><a href="#">Volunteer</a></li>
                                    <li><a href="#">Feedback</a></li>
                                    <li><a href="https://goo.gl/forms/GHTwnKtnFoyxwfj02" target="_blank">Apply</a></li>
                                </ul>
                              </li>
                              <li><a href="#" className="button special">Donate</a></li>
                          </ul>
                      </nav>
                      </header>
      
                      <article id="main">
                      
                                          <header className="special container">
                                              <span className="icon fa-book"></span>
                                              <h2><strong>Offered Training</strong></h2>
                                              <p>A place to learn and grow</p>
                                          </header>
                                              <section className="wrapper style4 container">
                                                      <div className="content">
                                                          <section>
                                                              <a href="#" className="image featured"><img src="images/ppf.jpeg" alt="" /></a>
                                                              <header>
                                                                  <h3></h3>
                                                              </header>
                                                              <ul>
                                                                <li>Resumes, Cover Letters, and Thank you Letters</li>
                                                                <li>Interviewing Skills</li>
                                                                <li>Job Search</li>
                                                                <li>Financial Counseling</li>
                                                                <li>Housing Search</li>
                                                                <li>Microsoft Office (Word, Excel, PowerPoint, and Outlook)</li>
                                                                <li>Educational / Training Schools</li>
                                                                <li>Networking</li>
                                                                <li>General requested services</li>
                                                              </ul>
                                                          </section>
                                                      </div>
                      
                                              </section>
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

export default connect(mapState)(Trainings)