import React from 'react'
import { Card, CardBody, Col, Row, Button, Container } from "reactstrap";
// import "./App.css"

export default function Test() {
    return (
        <div>
            <Row style={{ marginTop: "25px" }} className="container-fluid">
                <Col md={6}>
                    <Card className="shadow" >
                        <Row>

                            <Col >
                                <center>
                                    <img src="" alt="Saeed" id="saeed" />
                                </center>
                            </Col>

                            <Col id="dd">
                                <center>
                                    <h5 className="col-sm-12 col-md-12">Saeed Ahmad Abubkar</h5>
                                    <div>
                                        <h6 className="col-sm-12 col-md-12">improve your profile</h6>
                                    </div>
                                </center>
                            </Col>


                            <Col id="ss">

                                <Col>
                                    <div>
                                        <h6 className="col-sm-12 col-md-12 ">Set your job preffrence to be
                                            visible to employers</h6>

                                    </div>
                                </Col>

                                <hr style={{ width: "213px" }}></hr>
                                <div >

                                    <h6 className="col-sm-12 col-md-12">Set up a job search with alarts
                                        for new opportunities
                                    </h6>
                                </div>

                            </Col>

                        </Row>

                        <hr style={{ marginLeft: "200" }}>
                        </hr>

                        <Row>

                            <Col className="col-sm-3 col-md-8" style={{ float: 'left' }}>Find job Event</Col>
                            <Col className="col-sm-3 col-md-8" style={{ float: 'right' }}>View Favourite</Col>

                        </Row>

                    </Card>
                </Col>
                <Col md={2}>
                    <Card className="shadow" >
                        <h4 className="col-sm-3 col-md-8" style={{ marginTop: "5px", marginLeft: "10px", fontSize: "20px" }}>Recent Activit</h4>
                        <hr style={{ marginTop: "1px" }}></hr>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="shadow" >
                        <Row>
                            <h5 className="col-sm-3 col-md-8" style={{ marginTop: "5px", fontSize: "20px", marginLeft: "10px" }}>Your Profile strength is</h5>
                            <hr style={{ width: "405px", marginLeft: "12px" }}></hr>
                            <Col>
                                <h1 className="col-sm-6 col-md-12" style={{ fontSize: "90px", marginLeft: "30px" }}>0%</h1>
                            </Col>
                            <Col>
                                <img src="" alt="Saeed" style={{ width: "130px", borderRadius: "150px" }} />
                            </Col>

                            <h6 className="col-sm-3 col-md-6" style={{ marginLeft: "10px" }}>click to edit your profile</h6>

                        </Row>
                    </Card>
                </Col>
            </Row>

            <Row>


                <Col >
                    <div className="container-fluid shadow col-sm-8 col-md-12 col-md-w-12" >
                        <div className='row '>
                            <div id="s3" >
                                <h5 className="col-sm-6 col-md-8">Get Started</h5>
                                <hr></hr>

                                <h4 className="col-sm-6 col-md-10 "> Ways to help employers and job find you</h4>
                            </div>
                            <Row>
                                <Col  >
                                    <div className="container-fluid" style={{ backgroundColor: "grey" }}>
                                        <Row>
                                            <div className="mt-md-3">

                                                <h4 className="col-sm-8 col-md-12 " style={{ fontSize: "20px" }}> 1. Complete your profile </h4>
                                            </div>

                                            <Col className="mt-md-3" >

                                                <Button className="p-0 p-sm- p-md-1">Goto My Profile</Button>
                                            </Col>
                                            <Col md={5} className="mb-md-4" >
                                                <img src="" alt="Saeed" style={{ width: "115px", borderRadius: "30px" }} id="bv"/>

                                            </Col>
                                            <div className='col-sm-10 col-md-12' >
                                                <h3 className="mb-md-4" style={{ fontSize: "15px" }}> Adding your photo, work authorization, location,<br/>
                                                    and personal details, provide your basic information,<br/>
                                                    all employers need to hire you.</h3>
                                            </div>
                                        </Row>
                                    </div>
                                </Col>
                                <Col >
                                    <div className="container-fluid" style={{ backgroundColor: "grey" }}>
                                        <Row>
                                            <div className="mt-md-3">

                                                <h4 className="col-sm-6 col-md-12" style={{ fontSize: "20px" }}> 2. Creat your resume </h4>
                                            </div>

                                            <Col className="mt-md-3" >

                                                <Button className="p-0 p-sm-2 p-md-1" >Goto My Profile</Button>
                                            </Col>
                                            <Col md={5} className="mb-md-4">
                                                <img src="" alt="Saeed" style={{ width: "115px", borderRadius: "30px" }} />

                                            </Col>
                                            <div className='col-sm-10 col-md-12' >
                                                <h4 className="mb-md-4" style={{ fontSize: "15px" }}> Adding your photo, work authorization, location,<br/>
                                                    and personal details, provide your basic information,<br/>
                                                    all employers need to hire you.</h4>
                                            </div>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="mt-md-3">
                                    <div className="container-fluid" style={{ backgroundColor: "grey" }}>
                                        <Row>
                                            <div className="mt-md-3">

                                                <h4 className="col-sm-6 col-md-12" style={{ fontSize: "20px" }}> 3. Set Job preffrences </h4>
                                            </div>

                                            <Col className="mt-md-3" >

                                                <Button className="p-0 p-sm-2 p-md-1">Goto My Profile</Button>
                                            </Col>

                                            <Col md={5} className="mb-md-4">
                                                <img src="" alt="Saeed" style={{ width: "115px", borderRadius: "30px" }} />

                                            </Col>
                                            <div className='col-sm-10 col-md-12' >
                                                <h4 className="mb-md-4" style={{ fontSize: "15px" }}> Adding your photo, work authorization, location,<br/>
                                                    and personal details, provide your basic information,<br/>
                                                    all employers need to hire you.</h4>
                                            </div>
                                        </Row>
                                    </div>

                                </Col>


                                <Col className="mt-md-3">
                                    <Container style={{ backgroundColor: "grey" }}>
                                        <Row>
                                            <div className='mt-md-3' >

                                                <h4 className="col-sm-6 col-md-12" style={{ fontSize: "20px" }}> 4. Set Job preffrences </h4>
                                            </div>

                                            <Col className="mt-md-3" >

                                                <Button className="p-0 p-sm-2 p-md-1">Goto My Profile</Button>
                                            </Col>

                                            <Col md={5} className="mb-md-4">
                                                <img src="" alt="Saeed" style={{ width: "115px", borderRadius: "30px" }} />

                                            </Col >
                                            <div className='col-sm-6 col-md-12' >
                                                <h4 className="mb-md-4" style={{ fontSize: "15px" }}> Adding your photo, work authorization, location,<br/>
                                                    and personal details, provide your basic information,<br/>
                                                    all employers need to hire you.</h4>
                                            </div>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                
                    <div className=" container-fluid shadow col-sm-8 col-md-12"  >
                        <div className='row'>
                        <h3 className="col-sm-4 col-md-12 ">Events</h3>
                       
                                             <h4 className="col-sm-4 col-md-12">Recent Event</h4>
                                             
  
                        <div className="row" id="ab">
                            <h6 className="col-sm-4 col-md-12" >Resecents event in your area</h6>
                            <p><h5 className="col-sm-4 col-md-12">Virtual interview Day for certified <br/>Teachers</h5></p>
                            <p><i><h6 className="col-sm-4 col-md-12">Employer: Pinellas County Public School</h6></i></p>
                            <p><h6 className="col-sm-4 col-md-12">Teachers Hiring Event House</h6></p>
                            <p><h6 className="col-sm-4 col-md-12">Employer: Charter Schools USA(Florida)</h6></p>
                            <p><i><h6 className="col-sm-4 col-md-12">Employer: Pinellas County Public School</h6></i></p>
                            <p><h6 className="col-sm-4 col-md-12">Teachers Hiring Event House</h6></p>
                            <p><i><h6 className="col-sm-4 col-md-12">Employer: Charter Schools USA(Florida)</h6></i></p>
                            <hr></hr>
                            <center>
                                <h6>SEE MORE</h6>
                            </center>
                        </div>
                        
                        </div>
                    </div>
                    
                </Col>

            </Row>


            <Row>
                <Col md={8} >
                    <div className='card' id="s6">
                        <div className='row'>
                        <h4>Favourite</h4>
                        <div className='' id="s7" >

                            <hr></hr>
                        </div>
                        <center>
                            <h4>See all favourite</h4>
                        </center>
                        </div>
                    </div>

                </Col>
            </Row>

        </div>
    )
}
