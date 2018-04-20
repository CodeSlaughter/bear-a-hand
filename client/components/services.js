import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

/**
 * COMPONENT
 */
export const Services = (props) => {
    const { email } = props

    return (
        <div>
            <div id="page-wrapper">
                <header id="header">
                    <h1 id="logo"><NavLink to="/"><img style={{ height: 45 }} src="/images/dlt.png" /></NavLink></h1>
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
                <section className="wrapper style4 container">
                    <div className="content">
                        <section>
                        <a href="#" class="image featured"><img src="images/desk.jpeg" alt="desk" /></a>
                            <header>
                                <h3><strong>Services to Offer</strong></h3>
                            </header>
                            <ul style={{listStyleType: 'disc'}}>
                                        <li>Create personalize plans geared towards an individual’s needs</li>
                                        <li>Provide a hands-on approach from start to finish; Offer available resources, training, and the necessary tools</li>
                                        <li>Work cohesively with local employers and staffing agencies for job recruitments</li>
                                        <li>Network with local and state agencies on available housing programs and other assistance programs</li>
                                        <li>Work with companies in the private sector for available services </li>
                                        <li>Participate in community outreach programs for volunteer services. </li>
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

export default connect(mapState)(Services)