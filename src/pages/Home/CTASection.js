import React from "react";
// import './App.css';
import '../..//../src/App.css'

function CTASection(props) {
  return (
    <div>
      <p style={{color:'#ffffff'}}>section</p>
      <div className="container">
        <div className="cta-wrap" style={{backgroundImage: 'url(https://thepixelcurve.com/html/techmax/techmax/assets/images/bg/cta-bg.jpg)'}}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="cta-left">
                <h2 className="title">Let's make something beautiful together</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cta-right">
                <div>
                <span className="number">+44 920 090 505</span>
                </div>
                <a className="ctaBtn" href="#">See More Projects</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CTASection;
