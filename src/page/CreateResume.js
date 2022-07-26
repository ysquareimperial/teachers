import React from "react";
import { Card, CardBody, CardHeader, Col, Container, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import "./resume.css"

export default function CreateResume() {
    return (
        <div>
            <div className="resume_head">
                <div className="resume_label">Create Resume</div>
            </div>
            <Container>
                <Row>
                    <Card className="cards">
                        <CardHeader>Card Header</CardHeader>
                        <CardBody>
                            <Row>

                                <Col md={6}>
                                    <FormGroup>
                                        <Label>Password</Label>
                                        <InputGroup>
                                            <InputGroupText>
                                                {/* <RiLockPasswordFill size={28} /> */}
                                                @
                                            </InputGroupText>
                                            <Input type="text" placeholder="password" name="password" />
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label>Password</Label>
                                        <InputGroup>
                                            <InputGroupText>
                                                {/* <RiLockPasswordFill size={28} /> */}
                                                @
                                            </InputGroupText>
                                            <Input type="text" placeholder="password" name="password" />
                                        </InputGroup>
                                    </FormGroup>
                                </Col>

                            </Row>
                        </CardBody>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}
