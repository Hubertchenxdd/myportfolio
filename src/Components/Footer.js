import React, { Component } from 'react';

class Footer extends Component {
  render() {

    return (
      <footer>

      <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              <li key="linkedin"><a href="https://www.linkedin.com/in/hubert-chen-tw/">
              <i className="fa fa-linkedin"></i></a></li>
              <li key="instagram"><a href="https://www.instagram.com/hubertchenxdd/">
              <i className="fa fa-instagram"></i></a></li>
              <li key="github"><a href="https://github.com/Hubertchenxdd">
              <i className="fa fa-github"></i></a></li>
           </ul>

           <ul className="copyright">
              <li>Poto credit to Ami Photography | Modified by Hubert Chen 2020</li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
