import React from "react";
import '../..//../src/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlay } from '@fortawesome/free-solid-svg-icons';
function WhoWeAre(props) {
  return (
    <div className="section about-section section-padding">
      <div className="container text-center">
        <div className="row align-items-end">
          <div className="col col-lg-6">
            <div className="about-thumb-wrap" >
              <div className="about-thumb-small" >
                <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/about-1.jpg" alt=""
                  style={{
                    borderRadius: 10
                  }}
                />
              </div>
              <div className="about-thumb-big" >
                <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/about-2.jpg" alt=""
                  style={{
                    borderRadius: 10
                  }}
                />
              </div>
              <div className="about-thumb-shape" >
                <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/ab-shape.png" alt="" />
              </div>
              <div className="play-btn" >
                <a className="popup-video"
                  href="https://www.youtube.com/watch?time_continue=3&v=_X0eYtY8T_U"> <FontAwesomeIcon icon={faPlay} className="playIcon" /></a>
              </div>
              {/* <div className="play-btn">
                <a className="popup-video" href="https://www.youtube.com/watch?time_continue=3&v=_X0eYtY8T_U"><i className="fas fa-play" /></a>
              </div> */}
            </div>

          </div>


          <div className="col col-lg-6 ">
            <div className="about-content" style={{
              paddingLeft: 80
            }}>
              <div className="section-title" style={{
                maxWidth: 690, margin: 0, textAlign: "left",

              }}>
                <h3 className="sub-title" style={{
                  fontSize: 14,
                  //  lineHeight: 30,
                  // fontFamily: 'Manrope,sans-serif',
                  fontWeight: "800",
                  color: "#005de0",
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                  // marginBottom: 12    

                }}>Who We Are</h3>
                <h2 className="title" style={{
                  fontSize: 40,
                  // lineHeight: 54,
                  // font-family: "Manrope", sans-serif;
                  fontWeight: "700",
                  color: "#333333",
                }}>We specialise in helping our customers digitise their business</h2>
              </div>
              <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
              <div className="about-author-list" style={{
                display: 'flex',
                alignItems: 'center',
                paddingTop: 15
              }}>
                <div className="about-author" style={{
                  background: "#ffffff",
                  // box-shadow: 0px 0px 62px 0px rgb(0 0 0 / 8%);
                  boxShadow: "0px 0px 62px 0px rgb(0 0 0 / 8%)",
                  paddingLeft: 45,
                  paddingRight: 30,
                  paddingTop: 35,
                  paddingBottom: 35,
                  borderRadius: 5,
                  marginRight: 40,
                  marginTop: 25,
                  position: 'relative'

                }}>
                  <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/sign.png" alt="" />
                  <h4 className="name" style={{
                    fontSize: 14,
                    // lineHeight: 20,
                    // // font-family: "Manrope", sans-serif;
                    fontWeight: '700',
                    color: "#090d2f",
                    marginTop: 10,
                    marginBottom: 0

                  }}>Mita Walker</h4>
                  <span className="designation"
                    style={{
                      fontSize: 12,
                      // lineHeight: 18,

                      // // font-family: "Roboto", sans-serif;
                      fontWeight: '400',
                      color: "#4c4d56",
                    }}
                  >CEO, Techmax</span>
                  <div className="author-img" style={{
                    position: "absolute",
                    left: -25,
                    top: 35,
                  }}>
                    <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/author-1.jpg" alt=""
                      style={{
                        borderRadius: 40
                      }}
                    />
                  </div>
                </div>
                <div className="about-list"
                  style={{
                    marginTop: 25,
                    textAlign: 'left',
                    color: "#005de0",
                  }}
                >
                  <ul>
                    <p><FontAwesomeIcon icon={faCheck} />  Solving complex problem </p>
                    <p><FontAwesomeIcon icon={faCheck} />  We guarantee trusted service </p>
                    <p><FontAwesomeIcon icon={faCheck} />  Experts in technology fields </p>

                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>


    </div>
  //   <div className="section about-section section-padding">
  //   <div className="container">
  //     <div className="about-wrap">
  //       <div className="row">
  //         <div className="col-lg-6">
  //           <div className="about-thumb-wrap">
  //             <div className="about-thumb-small">
  //               <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/about-1.jpg" alt="" />
  //             </div>
  //             <div className="about-thumb-big">
  //               <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/about-2.jpg" alt="" />
  //             </div>
  //             <div className="about-thumb-shape">
  //               <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/ab-shape.png" alt="" />
  //             </div>
  //             <div className="play-btn">
  //               <a className="popup-video" href="https://www.youtube.com/watch?time_continue=3&v=_X0eYtY8T_U"><i className="fas fa-play" /></a>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="col-lg-6">
  //           <div className="about-content">
  //             <div className="section-title">
  //               <h3 className="sub-title">Who We Are</h3>
  //               <h2 className="title">We specialise in helping our customers digitise their business</h2>
  //             </div>
  //             <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
  //             <div className="about-author-list">
  //               <div className="about-author">
  //                 <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/sign.png" alt="" />
  //                 <h4 className="name">Mita Walker</h4>
  //                 <span className="designation">CEO, Techmax</span>
  //                 <div className="author-img">
  //                   <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/author-1.jpg" alt="" />
  //                 </div>
  //               </div>
  //               <div className="about-list">
  //                 <ul>
  //                   <li><i className="fas fa-check" /> <a href="#">Solving complex problems</a></li>
  //                   <li><i className="fas fa-check" /> <a href="#">We guarantee trusted service.</a></li>
  //                   <li><i className="fas fa-check" /> <a href="#"> Experts in technology fields</a></li>
  //                 </ul>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  );
}

export default WhoWeAre;
