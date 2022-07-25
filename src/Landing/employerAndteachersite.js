import React from 'react'
import { Row, Col, Button } from "reactstrap"
import "./style.css"

export default function EmployerAndteachersite() {
    return (
        <div>
            <Row >

                <Col className="container" id="cn1" >
                    <div id="cn2">
                        <div className="me" >
                            <h2 classNam="" id="cn3">EMPLOYER</h2>
                        </div>
                        <h2 className="col-lg-12 col-md-8" id="cn4" >Our platform take care of  the
                            stress of getting quality and qualified teachers
                        </h2>
                        <Button className='btn-1 ' id="cn10">Hire Now</Button>
                    </div>
                </Col>

                <Col ClassName="container " id="cn5" >
                    <div id="cn6">
                        <div className="me" >
                            <h2 className="col-lg-12 md-8" id="cn7" >AS A TEACHER</h2>
                        </div>
                        <h2 className="col-lg-12 col-md-8" id="cn8">
                            We connect teacher with the right job,
                            our payment system is fast
                            and reliable. Get Paid in near Token
                        </h2>
                        <Button className='btn-1 ' id="cn9" >Join Now</Button>
                    </div>
                </Col>
            </Row>

        </div>
    )
}
