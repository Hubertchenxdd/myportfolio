import React, { Component } from 'react';

class Resume extends Component {
  render() {
    

    return (
    <section id="resume">
    <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">

               <div key="University of Washington"><h3>University of Washington</h3>
               <p className="info">Master's Degree, Transportation Engineering
               <span>&bull;</span><em className="date">Sep. 2019 - Present</em></p>
               <p>Coursework: Inferential Data Analysis for Engineers,
                  Data Management and Visualization, Machine Learning,
                  Introduction to Algorithms, Database Systems
               </p>
               </div>

               <div key="National Taiwan University"><h3>National Taiwan University</h3>
               <p className="info">Bachelor's Degree, Civil Engineering
               <span>&bull;</span><em className="date">Sep. 2014 - Jun. 2018</em></p>
               <p>Coursework: Object-Oriented Programming,
                  Data Science in Engineering Applications,
                  Traveler Behavior Analysis, Engineering Statistics
               </p>
               </div>

               </div>
            </div>
         </div>
      </div>

      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">

         <div key="Smart Transportation Applications & Research Lab"><h3>Smart Transportation Applications & Research Lab</h3>
             <p className="info">Graduate Research Assistant
             <span>&bull;</span> <em className="date">Sep. 2019 - Present</em></p>
             <p className="bullet"><span>&bull; </span>
                Developed an imputation cell in LSTM that can infer missing
                values and make predictions simultaneously with Pytorch and
                integrated with a CNN based framework to predict network-wide
                traffic speed on I-5 freeway which surpassed the state-of-art
                methods in terms of accuracy by 22.3%
             </p>
             <p className="bullet"><span>&bull; </span>
                Employed ARIMA, Prophet to predict traffic parameters
                during Covid-19 using Python
             </p>
             <p className="skills">Skills: Python, Pytorch, TensorFlow, Keras, Machine Learning, Deep Learning</p>
         </div>

         <div key="Accelya US Inc."><h3>Accelya US Inc.</h3>
             <p className="info">Data Scientist Intern
             <span>&bull;</span> <em className="date">Jun. 2020 - Aug. 2020</em></p>
             <p className="bullet"><span>&bull; </span>
                Deployed an automation pipeline with Java and Amazon Web
                Service (AWS) and improved the shipment weight prediction
                model in an application serving Finnair with H2O, reducing
                the RMSE by over 20%
             </p>
             <p className="bullet"><span>&bull; </span>
                Designed a stacked LSTM-based network to forecast the demand
                 for global network-wide air cargo shipment using Keras, saving
                  the cycle time by over 80%
             </p>
             <p className="bullet"><span>&bull; </span>
                Created a dashboard visualizing the supply and demand of each
                OD pairs using Tableau
             </p>
             <p className="skills">Skills: Python, SQL, Tableau, Java, H2O, AWS, Machine Learning, Data Analysis</p>
         </div>

         <div key="Ministry of Transportation and Communications"><h3>Ministry of Transportation and Communications</h3>
             <p className="info">Data Analyst
             <span>&bull;</span> <em className="date">May 2018 – Aug. 2019</em></p>
             <p className="bullet"><span>&bull; </span>
                Processed 2+TB of data using SQL and visualized the statistics
                of highway crashes using Tableau
             </p>
             <p className="bullet"><span>&bull; </span>
                Predicted number of accidents using PCA, regression, and neural
                network with Python
             </p>
             <p className="bullet"><span>&bull; </span>
                Explored relations between road features, human factors, and
                crashes with association rule and survival analysis using R
             </p>
             <p className="skills">Skills: Python, R, SQL, Tableau, Machine Learning, Feature Engineering, Data Analysis</p>
         </div>

         </div>
      </div>
    </section>
    );
  }
}

export default Resume;
