import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

/**
 * COMPONENT
 */
export const AboutUs = (props) => {
    const { email } = props

    return (
        <div>
            <div id="page-wrapper">
                <header id="header">
                    <h1 id="logo"><NavLink to="/"><img style={{ height: 45 }} src="/images/dlt.png" /></NavLink></h1>
                    <nav id="nav">
                        <ul>
                            <li className="current"><NavLink to="/about-us">About Us</NavLink></li>
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
                        <span className="icon fa-black-tie"></span>
                        <h2><strong>About Us</strong></h2>
                        <p>Get to know our president.</p>
                    </header>
                    <section className="wrapper style4 container">
                        <div className="row 150%">
                            <div className="8u 12u(narrower)">
                                <div className="content">
                                    <section>
                                        <p><img src="images/hs.jpg" className="featured" style={{ height: 'auto', width: 300, marginLeft: 60 }} alt="headshot" /></p>
                                        <header>
                                            <h3>OUR PRESIDENT</h3>
                                        </header>
                                        <p>My name is Kendyl Auten and I
                                        am a mother of two boys ages 6
                                        and 11 years-old. I am originally
                                        from Somerset, New Jersey and
                                        currently resides in South
                                        Brunswick, New Jersey. I am the
                                        youngest of seven siblings
                                        between New Jersey, Florida,
                                        and South Carolina. I am an
                                        Accounts Receivable Credit
                                        Coordinator role for an
                                        industrial packaging company
                                        located in Central Jersey. I enjoy
                                        spending time with my family,
                                        shopping, travelling, listening to
                                        music, dancing, and most
                                        importantly helping others.</p>
                                    </section>
                                    <section>
                                        <a href="#" className="image featured"><img src="images/pic03.jpg" alt="" /></a>
                                        <header>
                                            <h3>HOW WE GOT STARTED</h3>
                                        </header>
                                        <p>After being laid-off multiple times, I found myself questioning whether or not I was a good employee, was my work not to their standards, what could I have done better, was my continued education all for nothing...many different thoughts ran through my mind.  During those transitional times, it was a very stressful and tough.  When requesting for assistance, I felt like a number.  There was no human  compassion in the process.  I was a single parent, unemployed, and had to figure how to make ends meet.  Your anxiety increases between applying for jobs, interviewing, and wishful thinking of that dream job emailing you back to say, "We want to make you an offer."  In the meantime, the clock is ticking for your unemployment to run out.  It just makes you want to scream. </p>
                                        <p>Looking on the bright side of things, this process allowed me to really utilized my resources whether using my own skills and knowledge, taking on courses offered through unemployment, learning to navigate through several job boards, or networking with others.  The reason for starting Bear-A-Hand is to bring a human touch of compassion while helping individuals in transition with resumes, job searches, networking, and other requested services. </p>
                                    </section>
                                    <section>
                                        <a href="#" className="image featured"><img src="images/wecare.jpg" alt="" /></a>
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
                            <div className="4u 12u(narrower)">


                                <div className="sidebar">
                                    <section>
                                        <header>
                                            <h3>EDUCATION</h3>
                                        </header>
                                        <p>Master of Business Administration (MBA) in Project Management, December 2012 DeVry University Keller Graduate School of Management, North Brunswick, NJ.</p>
                                        <p>Bachelor of Arts (BA) in Criminal Justice, August 2007 Kean University, Union, NJ</p>
                                        <p>AvTech Institute (Certificate) in Microsoft Office and Intro to Accounting, April 2016, South Plainfield, NJ</p>
                                    </section>

                                    <section>
                                        <a href="#" className="image featured"><img src="images/pic04.jpg" alt="" /></a>
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

export default connect(mapState)(AboutUs)