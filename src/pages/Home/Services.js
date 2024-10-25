import React from "react";

function Services(props) {
  return (
    <div className="container">
      <div className="service-wrap"  >
        <div className="row" >          
          <div className="col-md-3 col-lg-3 col-sm-6">
            <div className="frontside text-center">
              <div className="card" style={{ minHeight: 350 }}>
                <div className="text-center" style={{ paddingTop: 50 }}>
                  <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/service/service-1.png" alt="card image" />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">Strategy & Discovery</h5>
                  <p className="card-text">
                    We provide the most responsive and functional IT design for companies and businesses worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-6">
            <div className="frontside text-center">
              <div className="card" style={{ minHeight: 350 }}>
                <div className="text-center" style={{ paddingTop: 50 }}>
                  <img className=" img-fluid" src="https://thepixelcurve.com/html/techmax/techmax/assets/images/service/service-2.png" alt="card image" />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">Custom <br></br> Software Solution</h5>
                  <p className="card-text">
                    We provide the most responsive and functional IT design for companies and businesses worldwide.
                  </p>

                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-lg-3 col-sm-6">
            <div className="frontside text-center">
              <div className="card" style={{ minHeight: 350 }}>
                <div className="text-center" style={{ paddingTop: 50 }}>
                  <img className=" img-fluid" src="https://thepixelcurve.com/html/techmax/techmax/assets/images/service/service-3.png" alt="card image" />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">Technology  <br></br> Consulting</h5>
                  <p className="card-text">
                    We provide the most responsive and functional IT design for companies and businesses worldwide.
                  </p>

                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-lg-3 col-sm-6">
            <div className="frontside text-center">
              <div className="card" style={{ minHeight: 350 }}>
                <div className="text-center" style={{ paddingTop: 50 }}>
                  <img className=" img-fluid" src="https://thepixelcurve.com/html/techmax/techmax/assets/images/service/service-4.png" alt="card image" />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">Business <br></br>  Analytics</h5>
                  <p className="card-text">
                    We provide the most responsive and functional IT design for companies and businesses worldwide.
                  </p>

                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Services;
