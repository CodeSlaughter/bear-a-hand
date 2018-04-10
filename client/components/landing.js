import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

/**
 * COMPONENT
 */
export const Landing = (props) => {
  const {email} = props

  return (
    <div>
      <div id="page-wrapper">
							<header id="header" className="alt">
								<h1 id="logo"><NavLink to="/"><img style={{ height: 45}} src="/images/dlt.png" /></NavLink></h1>
								<nav id="nav">
								<ul>
									<li><NavLink to="/about-us">About Us</NavLink></li>
									<li className="submenu"><NavLink to="/about-us">Services</NavLink>
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
			
					
							<section id="banner">
								<div className="inner">
			
									<header>
									<img style={{ height: 100}} src="/images/wlt.png" />
									</header>
									<p>Where we lend a hand to your success
									<br />
								</p>
									<footer>
										<ul className="buttons vertical">
											<li><a href="#main" className="button fit scrolly">Tell Me More</a></li>
										</ul>
									</footer>
			
								</div>
			
							</section>
			
				
							<article id="main">
			
								<header className="special container">
									<span className="icon fa-question"></span>
									<h2>What is Bear-A-Hand?</h2>
									<p>Bear-A-Hand is a nonprofit organization dedicated to
									<br />
									helping young and mature adult individuals in achieving their goals to success.
									<br /></p>
								</header>							
									<section className="wrapper style1 container special">
										<div className="row">
											<div className="4u 12u(narrower)">
			
												<section>
													<span className="icon featured fa-users"></span>
													<header>
														<h3>Our Values</h3>
													</header>
                                                    <ul>
                                                        <li>Compassion, Determination, Growth, and Respect</li>
                                                        <li>Family, Friends, Mentors, and Supporters</li>
                                                        <li>Service to others, Commitment, and Educate</li>
                                                    </ul>
												</section>
			
											</div>
											<div className="4u 12u(narrower)">
			
												<section>
													<span className="icon featured fa-check"></span>
													<header>
														<h3>Our Mission</h3>
													</header>
													<p>To provide serviceable resources and genuine guidance to individuals in transition to establish life-changing goals.</p>
												</section>
			
											</div>
											<div className="4u 12u(narrower)">
			
												<section>
													<span className="icon featured fa-eye"></span>
													<header>
														<h3>Our Vision</h3>
													</header>
													<p>Where we lend a hand to your success</p>
												</section>
			
											</div>
										</div>
									</section>
							</article>
			
		
							<section id="cta">
			
								<header>
									<h2>Ready to do <strong>something</strong>?</h2>
									<p>Proin a ullamcorper elit, et sagittis turpis integer ut fermentum.</p>
								</header>
								<footer>
									<ul className="buttons">
										<li><a href="#" className="button special">Donate</a></li>
									</ul>
								</footer>
			
							</section>
			
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

export default connect(mapState)(Landing)

