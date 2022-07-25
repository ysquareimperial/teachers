import React from "react";
import { Button, Col, Row } from "reactstrap";
import Banner from "./Banner";
import Navigation from "./Navigation";
import "./style.scss"
import "./style.css"
// import { MapPin, Search } from "react-feather";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
// import JobsIndex from "./recentPost/JobsIndex";


function LandingPage() {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <Navigation />
            </div>

            <Banner />

            {/* <!-- start whatsapp --> */}
            <a href="https://wa.me/2348146943096?text=I'm%20interested%20in%20learning%20more%20about%20tutorsocially.%20My%20name%20is..." target="_blank">
                <div class="whatsapp">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                </div>
            </a>
            {/* <!-- end whatsapp --> */}


            {/* start trusted By */}
            <div style={{ backgroundColor: "whitesmoke", height: "40em" }}>

                <section className="section-featured">
                    <div className="container center">
                        <h2 className="heading">
                            <span>TRUSTED BY</span>
                        </h2>
                        <div className="logos">
                            <img src={require("../images/logo/logo1.jpg")} alt="Air Force School logo" />
                            <img src={require("../images/logo/logo2.jpg")} alt="nigeria law school logo" />
                            <img src={require("../images/logo/logo3.png")} alt="science and technical logo" />
                            <img src={require("../images/logo/logo4.png")} alt="science and technical logo" />
                            <img src={require("../images/logo/logo5.png")} alt="science and technical logo" />
                            <img src={require("../images/logo/logo6.png")} alt="science and technical logo" />
                            {/* <img src={require("../images/logo/logo7.jpg")} alt="science and technical logo" />
                        <img src={require("../images/logo/logo8.png")} alt="science and technical logo" />
                        <img src={require("../images/logo/logo9.jpg")} alt="science and technical logo" /> */}
                            <img src={require("../images/logo/logo10.png")} alt="stiched to fit logo" />
                        </div>
                    </div>
                </section>
                {/* <h2 className="heading">
                            <span>TRUSTED BY</span>
                        </h2> */}
                {/* end trusted jobs */}
                <div style={{ backgroundColor: "whitesmoke" }}>
                    {/* start educator jobs available */}
                    <div className="container home-page-stats-section pa-0 mx-auto container--fluid"
                        data-v-55b7876e data-v-508de074>
                        <div className="row ma-0" data-v-55b7876e>
                            <div className="pa-0 col col-12" data-v-55b7876e >
                                <h3 className="styled-text-large-bold" data-v-55b7876e >50K educator jobs available
                                    <br className="hidden-xs-only" data-v-55b7876e />
                                    now on tutorsocially (and growing)
                                </h3>
                            </div>
                        </div>
                        <div
                            className="layout stats-container d-flex flex-column flex-md-row align-center justify-md-content-between"
                            data-v-55b7876e >
                            <div className="flex stat-cell" data-v-55b7876e>
                                <div className="styled-text-huge-thin" data-v-55b7876e>8k+</div>
                                <h4 className="styled-text-small-bold" data-v-55b7876e>Get info about every K12<br
                                    data-v-55b7876e />district across Africa</h4>
                            </div>
                            <div className="flex stat-icon" data-v-55b7876e>
                                <img src={require("../images/arrow2.png")}
                                    alt="--&gt;" className="stats-section-arrow-icon" data-v-55b7876e /></div>
                            <div className="flex stat-cell" data-v-55b7876e>
                                <div className="styled-text-huge-thin" data-v-55b7876e>40k+</div>
                                <h4 className="styled-text-small-bold" data-v-55b7876e>Over 40,000 teaching
                                    jobs<br data-v-55b7876e />filled using tutorsocially.</h4>
                            </div>
                            <div className="flex stat-icon" data-v-55b7876e><img src={require("../images/arrow2.png")}
                                alt="--&gt;" className="stats-section-arrow-icon" data-v-55b7876e /></div>
                            <div className="flex stat-cell" data-v-55b7876e>
                                <div className="styled-text-huge-thin" data-v-55b7876e>3min</div>
                                <h4 className="styled-text-small-bold" data-v-55b7876e>Apply for a new position
                                    in<br data-v-55b7876e />as little as 3 minutes</h4>
                            </div>
                        </div>
                    </div>
                    {/* end educator jobs available */}
                </div>
            </div>

            {/* <TrustedBy /> */}
            {/* start employer and Teachers site */}
            <Row >

                <Col className="container" style={{ backgroundColor: "lightGrey", height: "400px" }}>
                    <div style={{ marginLeft: "70px", marginTop: "50px" }} >
                        <div className="me" >
                            <h2 style={{ marginRight: "30px", fontSize: "60px", fontFamily: "Fantasy" }}>EMPLOYER</h2>
                        </div>
                        <h2 style={{ color: "black", fontFamily: "Serif" }}>Our platform takes care of  the
                            stress of getting quality and qualified teachers
                        </h2>
                        <Button className='btn-1 mt-4' onClick={() => navigate("/employer/sign-up")}
                            style={{ width: "170px", height: "50px", marginRight: "10px" }}>Hire Now</Button>
                    </div>
                </Col>


                <Col ClassName="container" style={{ backgroundColor: "#CDCDF2", height: "400px" }}>
                    <div style={{ marginLeft: "70px", marginTop: "50px" }} >
                        <div className="me" >
                            <h2 style={{ fontSize: "60px", fontFamily: "Fantasy" }}>AS A TEACHER</h2>
                        </div>
                        <h2 style={{ color: "black", fontFamily: "Serif" }}>
                            We connect teachers with the right job,
                            our payment system is fast
                            and reliable. Get Paid in near Token
                        </h2>
                        <Button className='btn-1' onClick={() => navigate("/teacher/sign-up")}
                            style={{ width: "170px", height: "50px", marginRight: "10px" }}>Join Now</Button>
                    </div>
                </Col>
            </Row>
            {/* end employer and Teachers site */}

            {/* start get started */}
            <div style={{ backgroundColor: "black", height: "400px" }}>
                <center>
                    <Row>
                        <center>
                            <Col className="mt-5" >
                                <div style={{ fontFamily: 'Courier New', fontSize: "60px", color: "white", fontWeight: "bold" }}> Get started </div>
                            </Col>
                        </center>
                        <Col>
                            <h3 style={{ color: "white", fontSize: "30px", marginTop: "5px", latterSpacing: "5px", wordSpacing: "5px" }}>
                                A blockchain based educational <br />
                                empoyerment market place <br />
                                that conects the demand.</h3>
                        </Col>
                    </Row>
                    <Row>
                        <center>
                            <Button size="lg">Get started</Button>
                        </center>
                    </Row>
                </center>
            </div>
            {/* end get started */}
            <Footer />
            {/* end latest Jobs */}
        </>

    )
}

export default LandingPage