import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer mt-3">
        <h2>Contact Us</h2>
        <div className="social-icons">
          <a href="https://facebook.com">
            <i className="fab fa-facebook-square fa-2x"></i>
          </a>
          <a href="https://twitter.com">
            <i className="fab fa-twitter-square fa-2x"></i>
          </a>
          <a href="https://linkedin.com">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com">
            <i className="fab fa-github-square fa-2x"></i>
          </a>
        </div>
        <div className="footerEmail">
          <p>Email: hossam.sahss120@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default Footer;
