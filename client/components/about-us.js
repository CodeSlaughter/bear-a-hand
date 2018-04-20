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
                        <p>Get To Know Our President</p>
                    </header>
                    <section className="wrapper style4 container">
                        <div className="row 150%">
                            <div className="8u 12u(narrower)">
                                <div className="content">
                                    <section>
                                        <p><img src="images/hs.jpg" className="featured" style={{ height: 'auto', width: 300, marginLeft: 60 }} alt="headshot" /></p>
                                        <header>
                                            <h3><strong>About Our President</strong></h3>
                                        </header>
                                        <p>My name is Kendyl Auten and I am a mother of two sons.  We currently reside in Central Jersey. I am the youngest of seven siblings between New Jersey, Florida, and South Carolina.  I have over 18 years of work experience with a broad industry background from hospitality, medical, moving and storage, forensic engineering, manufacturing goods, industrial packaging, and food retail.  I enjoy spending time with family and close friends, shopping, travelling, listening to music, dancing, and most importantly helping others. At a young age, I watched my Mom work two jobs between babysitting during the day and her full-time job in the evening.  I admired her for being able to manage both jobs successfully.  For a short period of time, my Mom began caring for children of a close family friend.  I admired her even more for caring for children other than her own.  In my early twenties, I started caring for my godson and taking him into my home as my own.  During undergrad, I interned at a residential community home for youths in Bordentown, New Jersey assisting them with resumes, open group sessions, and guidance for those transitioning out as young adults.  During the course and after graduate school, I would assist my friends and classmates with their resumes and provide advice based on my educational and work experience.  Over the years of watching my Mom care for children, assisting parents, working hard, and enjoy seeing the gratitude of helping others, I realized this is something that my Mom and I have in common.  Everyone needs a hand at some point in their lives.  My goal is to help as many people as I can so they can share their experience and tools to help others.  </p>
                                    </section>
                                    <section>
                                        <a href="#" className="image featured"><img src="images/success.jpg" alt="" /></a>
                                        <header>
                                            <h3><strong>HOW WE GOT STARTED</strong></h3>
                                        </header>
                                        <p>After being laid-off multiple times, I found myself bouncing around many questions and thoughts in my mind.  Was I a good employee? Was my work not to their standards?  What could I have done better?  Was my continued education all for nothing?  During those transitional times, it was a very stressful and tough. When requesting for assistance, I felt like a number. There was no human compassion in the process.  I was a single parent, unemployed, and had to figure how to make ends meet.  In addition to being stressed, your anxiety tends to increases between applying for jobs, interviewing, and wishful thinking of that dream job emailing you back to say, "We want to make you an offer." In the meantime, the clock is ticking for your unemployment to run out. It just makes you want to scream. </p>
                                        <p>Looking on the bright side of things, this process allowed me to really utilize my resources whether using my skills and knowledge, taking on courses offered through unemployment, learning to navigate through several job boards, networking with others and continued to carry out my goal on helping others.  The reason for starting Bear-A-Hand is to bring a human touch of compassion while providing a hands-on approach with individuals in transition on resumes, job searches, networking, and other requested services.</p>
                                    </section>
                                    <section>
                                        <a href="#" className="image featured"><img src="images/wecare.jpg" alt="" /></a>
                                        <header>
                                            <h3><strong>Our Goals</strong></h3>
                                        </header>
                                        <ul style={{listStyleType: 'disc'}}>
                                            <li>To help develop an individual’s future to gain control of their lives.</li>
                                            <li>Improve one’s education and career development.</li>
                                            <li>Enhance an individual’s skills set and qualification for employment.</li>
                                            <li>To share knowledge and educate for a channel to success.</li>
                                            <li>To inspire and motivate individual’s to be independent, self-sufficient, and build self-confidence.</li>
                                        </ul>
                                    </section>
                                </div>

                            </div>
                            <div className="4u 12u(narrower)">


                                <div className="sidebar">
                                    <section>
                                        <header>
                                            <h3><strong>EDUCATION</strong></h3>
                                        </header>
                                        <p>Master of Business Administration (MBA) in Project Management, December 2012 DeVry University Keller Graduate School of Management, North Brunswick, NJ.</p>
                                        <p>Bachelor of Arts (BA) in Criminal Justice, August 2007 Kean University, Union, NJ</p>
                                        <p>AvTech Institute (Certificate) in Microsoft Office and Intro to Accounting, April 2016, South Plainfield, NJ</p>
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