import React, { Component } from 'react';

class Header extends Component {
  render() {

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	          <li><a className="smoothscroll" href="#resume">Experience</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">This is Hsiu-Yuan Chen.</h1>
            <h3>I'm a <span>Grad Student at the University of Washington</span>.
                Former <span>Data Scientist Intern</span> at Accelya US Inc.</h3>
            <hr />
            <ul className="social">
                <li key="linkedin"><a href="https://www.linkedin.com/in/hubert-chen-tw/">
                <i className="fa fa-linkedin"></i></a></li>
                <li key="instagram"><a href="https://www.instagram.com/hubertchenxdd/">
                <i className="fa fa-instagram"></i></a></li>
                <li key="github"><a href="https://github.com/Hubertchenxdd">
                <i className="fa fa-github"></i></a></li>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
