import React from "react";
import "../..//../src/App.css";
import Carousel from "react-bootstrap/Carousel";
import { faLongArrowAltLeft, faLongArrowAltRight, faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CaseStudy(props) {
  return (
    <div>
      <div className="section case-study-section section-padding">
        <div className="container">
          <div className="case-study-wrap">
            <div className="section-title text-center">
              <h3 className="sub-title">Who We Are</h3>
              <h2 className="title">We are proud team of great project</h2>
            </div>
          </div>
        </div>
        <div className="case-study-slider-wrap">
          <div
            className="swiper-container case-study-active swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
            style={{ cursor: "grab" }}
          >
            <div
              className="swiper-wrapper"
              id="swiper-wrapper-7812f9ebb0a33a18"
              aria-live="polite"
              style={{
                transitionDuration: "0ms",
                transform: "translate3d(-1034.25px, 0px, 0px)",
              }}
            >
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                data-swiper-slide-index={1}
                role="group"
                aria-label="1 / 7"
                style={{ width: "659.5px", marginRight: "30px" }}
              >
                <div
                  className="single-case-study text-center"
                  style={{
                    backgroundImage:
                      "url(https://thepixelcurve.com/html/techmax/techmax/assets/images/c-study-1.jpg)",
                  }}
                >
                  <div className="case-study-content">
                    <div className="case-study-title">
                      <h3 className="title">Analytic Solutions</h3>
                      <span>IT Technology</span>
                    </div>
                    <div className="case-study-text">
                      <p>
                        Accelerate innovation with world-class tech teams We’ll
                        match you to an entire remote team of incredible
                        freelance talent for all your software development
                        needs.
                      </p>
                    </div>
                    <div className="case-study-link">
                      <a href="#">
                        <FontAwesomeIcon icon={faLongArrowAltLeft} />

                      </a>
                    </div>
                  </div>
                </div>
                {/* Single Case Study End */}
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-prev"
                data-swiper-slide-index={2}
                role="group"
                aria-label="2 / 7"
                style={{ width: "659.5px", marginRight: "30px" }}
              >
                <div
                  className="single-case-study text-center"
                  style={{
                    backgroundImage:
                      "url(https://thepixelcurve.com/html/techmax/techmax/assets/images/c-study-2.jpg)",
                  }}
                >
                  <div className="case-study-content">
                    <div className="case-study-title">
                      <h3 className="title">Product Design</h3>
                      <span>IT Technology</span>
                    </div>
                    <div className="case-study-text">
                      <p>
                        Accelerate innovation with world-class tech teams We’ll
                        match you to an entire remote team of incredible
                        freelance talent for all your software development
                        needs.
                      </p>
                    </div>
                    <div className="case-study-link">
                      <a href="#">
                        <FontAwesomeIcon icon={faLongArrowAltLeft} />

                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-active"
                data-swiper-slide-index={0}
                role="group"
                aria-label="3 / 7"
                style={{ width: "659.5px", marginRight: "30px" }}
              >
                <div
                  className="single-case-study text-center"
                  style={{
                    backgroundImage:
                      "url(https://thepixelcurve.com/html/techmax/techmax/assets/images/c-study-3.jpg)",
                  }}
                >
                  <div className="case-study-content">
                    <div className="case-study-title">
                      <h3 className="title">Aeroland Protocol</h3>
                      <span>Cyber Secutiy</span>
                    </div>
                    <div className="case-study-text">
                      <p>
                        Accelerate innovation with world-class tech teams We’ll
                        match you to an entire remote team of incredible
                        freelance talent for all your software development
                        needs.
                      </p>
                    </div>
                    <div className="case-study-link">
                      <a href="#">
                        <FontAwesomeIcon icon={faLongArrowAltLeft} />

                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-next"
                data-swiper-slide-index={1}
                role="group"
                aria-label="4 / 7"
                style={{ width: "659.5px", marginRight: "30px" }}
              >
                <div
                  className="single-case-study text-center"
                  style={{
                    backgroundImage:
                      "url(https://thepixelcurve.com/html/techmax/techmax/assets/images/c-study-4.jpg)",
                  }}
                >
                  <div className="case-study-content">
                    <div className="case-study-title">
                      <h3 className="title">Analytic Solutions</h3>
                      <span>IT Technology</span>
                    </div>
                    <div className="case-study-text">
                      <p>
                        Accelerate innovation with world-class tech teams We’ll
                        match you to an entire remote team of incredible
                        freelance talent for all your software development
                        needs.
                      </p>
                    </div>
                    <div className="case-study-link">
                      <a href="#">
                      <FontAwesomeIcon icon={faLongArrowAltLeft} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate-prev"
                data-swiper-slide-index={2}
                role="group"
                aria-label="5 / 7"
                style={{ width: "659.5px", marginRight: "30px" }}
              >
                <div
                  className="single-case-study text-center"
                  style={{
                    backgroundImage:
                      "url(https://thepixelcurve.com/html/techmax/techmax/assets/images/c-study-5.jpg)",
                  }}
                >
                  <div className="case-study-content">
                    <div className="case-study-title">
                      <h3 className="title">Product Design</h3>
                      <span>IT Technology</span>
                    </div>
                    <div className="case-study-text">
                      <p>
                        Accelerate innovation with world-class tech teams We’ll
                        match you to an entire remote team of incredible
                        freelance talent for all your software development
                        needs.
                      </p>
                    </div>
                    <div className="case-study-link">
                      <a href="#">
                        <FontAwesomeIcon icon={faLongArrowAltLeft} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                data-swiper-slide-index={0}
                role="group"
                aria-label="6 / 7"
                style={{ width: "659.5px", marginRight: "30px" }}
              >
                <div
                  className="single-case-study text-center"
                  style={{
                    backgroundImage:
                      "url(https://thepixelcurve.com/html/techmax/techmax/assets/images/c-study-6.jpg)",
                  }}
                >
                  <div className="case-study-content">
                    <div className="case-study-title">
                      <h3 className="title">Aeroland Protocol</h3>
                      <span>Cyber Secutiy</span>
                    </div>
                    <div className="case-study-text">
                      <p>
                        Accelerate innovation with world-class tech teams We’ll
                        match you to an entire remote team of incredible
                        freelance talent for all your software development
                        needs.
                      </p>
                    </div>
                    <div className="case-study-link">
                      <a href="#">
                        <FontAwesomeIcon icon={faLongArrowAltLeft} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                data-swiper-slide-index={1}
                role="group"
                aria-label="7 / 7"
                style={{ width: "659.5px", marginRight: "30px" }}
              >
                {/* Single Case Study Start */}
                <div
                  className="single-case-study text-center"
                  style={{
                    backgroundImage:
                      "url(https://thepixelcurve.com/html/techmax/techmax/assets/images/c-study-7.jpg)",
                  }}
                >
                  <div className="case-study-content">
                    <div className="case-study-title">
                      <h3 className="title">Analytic Solutions</h3>
                      <span>IT Technology</span>
                    </div>
                    <div className="case-study-text">
                      <p>
                        Accelerate innovation with world-class tech teams We’ll
                        match you to an entire remote team of incredible
                        freelance talent for all your software development
                        needs.
                      </p>
                    </div>
                    <div className="case-study-link">
                      <a href="#">
                         <FontAwesomeIcon icon={faLongArrowAltRight} />

                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="case-study-arrow swiper-button-next"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
              aria-controls="swiper-wrapper-7812f9ebb0a33a18"
            />
            <div
              className="case-study-arrow swiper-button-prev"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
              aria-controls="swiper-wrapper-7812f9ebb0a33a18"
            />
            <div className="swiper-pagination" />
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            />
          </div>
        </div>


        {/* <Carousel wrap>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://thepixelcurve.com/html/techmax/techmax/assets/images/c-study-1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-20"
              src="https://thepixelcurve.com/html/techmax/techmax/assets/images/c-study-2.jpg"
            
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://thepixelcurve.com/html/techmax/techmax/assets/images/c-study-3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://thepixelcurve.com/html/techmax/techmax/assets/images/c-study-4.jpg"
              alt="four slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://thepixelcurve.com/html/techmax/techmax/assets/images/c-study-5.jpg"
              alt="fifthlide"
            />

            <Carousel.Caption>
              <h3>Fifth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://thepixelcurve.com/html/techmax/techmax/assets/images/c-study-6.jpg"
              alt="six slide"
            />

            <Carousel.Caption>
              <h3>Fifth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="container img-fluid ">
            <img
              className="container img-fluid "
              src="https://thepixelcurve.com/html/techmax/techmax/assets/images/c-study-6.jpg"
              alt="seven slide"
            />

            <Carousel.Caption>
              <h3>Seven slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel> */}

        <div className="row jusify-content-center">
          <div className="case-study-btn text-center">
            <a className="btn2" href="#">
              See More Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
