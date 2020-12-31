import React, { Component } from 'react';
import author_img from '../assets/Hubert.png'

class About extends Component {
  render() {

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <div className="profile-pic" style={ {backgroundImage: `url(${author_img})`}}></div>
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>M.S. candidate with 3-year project and intern experiences in
            various areas, including Data Analytics, Data Science, and Data
            Visualization. I have solid programming skills in Python, R, and
            SQL backed by hands-on experiences in ETL, analysis results
            interpretation, and provision of strategic insights. Currently,
            I am looking for Data Scientist, Business Intelligence Engineer,
            and Data Analyst roles for new grads.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>5616 15th Ave NE<br />
						         Seattle WA, 98105
                   </span><br />
						   <span>2062256623</span><br />
                     <span>hubertchen0723@gmail.com</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href="https://drive.google.com/file/d/1wPN4NmF1clJohlF_e1rfRF0KV0eyH-Zc/view?usp=sharing" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
