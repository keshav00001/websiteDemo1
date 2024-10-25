import React from "react";
// import './App.css';
import '../..//../src/App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function Tetimonial(props) {
    return (
        <div className="section testimonial-section section-padding" style={{ backgroundImage: 'url(https://thepixelcurve.com/html/techmax/techmax/assets/images/bg/testi-bg.jpg)' }}>
            <div className="container">
                <div className="testimonial-wrap">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="section-title">
                                <h3 className="sub-title">Client Testimonial</h3>
                                <h2 className="title" style={{ color: "#ffffff" }}>20k+ clients love our service &amp; IT related solutions </h2>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={3}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide>
                                    <div className="swiper-wrapper" id="swiper-wrapper-f4c01d55c22b8fee" aria-live="polite" style={{ transform: 'translate3d(-756px, 0px, 0px)', transitionDuration: '0ms' }}><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index={1} role="group" aria-label="1 / 7" style={{ width: '348px', marginRight: '30px' }}>
                                        <div className="single-testimonial">
                                            <div className="testimonial-content">
                                                <h3 className="title">Right Aagency</h3>
                                                <p>Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee </p>
                                                <div className="testimonial-author-wrap" style={{ background: 'red' }}>
                                                    <div className="testimonial-author" style={{ background: 'blue' }}>
                                                        <div className="author-img" style={{ background: 'yellow' }}>
                                                            <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/author-2.jpg" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="author-text">
                                                            <h5 className="name">Mike Holder</h5>
                                                            <span className="designation">CEO, Harlond inc</span>
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-quote">
                                                        <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/quote.png" img-fluid alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>

                                </SwiperSlide>

                            </Swiper>
                            <div className="testimonial-slider-wrap">
                                <div className="swiper-container testimonial-active swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                                    <div className="swiper-wrapper" id="swiper-wrapper-f4c01d55c22b8fee" aria-live="polite" style={{ transform: 'translate3d(-756px, 0px, 0px)', transitionDuration: '0ms' }}><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index={1} role="group" aria-label="1 / 7" style={{ width: '348px', marginRight: '30px' }}>
                                        <div className="single-testimonial">
                                            <div className="testimonial-content">
                                                <h3 className="title">Right Aagency</h3>
                                                <p>Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee </p>
                                                <div className="testimonial-author-wrap" style={{ background: 'red' }}>
                                                    <div className="testimonial-author" style={{ background: 'blue' }}>
                                                        <div className="author-img" style={{ background: 'yellow' }}>
                                                            <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/author-2.jpg" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="author-text">
                                                            <h5 className="name">Mike Holder</h5>
                                                            <span className="designation">CEO, Harlond inc</span>
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-quote">
                                                        <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/quote.png" img-fluid alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        <div className="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index={2} role="group" aria-label="2 / 7" style={{ width: '348px', marginRight: '30px' }}>
                                            <div className="single-testimonial">
                                                <div className="testimonial-content">
                                                    <h3 className="title" >They Are Best</h3>
                                                    <p>Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee </p>
                                                    <div className="testimonial-author-wrap">
                                                        <div className="testimonial-author">
                                                            <div className="author-img">
                                                                <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/author-1.jpg" alt="" />
                                                            </div>
                                                            <div className="author-text">
                                                                <h5 className="name">Mike Holder</h5>
                                                                <span className="designation">CEO, Harlond inc</span>
                                                            </div>
                                                        </div>
                                                        <div className="testimonial-quote">
                                                            <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/quote.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide swiper-slide-active" data-swiper-slide-index={0} role="group" aria-label="3 / 7" style={{ width: '348px', marginRight: '30px' }}>
                                            <div className="single-testimonial">
                                                <div className="testimonial-content">
                                                    <h3 className="title">They Are Best</h3>
                                                    <p>Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee </p>
                                                    <div className="testimonial-author-wrap">
                                                        <div className="testimonial-author">
                                                            <div className="author-img">
                                                                <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/author-1.jpg" alt="" />
                                                            </div>
                                                            <div className="author-text">
                                                                <h5 className="name">Mike Holder</h5>
                                                                <span className="designation">CEO, Harlond inc</span>
                                                            </div>
                                                        </div>
                                                        <div className="testimonial-quote">
                                                            <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/quote.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide swiper-slide-next" data-swiper-slide-index={1} role="group" aria-label="4 / 7" style={{ width: '348px', marginRight: '30px' }}>
                                            <div className="single-testimonial">
                                                <div className="testimonial-content">
                                                    <h3 className="title">Right Aagency</h3>
                                                    <p>Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee </p>
                                                    <div className="testimonial-author-wrap">
                                                        <div className="testimonial-author">
                                                            <div className="author-img">
                                                                <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/author-2.jpg" alt="" />
                                                            </div>
                                                            <div className="author-text">
                                                                <h5 className="name">Mike Holder</h5>
                                                                <span className="designation">CEO, Harlond inc</span>
                                                            </div>
                                                        </div>
                                                        <div className="testimonial-quote">
                                                            <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/quote.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index={2} role="group" aria-label="5 / 7" style={{ width: '348px', marginRight: '30px' }}>
                                            <div className="single-testimonial">
                                                <div className="testimonial-content">
                                                    <h3 className="title">They Are Best</h3>
                                                    <p>Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee </p>
                                                    <div className="testimonial-author-wrap">
                                                        <div className="testimonial-author">
                                                            <div className="author-img">
                                                                <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/author-1.jpg" alt="" />
                                                            </div>
                                                            <div className="author-text">
                                                                <h5 className="name">Mike Holder</h5>
                                                                <span className="designation">CEO, Harlond inc</span>
                                                            </div>
                                                        </div>
                                                        <div className="testimonial-quote">
                                                            <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/quote.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index={0} role="group" aria-label="6 / 7" style={{ width: '348px', marginRight: '30px' }}>
                                            <div className="single-testimonial">
                                                <div className="testimonial-content">
                                                    <h3 className="title">They Are Best</h3>
                                                    <p>Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee </p>
                                                    <div className="testimonial-author-wrap">
                                                        <div className="testimonial-author">
                                                            <div className="author-img">
                                                                <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/author-1.jpg" alt="" />
                                                            </div>
                                                            <div className="author-text">
                                                                <h5 className="name">Mike Holder</h5>
                                                                <span className="designation">CEO, Harlond inc</span>
                                                            </div>
                                                        </div>
                                                        <div className="testimonial-quote">
                                                            <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/quote.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index={1} role="group" aria-label="7 / 7" style={{ width: '348px', marginRight: '30px' }}>
                                            <div className="single-testimonial">
                                                <div className="testimonial-content">
                                                    <h3 className="title">Right Aagency1</h3>
                                                    <p>Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee </p>
                                                    <div className="testimonial-author-wrap">
                                                        <div className="testimonial-author">
                                                            <div className="author-img">
                                                                <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/author-2.jpg" alt="" />
                                                            </div>
                                                            <div className="author-text">
                                                                <h5 className="name">Mike Holder</h5>
                                                                <span className="designation">CEO, Harlond inc</span>
                                                            </div>
                                                        </div>
                                                        <div className="testimonial-quote">
                                                            <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/quote.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-arrow swiper-button-next" tabIndex={0} role="button" aria-label="Next slide" aria-controls="swiper-wrapper-f4c01d55c22b8fee" />
                                    <div className="testimonial-arrow swiper-button-prev" tabIndex={0} role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-f4c01d55c22b8fee" />
                                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tetimonial;
