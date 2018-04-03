import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

/**
 * COMPONENT
 */
export const AboutUs = (props) => {
  const {email} = props

  return (
    <div>
      <div id="page-wrapper">
                      <header id="header">
                      <h1 id="logo"><NavLink to="/"><img style={{ height: 50}} src="/images/dlt.png" /></NavLink></h1>
                      <nav id="nav">
                      <ul>
                          <li className="current"><NavLink to="/">Welcome</NavLink></li>
                          <li className="submenu">
                              <a href="#">MENU</a>
                              <ul>
                                  <li><NavLink to="/services">Services</NavLink></li>
                                  <li><NavLink to="/about-us">About Us</NavLink></li>
                                  <li className="submenu">
                                      <a href="#">Contact</a>
                                      <ul>
                                          <li><a href="#">Donate</a></li>
                                          <li><a href="#">Volunteer</a></li>
                                          <li><a href="#">Feedback</a></li>
                                      </ul>
                                  </li>
                              </ul>
                          </li>
                          <li><a href="#" class="button special">Donate</a></li>
                      </ul>
                  </nav>
                      </header>
      
                 
                      <article id="main">
      
                          <header class="special container">
                              <span class="icon fa-black-tie"></span>
                              <h2><strong>About Us</strong></h2>
                              <p>Get to know the team.</p>
                          </header>
                              <section class="wrapper style4 container">
                                  <div class="row 150%">
                                      <div class="8u 12u(narrower)">                                 
                                              <div class="content">
                                                  <section>
                                                      <a href="#" class="image featured"><img src="images/pic03.jpg" alt="" /></a>
                                                      <header>
                                                          <h3>OUR PRESIDENT</h3>
                                                      </header>
                                                      <p>Kendyl Auten and is a mother of two boys ages 6 and 11 years-old. She is originally from Somerset, New Jersey and currently resides in South Brunswick, New Jersey. She is the youngest of seven siblings between New Jersey, Florida, and South Carolina. She is an Accounts Receivable Credit Coordinator role for an industrial packaging company located in Central Jersey. In her spare time she enjoys spending time with my family, shopping, travelling, listening to music, dancing, and most importantly helping others.</p>
                                                      </section>
                                                      <section>
                                                      <a href="#" class="image featured"><img src="images/wecare.jpg" alt="" /></a>
                                                      <header>
                                                          <h3>Our Objectives</h3>
                                                      </header>
                                                      <p>Create personalize plans geared towards an individual’s needs.
                                                          <br />Provide a hands-on approach from start to finish.
                                                          <br />Offer available resources, training, and the necessary tools.
                                                          <br />Work cohesively with local employers and staffing agencies for job recruitments.
                                                          <br />Network with local and state agencies on available housing programs and other assistance programs.
                                                          <br />Work with companies in the private sector for available services.
                                                          <br />Participate in community outreach programs for volunteer services.</p>
                                                      </section>
                                              </div>
      
                                      </div>
                                      <div class="4u 12u(narrower)">
      
                                         
                                              <div class="sidebar">
                                                  <section>
                                                      <header>
                                                          <h3>EDUCATION</h3>
                                                      </header>
                                                      <p>Master of Business Administration (MBA) in Project Management, December 2012 DeVry University Keller Graduate School of Management, North Brunswick, NJ.</p>
                                                      <p>Bachelor of Arts (BA) in Criminal Justice, August 2007 Kean University, Union, NJ</p>
                                                      <p>AvTech Institute (Certificate) in Microsoft Office and Intro to Accounting, April 2016, South Plainfield, NJ</p>
                                                  </section>
      
                                                  <section>
                                                      <a href="#" class="image featured"><img src="images/pic04.jpg" alt="" /></a>
                                                  </section>
                                              </div>
      
                                      </div>
                                  </div>
                              </section>
      
                      </article>    
                      <footer id="footer">
                          <ul class="icons">
                              <li><a href="#" class="icon circle fa-twitter"><span class="label">Twitter</span></a></li>
                              <li><a href="#" class="icon circle fa-facebook"><span class="label">Facebook</span></a></li>
                          </ul>
                          <ul class="copyright">
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

export default connect(mapState)(AboutUs)