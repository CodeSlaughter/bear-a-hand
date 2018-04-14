import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

/**
 * COMPONENT
 */
export class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            subject: '',
            message: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        console.log('submitting')
        const response = this.state;
        console.log(response)
        axios.post('/api/email', response)
          .then(function (res) {
            console.log(res);
          })
          .catch(function (error) {
            console.log(error);
          });
        this.setState({
            email: '',
            name: '',
            subject: '',
            message: ''
        })
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    render = () => {
        return (
            <div id="page-wrapper">
                <header id="header">
                    <h1 id="logo"><NavLink to="/"><img style={{ height: 45 }} src="/images/dlt.png" /></NavLink></h1>
                    <nav id="nav">
                        <ul>
                            <li><NavLink to="/about-us">About Us</NavLink></li>
                            <li className="submenu"><NavLink to="/services">Services</NavLink>
                                <ul>
                                    <li ><a href="/trainings">Trainings</a></li>
                                </ul>
                            </li>
                            <li className="submenu current"><NavLink to="/contact">Contact</NavLink>
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
                        <span className="icon fa-envelope" />
                        <h2>Get In Touch</h2>
                        <p>Have questions? Drop us a line.</p>
                    </header>
                    <section className="wrapper style4 special container 75%">
                        <div className="content">
                            <form onSubmit={this.handleFormSubmit}>
                                <input type="text" name="name" value={this.state.name} placeholder="Name" onChange={this.handleInputChange} />
                                <hr />
                                <input type="text" name="email" value={this.state.email} placeholder="Email" onChange={this.handleInputChange} />
                                <hr />
                                <input type="text" name="subject" value={this.state.subject} placeholder="Subject" onChange={this.handleInputChange} />
                                <hr />
                                <textarea name="message" value={this.state.message} placeholder="Message" rows="7" onChange={this.handleInputChange} />
                                <hr />
                                <div className="row">
                                    <div className="12u">
                                        <ul className="buttons">
                                            <li><input type="submit" className="special" value="Send Message" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </article>
                <footer id="footer">

                    <ul className="icons">
                        <li><a href="#" className="icon circle fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon circle fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon circle fa-google-plus"><span className="label">Google+</span></a></li>
                        <li><a href="#" className="icon circle fa-github"><span className="label">Github</span></a></li>
                        <li><a href="#" className="icon circle fa-dribbble"><span className="label">Dribbble</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </footer>
            </div>
        )
    }
}


/**
 * CONTAINER
 */
const mapState = (state) => {
    return {
        email: state.user.email
    }
}

export default connect(mapState)(Contact)