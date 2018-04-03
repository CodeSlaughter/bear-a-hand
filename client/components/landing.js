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
								<h1 id="logo"><NavLink to="index.html"><img style={{ height: 50}} src="/images/dlt.png" /></NavLink></h1>
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
			
									<section className="wrapper style3 container special">
			
										<header className="major">
											<h2>Next look at this <strong>cool stuff</strong></h2>
										</header>
			
										<div className="row">
											<div className="6u 12u(narrower)">
			
												<section>
													<a href="#" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
													<header>
														<h3>A Really Fast Train</h3>
													</header>
													<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
												</section>
			
											</div>
											<div className="6u 12u(narrower)">
			
												<section>
													<a href="#" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
													<header>
														<h3>An Airport Terminal</h3>
													</header>
													<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
												</section>
			
											</div>
										</div>
										<div className="row">
											<div className="6u 12u(narrower)">
			
												<section>
													<a href="#" className="image featured"><img src="images/pic03.jpg" alt="" /></a>
													<header>
														<h3>Hyperspace Travel</h3>
													</header>
													<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
												</section>
			
											</div>
											<div className="6u 12u(narrower)">
			
												<section>
													<a href="#" className="image featured"><img src="images/pic04.jpg" alt="" /></a>
													<header>
														<h3>And Another Train</h3>
													</header>
													<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
												</section>
			
											</div>
										</div>
			
										<footer className="major">
											<ul className="buttons">
												<li><a href="#" className="button">See More</a></li>
											</ul>
										</footer>
			
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

