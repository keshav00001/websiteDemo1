import React from "react";
// import './App.css';
import '../..//../src/App.css'

function Hero(props) {
  return (
    <div>
      {/* <p>Hero</p> */}
      <div className="section tech-hero-section" style={{ backgroundImage: "url(" + "https://thepixelcurve.com/html/techmax/techmax/assets/images/hero-1.jpg" + ")", }}>
        <div className="shape-1" style={{
          width: "417px",
          height: "417px",
          background: "linear-gradient(150deg, #035cdd 0%, #4ecdea 100%)",
          opacity: 0.9,
          borderRadius:"50%",
          position:'absolute',
          top: "115px",
          left: "50px",
          zIndex:-1
        }} />
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              {/* Hero Content Start */}
              <div className="hero-content">
                <h3 className="sub-title aos-init aos-animate" data-aos-delay={600} data-aos="fade-up">Technology Releted Consultancy</h3>
                <h2 className="title aos-init aos-animate" data-aos="fade-up" data-aos-delay={700}>We bring great Ideas to life</h2>
                <p data-aos="fade-up" data-aos-delay={800} className="aos-init aos-animate">We provide the most responsive and functional IT design for companies and businesses worldwide.</p>
                <div className="hero-btn aos-init aos-animate" data-aos="fade-up" data-aos-delay={900} >
                  <a  className="btn1" href="#" >Read More</a>
                </div>
              </div>
              {/* Hero Content End */}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Hero;
