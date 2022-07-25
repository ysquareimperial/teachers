import React, { useState,useEffect } from 'react'
import { Row, Col, Button, Container } from "reactstrap"
import "./style.css"

function Getstarted() {
    
    return (
        <div>
 <Row  style={{ marginTop: "0px" }}>
                <Col className="col-sm-12 col-md-12  col-mt-3">
                    <center>

                        <Col>

                            <Row md={1}>
                                <center>
                                    <Col id="g2">
                                        <h1 className="col-sm-12 col-md-6 col-mt-6" id="g3" > Get started </h1>
                                    </Col>
                                </center>
                            </Row>
                            <Row>
                                <Col>
                                    <h3 className="col-sm-12 col-md-6" id="g4">
                                        A blockchain based educational <br />
                                        empoyerment market place <br />
                                        that conects the demand.</h3>
                                </Col>
                            </Row>
                            <Row >
                                <center>                                
                                    <Button  className="btn col-md-4 col-sm-6 col-xs-12" id="g7" style={{marginLeft:"15"}}  >Get start</Button>
                                
                                    <Button className="btn col-md-4 col-sm-6 col-xs-12" id="g7" >Get start</Button>
                                 </center>                            
                            </Row>

                        </Col>
                    </center>

                </Col>
            </Row>
      {/* end get started */}
           
        </div>

    )
}

export default Getstarted

