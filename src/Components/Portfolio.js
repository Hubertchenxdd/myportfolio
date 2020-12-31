import React, { Component } from 'react';
import shiny from "../assets/portfolio/Shiny.png"
import covid from "../assets/portfolio/covid_small_business.png"

class Portfolio extends Component {
  render() {

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works (To be updated)</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">



                <div key="Solution for local small businesses to survive through COVID-19" className="columns portfolio-item">
                    <div className="item-wrap">
                    <a href={"https://youtu.be/Q-cr23zdObQ"} title="Solution for local small businesses to survive through COVID-19">
                    <img alt="Solution for local small businesses to survive through COVID-19" src={covid}></img>
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                        <h5>"Solution for local small businesses to survive through COVID-19"</h5>
                           <p>"Data Analysis and Dashboards"</p>
                        </div>
                    </div>
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                    </a>
                    </div>
                </div>

                <div key="City of Portland Bicycle Count Web Application" className="columns portfolio-item">
                    <div className="item-wrap">
                    <a href={"https://hubertchen.shinyapps.io/project/"} title="City of Portland Bicycle Count Web Application">
                    <img alt="City of Portland Bicycle Count Web Application" src={shiny}></img>
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                        <h5>"City of Portland Bicycle Count Web Application"</h5>
                           <p>"Data Analysis and Dashboards"</p>
                        </div>
                    </div>
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                    </a>
                    </div>
                </div>



            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
