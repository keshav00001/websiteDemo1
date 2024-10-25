import { faArrowRight, faComment, faRightLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import './App.css';
import '../..//../src/App.css'

function Blog(props) {
    return (
        <div className="section blog-section section-padding-02">
        <div className="container">
          <div className="blog-wrap">
            <div className="section-title text-center" style={{paddingTop:55}}>
              <h3 className="sub-title">News &amp; Blog</h3>
              <h2 className="title">Trending article &amp; stories</h2>
            </div>
            <div className="blog-content-wrap">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="single-blog">
                    <div className="blog-img">
                      <a href="blog-details.html"><img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/blog/blog-1.jpg" alt="" /></a>
                      <div className="top-meta">
                        <span className="date"><span>08</span>Aug</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                      <span><FontAwesomeIcon icon={faUser} className="BLog-Icon"/> <a href="#" className="textDecoraton"> Andrew Paker</a></span>
                        <span>&nbsp;&nbsp;<FontAwesomeIcon icon={faComment} className="BLog-Icon"/> 0 Comments</span>
                      </div>
                      <h3 className="title"><a href="blog-details.html" className="textDecoraton">Who Needs Extract Value From Data?</a></h3>
                      <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote.</p>
                    </div>
                    <div className="blog-btn">
                      <a className="blog-btn-link textDecoraton" href="blog-details.html" >Read Full Article <FontAwesomeIcon icon={faArrowRight} className="BLog-Icon" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-blog">
                    <div className="blog-img">
                      <a href="blog-details.html"><img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/blog/blog-2.jpg" alt="" /></a>
                      <div className="top-meta">
                        <span className="date"><span>10</span>Aug</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                      <span><FontAwesomeIcon icon={faUser} className="BLog-Icon"/> <a href="#" className="textDecoraton"> Andrew Paker</a></span>
                        <span>&nbsp;&nbsp;<FontAwesomeIcon icon={faComment} className="BLog-Icon"/> 0 Comments</span>
                      </div>
                      <h3 className="title"><a href="blog-details.html" className="textDecoraton">Easy and Most Powerful Server and Platform.</a></h3>
                      <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote.</p>
                    </div>
                    <div className="blog-btn">
                      <a className="blog-btn-link" href="blog-details.html" style={{textDecoration:'none'}}>Read Full Article <FontAwesomeIcon icon={faArrowRight} className="BLog-Icon" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-blog">
                    <div className="blog-img">
                      <a href="blog-details.html"><img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/blog/blog-3.jpg" alt="" /></a>
                      <div className="top-meta">
                        <span className="date"><span>08</span>Aug</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span><FontAwesomeIcon icon={faUser} className="BLog-Icon"/> <a href="#" className="textDecoraton"> Andrew Paker</a></span>
                        <span>&nbsp;&nbsp;<FontAwesomeIcon icon={faComment} className="BLog-Icon"/> 0 Comments</span>
                      </div>
                      <h3 className="title"><a href="blog-details.html" className="textDecoraton">Back up your database, store in a safe</a></h3>
                      <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote.</p>
                    </div>
                    <div className="blog-btn">
                      <a className="blog-btn-link" href="blog-details.html" style={{textDecoration:'none'}}>Read Full Article <FontAwesomeIcon icon={faArrowRight} className="BLog-Icon" /></a>
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

export default Blog;
