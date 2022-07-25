import React from "react";
import { MapPin, Search } from "react-feather";
import { Input, InputGroupText, InputGroup, Button, Col, Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, Row } from "reactstrap";

import "./LandinStyle.css"

function Banner(params) {
    return (
        <>
            <div class="banner">

                <section className="header__section">
                    <Row className="row">
                        <Col md={6}>
                            <div className="container">
                                <div style={{}}>
                                    <h1 className="mt-4" >
                                        Find the best
                                        <span> Teachers</span>
                                    </h1>
                                    <h4 className="second-title ">
                                        We help you to build better future. Find a Second home Today!
                                    </h4>

                                    <Row style={{ paddingBottom: '4px', paddingTop: '4px', borderRadius: "4px" }}>
                                        
                                            <center>
                                                <button className='events'>
                                                    Get started
                                                </button>
                                                <button className='events ml-5'>
                                                    Find Job events
                                                </button>
                                            </center>
                                        {/* </Col> */}
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <img src={require("../images/teacher.png")} className="d-none d-sm-block mt-4" width="100%" height="100%" />
                        </Col>
                    </Row>
                </section>
            </div>
        </>
    )
}

export default Banner