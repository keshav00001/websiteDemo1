import React from "react";
import '../..//../src/App.css'
import CountUp from 'react-countup';

function CounterSection(props) {
    return (
        <div>
            <div className="section counter-section" style={{ backgroundImage: 'url(https://thepixelcurve.com/html/techmax/techmax/assets/images/bg/counter-bg.jpg)' }}>
                <div className="container">
                    <div className="counter-wrap">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                {/* Counter Item Start */}
                                <div className="counter-item text-center">
                                    <div className="counter-icon">
                                        <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/counter/counter-1.png" alt="" />
                                    </div>
                                    <div className="counter-text">
                                        <span>
                                            {/* <span className="counter">354</span>+ */}
                                            <CountUp  end={354} />+
                                        </span>
                                        <p>Completed Projects</p>
                                    </div>
                                </div>
                                {/* Counter Item End */}
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                {/* Counter Item Start */}
                                <div className="counter-item text-center">
                                    <div className="counter-icon">
                                        <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/counter/counter-2.png" alt="" />
                                    </div>
                                    <div className="counter-text">
                                        <span>
                                            {/* <span className="counter">119</span>+ */}
                                            <CountUp  end={119} />+

                                        </span>
                                        <p>Satisfied Clients</p>
                                    </div>
                                </div>
                                {/* Counter Item End */}
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                {/* Counter Item Start */}
                                <div className="counter-item text-center">
                                    <div className="counter-icon">
                                        <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/counter/counter-3.png" alt="" />
                                    </div>
                                    <div className="counter-text">
                                        <span>
                                            {/* <span className="counter" >99</span>% */}
                                            <CountUp  end={99} />%

                                        </span>
                                        <p>Web Site Analyse</p>
                                    </div>
                                </div>
                                {/* Counter Item End */}
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                {/* Counter Item Start */}
                                <div className="counter-item text-center">
                                    <div className="counter-icon">
                                        <img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/counter/counter-4.png" alt="" />
                                    </div>
                                    <div className="counter-text">
                                        <span>
                                            {/* <span className="counter">321</span>+ */}
                                            <CountUp  end={321} />+

                                        </span>
                                        <p>Clients Supoort Done</p>
                                    </div>
                                </div>
                                {/* Counter Item End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CounterSection;
