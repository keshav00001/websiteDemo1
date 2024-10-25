import React from "react";
// import './App.css';
import "../..//../src/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faEdit,
  faList,
  faHome,
  faPlus,
  faSearch,
  faUser,
  faLongArrowAltRight,
  faLongArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function Skills(props) {
  return (
    <div >
      {/* <p>Skill</p> */}
      <div className="section skill-section section-padding">
        <div className="container" style={{}}>
          <div className="skill-wrap">
            <div className="skill-content-wrap">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="skill-content-left">
                    <div className="experience">
                      <h2 className="number" style={{}}>
                        25+
                      </h2>
                      <span>Years of experience</span>
                    </div>
                    <h3 className="title" style={{}}>
                      We run all kinds of <span>IT services</span> that vow your
                      success
                    </h3>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div
                    className="skill-content-right"
                    style={{ paddingLeft: 150 }}
                  >
                    <h3 className="title1" style={{ fontSize: 30 }}>
                      Accelerate innovation with world-class tech teams We’ll
                      match you to an entire remote technology
                    </h3>
                    <div className="skill-bar-wrap">
                      <div className="skill-item" style={{ marginTop: 30 }}>
                        <div
                          className="skill-header"
                          style={{ position: "relative" }}
                        >
                          <h5 className="skill-title">IT Managment</h5>
                          <span className="skill-percentage">
                            <span className="counter">80</span>%
                          </span>
                        </div>
                        <div className="skill-bar">
                          <div className="bar-inner">
                            <div
                              className="progress-line"
                              data-width={80}
                              style={{ width: "80%" }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="skill-item">
                        <div className="skill-header">
                          <h5 className="skill-title">Data Security</h5>
                          <span className="skill-percentage">
                            <span className="counter">90</span>%
                          </span>
                        </div>
                        <div className="skill-bar">
                          <div className="bar-inner">
                            <div
                              className="progress-line"
                              data-width={90}
                              style={{ width: "90%" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <div className="skill-header">
                          <h5 className="skill-title">Solution</h5>
                          <span className="skill-percentage">
                            <span className="counter">90</span>%
                          </span>
                        </div>
                        <div className="skill-bar">
                          <div className="bar-inner">
                            <div
                              className="progress-line"
                              data-width={90}
                              style={{ width: "90%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-img-wrap">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="skill-img-item">
                    <div className="skill-img">
                      <a className="image" href="#">
                        <img
                          src="https://thepixelcurve.com/html/techmax/techmax/assets/images/skill/skill-img-1.jpg"
                          alt=""
                        />
                      </a>
                      <div className="skill-img-text">
                        <h3 className="title">
                          <a href="#" className="W_white">
                            Data Security
                          </a>
                        </h3>
                        <a className="skill-btn" href="#">
                          Learn More <FontAwesomeIcon icon={faLongArrowRight} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="skill-img-item">
                    <div className="skill-img">
                      <a className="image" href="#">
                        <img
                          src="https://thepixelcurve.com/html/techmax/techmax/assets/images/skill/skill-img-2.jpg"
                          alt=""
                        />
                      </a>
                      <div className="skill-img-text">
                        <h3 className="title">
                          <a href="#" className="W_white">
                            IT Managment
                          </a>
                        </h3>
                        <a className="skill-btn" href="#">
                          Learn More <FontAwesomeIcon icon={faLongArrowRight} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="skill-img-item">
                    <div className="skill-img">
                      <a className="image" href="#">
                        <img
                          src="https://thepixelcurve.com/html/techmax/techmax/assets/images/skill/skill-img-3.jpg"
                          alt=""
                        />
                      </a>
                      <div className="skill-img-text">
                        <h3 className="title">
                          <a href="#" className="W_white">
                            Digital Marketing
                          </a>
                        </h3>
                        <a className="skill-btn" href="#">
                          Learn More <FontAwesomeIcon icon={faLongArrowRight} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="skill-img-item">
                    <div className="skill-img">
                      <a className="image" href="#">
                        <img
                          src="https://thepixelcurve.com/html/techmax/techmax/assets/images/skill/skill-img-4.jpg"
                          alt=""
                        />
                      </a>
                      <div className="skill-img-text">
                        <h3 className="title">
                          <a href="#" className="W_white">
                            Networking
                          </a>
                        </h3>
                        <a className="skill-btn " href="#">
                          Learn More <FontAwesomeIcon icon={faLongArrowRight} />
                        </a>
                      </div>
                    </div>
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

export default Skills;
