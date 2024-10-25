import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapPin, faPhone, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { faFacebookF, faLinkedinIn, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import{FaTwitterSquare} from 'react-icons/fa';
import{BsFacebook,BsLinkedin,} from 'react-icons/bs';

function Footer(props) {
  return (
      <div className="section footer-section img-fluid"  style={{ backgroundImage: 'url(https://thepixelcurve.com/html/techmax/techmax/assets/images/bg/footer-bg.jpg)' }}>
        <div className="container">
          <div className="footer-widget-wrap">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget-about">
                  <a className="footer-logo" href="index.html"><img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/logo-white.png" alt="Logo" /></a>
                  <div className="widget-info">
                    <ul>

                      <div className="row Footer-content" >
                        <div className="info-text">
                          <span> <FontAwesomeIcon icon={faPhone} className="Footer-phoneIcon" />
                            &nbsp; +91 458 654 528</span>
                        </div>
                      </div>

                      <div className="row Footer-content" >
                        <div className="info-text">
                          <span> <FontAwesomeIcon icon={faEnvelope} className="Footer-phoneIcon" />
                            &nbsp; info@example.com</span>
                        </div>
                      </div>

                      <div className="row Footer-content" >
                        <div className="info-text">
                          <span> <FontAwesomeIcon icon={faMapPin} className="Footer-phoneIcon" />
                            &nbsp; 60 East 65th Street, NY</span>
                        </div>
                      </div>

                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Useful Links</h4>
                  <div className="widget-link">
                    <p>Terms &amp; Conditions</p>
                    <p>About Company</p>
                    <p>Payment Gatway</p>
                    <p>Policy</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Our Services</h4>
                  <div className="widget-link">
                    <p>Data Security</p>
                    <p>IT Managment</p>
                    <p>Outsourcing</p>
                    <p>Networking</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Support</h4>
                  <div className="widget-link">
                    <p>Documentation</p>
                    <p>Support</p>
                    <p>FAQS</p>
                    <p>Download</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright-area">
          <div className="container">
            <div className="footer-copyright-wrap">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="copyright-text">
                    <p>© Copyrights 2022 Techmax All rights reserved. </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="copyright-social">
                    <ul className="social">
                    <li><a href="#"><BsFacebook className="contactIcon" /></a></li>
                      <li><a href="#"><FaTwitterSquare className="contactIcon" /></a></li>
                      <li><a href="#"><BsLinkedin className="contactIcon" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Footer;
