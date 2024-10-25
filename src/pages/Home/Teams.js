import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faEdit,
  faList,
  faHome,
  faPlus,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  facebook,
  faFacebookF,
  faTwitterSquare,
  faDribbble,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
// import Carousel from "react-bootstrap/Carousel";
import { Carousel } from '@trendyol-js/react-carousel';


import React from "react";
// import './App.css';
import "../..//../src/App.css";

function OurTeams(props) {
  return (
    <div className="section team-section section-padding">
      <div className="container">
        {/* Team Wrap Start */}
        <div className="team-wrap">
          <div className="section-title text-center">
            <h3 className="sub-title">Highly Professional Staffs </h3>
            <h2 className="title">
              {" "}
              IT technology and technical fields professional staff
            </h2>
          </div>

          <div className="team-content-wrap">

            <div className="swiper-container team-active swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
          <Carousel  swiping={true}>
              
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-481208736fcf710c1"
                aria-live="polite"
                style={{ transitionDuration: "0ms" }}
              >
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                  data-swiper-slide-index={0}
                  role="group"
                  aria-label="1 / 9"
                  style={{ width: "352px", marginRight: "30px" }}
                >
                  <div className="single-team">
                    <div className="team-img">
                      <img
                        src="https://thepixelcurve.com/html/techmax/techmax/assets/images/team/team-2.jpg"
                        alt="timg"
                        className="img-fluid"
                        style={{ borderRadius: 6 }}
                      />
                    </div>
                    <div className="team-content">
                      <div className="team-social">
                        <ul className="social">
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faTwitterSquare} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faDribbble} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faBehance} />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h3 className="name">
                        <a href="#">Mike Holder</a>
                      </h3>
                      <span className="designation">Founder, Techmax</span>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                  data-swiper-slide-index={1}
                  role="group"
                  aria-label="2 / 9"
                  style={{ width: "352px", marginRight: "30px" }}
                >
                  <div className="single-team">
                    <div className="team-img">
                      <a href="team.html">
                        <img
                          src="https://thepixelcurve.com/html/techmax/techmax/assets/images/team/team-1.jpg"
                          alt=""
                          className="img-fluid"
                          style={{ borderRadius: 6 }}
                        />
                      </a>
                    </div>
                    <div className="team-content">
                      <div className="team-social">
                        <ul className="social">
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faTwitterSquare} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faDribbble} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faBehance} />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h3 className="name">
                        <a href="#">Mike Holder</a>
                      </h3>
                      <span className="designation">Founder, Techmax</span>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-prev"
                  data-swiper-slide-index={2}
                  role="group"
                  aria-label="3 / 9"
                  style={{ width: "352px", marginRight: "30px" }}
                >
                  <div className="single-team">
                    <div className="team-img">
                      <a href="team.html">
                        <img
                          src="https://thepixelcurve.com/html/techmax/techmax/assets/images/team/team-3.jpg"
                          alt=""
                          className="img-fluid"
                          style={{ borderRadius: 6 }}
                        />
                      </a>
                    </div>
                    <div className="team-content">
                      <div className="team-social">
                        <ul className="social">
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faTwitterSquare} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faDribbble} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faBehance} />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h3 className="name">
                        <a href="#">Mike Holder</a>
                      </h3>
                      <span className="designation">Founder, Techmax</span>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-active"
                  data-swiper-slide-index={0}
                  role="group"
                  aria-label="4 / 9"
                  style={{ width: "352px", marginRight: "30px" }}
                >
                  <div className="single-team">
                    <div className="team-img">
                      <a href="team.html">
                        <img
                          src="https://thepixelcurve.com/html/techmax/techmax/assets/images/team/team-2.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="team-content">
                      <div className="team-social">
                        <ul className="social">
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faTwitterSquare} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faDribbble} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faBehance} />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h3 className="name">
                        <a href="#">Mike Holder</a>
                      </h3>
                      <span className="designation">Founder, Techmax</span>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-next"
                  data-swiper-slide-index={1}
                  role="group"
                  aria-label="5 / 9"
                  style={{ width: "352px", marginRight: "30px" }}
                >
                  <div className="single-team">
                    <div className="team-img">
                      <a href="team.html">
                        <img
                          src="https://thepixelcurve.com/html/techmax/techmax/assets/images/team/team-1.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="team-content">
                      <div className="team-social">
                        <ul className="social">
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faTwitterSquare} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faDribbble} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faBehance} />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h3 className="name">
                        <a href="#">Mike Holder</a>
                      </h3>
                      <span className="designation">Founder, Techmax</span>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate-prev"
                  data-swiper-slide-index={2}
                  role="group"
                  aria-label="6 / 9"
                  style={{ width: "352px", marginRight: "30px" }}
                >
                  <div className="single-team">
                    <div className="team-img">
                      <a href="team.html">
                        <img
                          src="https://thepixelcurve.com/html/techmax/techmax/assets/images/team/team-3.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="team-content">
                      <div className="team-social">
                        <ul className="social">
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faTwitterSquare} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faDribbble} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faBehance} />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h3 className="name">
                        <a href="#">Mike Holder</a>
                      </h3>
                      <span className="designation">Founder, Techmax</span>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                  data-swiper-slide-index={0}
                  role="group"
                  aria-label="7 / 9"
                  style={{ width: "352px", marginRight: "30px" }}
                >
                  <div className="single-team">
                    <div className="team-img">
                      <a href="team.html">
                        <img
                          src="https://thepixelcurve.com/html/techmax/techmax/assets/images/team/team-1.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="team-content">
                      <div className="team-social">
                        <ul className="social">
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faTwitterSquare} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faDribbble} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faBehance} />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h3 className="name">
                        <a href="#">Mike Holder</a>
                      </h3>
                      <span className="designation">Founder, Techmax</span>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                  data-swiper-slide-index={1}
                  role="group"
                  aria-label="8 / 9"
                  style={{ width: "352px", marginRight: "30px" }}
                >
                  <div className="single-team">
                    <div className="team-img">
                      <a href="team.html">
                        <img
                          src="https://thepixelcurve.com/html/techmax/techmax/assets/images/team/team-2.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="team-content">
                      <div className="team-social">
                        <ul className="social">
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faTwitterSquare} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faDribbble} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faBehance} />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h3 className="name">
                        <a href="#">Mike Holder</a>
                      </h3>
                      <span className="designation">Founder, Techmax</span>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate"
                  data-swiper-slide-index={2}
                  role="group"
                  aria-label="9 / 9"
                  style={{ width: "352px", marginRight: "30px" }}
                >
                  <div className="single-team">
                    <div className="team-img">
                      <a href="team.html">
                        <img
                          src="https://thepixelcurve.com/html/techmax/techmax/assets/images/team/team-2.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="team-content">
                      <div className="team-social">
                        <ul className="social">
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faTwitterSquare} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faDribbble} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faBehance} />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h3 className="name">
                        <a href="#">Mike Holder</a>
                      </h3>
                      <span className="designation">Founder, Techmax</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                <span
                  className="swiper-pagination-bullet swiper-pagination-bullet-active"
                  tabIndex={0}
                  role="button"
                  aria-label="Go to slide 1"
                />
                <span
                  className="swiper-pagination-bullet"
                  tabIndex={0}
                  role="button"
                  aria-label="Go to slide 2"
                />
                <span
                  className="swiper-pagination-bullet"
                  tabIndex={0}
                  role="button"
                  aria-label="Go to slide 3"
                />
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              />
          </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeams;
