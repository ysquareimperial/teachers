import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader, CardTitle, Col, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import { FaUserTie } from "react-icons/fa"
import { RiLockPasswordFill } from "react-icons/ri"
import "./teacher.css"
import { FaChalkboardTeacher } from 'react-icons/fa'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'


function TeacherLogin() {
    const [form, setForm] = useState({
        userName: "",
        password: ""
    })

    const handleChange = ({ target: { value, name } }) => {
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        console.log(form)
    }

    const navigate = useNavigate()
    return (
        <div className="form col-md-12 min-vh-100 d-flex flex-column justify-content-center  ">
            <img
                src={require("../../images/240_F_273031183_CLvfbzdqCgAuhqsT7b1FhRunTZGxeUEg.jpg")}
                style={{
                    width: "100%",
                    height: "100vh",
                    // opacity: 1.0,
                    position: "absolute",
                    alignItems: "center",
                }}
                alt="logo-img"
            />
            <Row >
                <Col md={2}></Col>
                <Col md={8} >
                    <div>

                        <Card className="rounded shadow shadow-sm">
                            <Row>
                                <CardHeader style={{ fontSize: "30px", fontFamily: "fantasy", }}>
                                    <Row>
                                        <Col>
                                            <BiArrowBack size={40} className='back' onClick={() => navigate("/")} />
                                        </Col>
                                        <Col></Col>
                                        <Col>
                                            Login As Teacher
                                        </Col>

                                    </Row>
                                </CardHeader>
                                <Col md={6}>
                                    <CardBody>
                                        <FormGroup>
                                            <Label><strong>User Name</strong></Label>
                                            <InputGroup>
                                                <InputGroupText>
                                                    <FaUserTie size={28} />
                                                </InputGroupText>
                                                <Input type="text" placeholder="username" name="userName" value={form.userName}
                                                    onChange={handleChange} />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label><strong>Password</strong></Label>
                                            <InputGroup>
                                                <InputGroupText>
                                                    <RiLockPasswordFill size={28} />
                                                </InputGroupText>
                                                <Input type="password" placeholder="password" name="password" value={form.password} onChange={handleChange} />
                                            </InputGroup>
                                        </FormGroup>
                                        <div className="d-flex justify-content-between align-items-center">
                                            {/* <!-- Checkbox --> */}
                                            <div className="form-check mb-0">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                                <label className="form-check-label" for="form2Example3">
                                                    Remember me
                                                </label>
                                            </div>
                                            <a href="#" className="text-body">Forgot password?</a>
                                        </div>
                                        <Button block className="mt-4" onClick={handleSubmit}>Login</Button>
                                        {/* <p className="small fw-bold mt-2 pt-1 mb-0">Login As? <a href="#!"
                                                className="link-danger">Teacher</a> OR</p> */}
                                        <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                            className="link-danger" onClick={() => navigate("/teacher/sign-up")}>Register as a teacher</a></p>
                                        <Button className="mt-3" color="success" onClick={() => navigate("/employer/sign-in")}>
                                            <FaChalkboardTeacher /> Login As Employer</Button>

                                    </CardBody>
                                </Col>
                                <div className="col-md-6 col-lg-7 col-xl-6 d-none d-sm-block">
                                    <img src={require("../../images/medium-shot-woman-teaching-lesson.jpg")}
                                        className="" alt="emloyer image" style={{ maxWidth: "100%", height: "100%" }} />
                                </div>
                            </Row>

                        </Card>
                    </div>
                </Col>
                <Col md={2}></Col>
            </Row>
            {/* <div className="card">
                <div className="card-block d-flex flex-column">
                    <h2 className="card-title h4 align-self-start"></h2>
                    <div className="align-self-center">
                        Middle Middle
                    </div>
                    <aside className="align-self-end"></aside>
                </div>
            </div> */}
        </div>
    )
}

export default TeacherLogin