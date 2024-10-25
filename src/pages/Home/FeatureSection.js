import React from "react";
import "../..//../src/App.css";

function FeatureSection(props) {
  return (
    <div>
      <div
        className="section features-section row "
        style={{
          backgroundImage:
            "url(https://thepixelcurve.com/html/techmax/techmax/assets/images/bg/features-bg.jpg)",
        }}
      >
    
          <div className="features-thumb d-flex align-items-end ">
            <div className="shape-1">
              <img
                src="https://thepixelcurve.com/html/techmax/techmax/assets/images/features-shape.png"
                className="feature_Shapeimg"
                alt="..."
              />
            </div>
            <div className="container">
              <img
                src="https://thepixelcurve.com/html/techmax/techmax/assets/images/features-img.png"
                alt=".."
                className="img-fluid feature_Shapeimg2"
              />
            </div>
          </div>

          <div className="features-wrap">
            <div className="row">
              <div className="col-xl-6 offset-xl-6">
                <div className="features-content-wrap">
                  <div className="section-title">
                    <h3 className="sub-title">Why Choose Us</h3>
                    <h2 className="title">
                      We provide truly prominent IT solutions for your success
                    </h2>
                  </div>
                  <div className="features-content">
                    <ul>
                      <li className="features-item">
                        <div className="features-icon">
                          <img
                            src="https://thepixelcurve.com/html/techmax/techmax/assets/images/features-1.png"
                            alt=""
                          />
                        </div>
                        <div className="features-text">
                          <h3 className="title"> Expert Team</h3>
                          <p>
                            Accelerate innovation with world-class tech teams
                          </p>
                        </div>
                      </li>
                      <li className="features-item">
                        <div className="features-icon">
                          <img
                            src="https://thepixelcurve.com/html/techmax/techmax/assets/images/features-2.png"
                            alt=""
                          />
                        </div>
                        <div className="features-text">
                          <h3 className="title">Quality Contro</h3>
                          <p>
                            Accelerate innovation with world-class tech teams
                          </p>
                        </div>
                      </li>
                      <li className="features-item">
                        <div className="features-icon">
                          <img
                            src="https://thepixelcurve.com/html/techmax/techmax/assets/images/features-3.png"
                            alt=""
                          />
                        </div>
                        <div className="features-text">
                          <h3 className="title">Integration</h3>
                          <p>
                            Accelerate innovation with world-class tech teams
                          </p>
                        </div>
                      </li>
                      <li className="features-item">
                        <div className="features-icon">
                          <img
                            src="https://thepixelcurve.com/html/techmax/techmax/assets/images/features-3.png"
                            alt=""
                          />
                        </div>
                        <div className="features-text">
                          <h3 className="title">24/7 Support</h3>
                          <p>
                            Accelerate innovation with world-class tech teams
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="features-link">
                      <p>
                        This is only glimpse see <a href="#">All Features</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default FeatureSection;
