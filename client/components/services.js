import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

/**
 * COMPONENT
 */
export const Services = (props) => {
  const {email} = props

  return (
    <div>
      <div id="page-wrapper">
                      <header id="header">
                      <h1 id="logo"><NavLink to="/"><img style={{ height: 45}} src="/images/dlt.png" /></NavLink></h1>
                      <nav id="nav">
                      <ul>
                          <li><NavLink to="/about-us">About Us</NavLink></li>
                          <li className="submenu current"><NavLink to="/services">Services</NavLink>
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
                              <span className="icon fa-laptop"></span>
                              <h2><strong>Services</strong></h2>
                              <p>Assistance offered</p>
                          </header>
                              <section className="wrapper style4 container">
                                  <div className="row 150%">
                                      <div className="4u 12u(narrower)">
                                              <div className="sidebar">
                                                  <section>
                                                      <header>
                                                          <h3>Magna Feugiat</h3>
                                                      </header>
                                                      <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit..</p>
                                                  </section>      
                                                  <section>
                                                      <a href="#" className="image featured"><img src="images/success.jpg" alt="" /></a>
                                                      <header>
                                                          <h3>Amet Lorem Tempus</h3>
                                                      </header>
                                                      <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
                                                      <footer>
                                                          <ul className="buttons">
                                                              <li><a href="#" className="button small">Learn More</a></li>
                                                          </ul>
                                                      </footer>
                                                  </section>
                                              </div>
      
                                      </div>
                                      <div className="8u 12u(narrower) important(narrower)">
                                              <div className="content">
                                                  <section>
                                                      <a href="#" className="image featured"><img src="images/desk.jpeg" alt="" /></a>
                                                      <header>
                                                          <h3>Trainings to Offer</h3>
                                                      </header>
                                                      <p>Create personalize plans geared towards an
                                                      individual’s needs;
                                                      <br />Provide a hands-on approach from start to
                                                      finish; 
                                                      <br />Offer available resources, training, and the necessary
                                                      tools; 
                                                      <br />Work cohesively with local employers and staffing
                                                      agencies for job recruitments; 
                                                      <br />Network with local and state
                                                      agencies on available housing programs and other assistance
                                                      programs; 
                                                      <br />Work with companies in the private sector for
                                                      available services; and Participate in community outreach
                                                      programs for volunteer services.</p>
                                                  </section>
                                              </div>
      
                                      </div>
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

export default connect(mapState)(Services)