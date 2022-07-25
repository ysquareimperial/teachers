import React, { useState } from 'react'
import { Row, Col, Card, Button, Label, Form, FormGroup, Input } from 'reactstrap'
// import './signin.css'
// import { Mail, Unlock } from 'react-feather'
import { useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import "./teacher.css"
export default function TeacherSignup() {
    const [form, setForm] = useState({
        fullName: "",
        userName: "",
        email: "",
        password: ""
    })
    const handleChange = ({ target: { name, value } }) => {
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = () => {
        console.log(form)
    }
    const navigate = useNavigate()
    return (
        <div classNameName=''>
            <div className="">
                <div className="row no-gutter">
                    {/* <!-- The content half --> */}
                    <div className="col-md-6 " style={{ backgroundColor: "#ECECFD" }}>
                        <div className="login d-flex align-items-center ">
                            {/* <!-- Demo content--> */}
                            <div className="container-md">

                                <div className='arrow' onClick={() => navigate("/")}>
                                    <BiArrowBack size={40} />
                                </div>
                                <Row>
                                    <div className="col-lg-10 col-xl-7 mx-auto">
                                        <h3 style={{ fontSize: "70px", fontFamily: "Fantasy" }}>AS A TEACHER</h3>
                                        <p className="mb-4" style={{ fontSize: "30px", fontFamily: "Serif" }}>Welcome  to tutorsocially, let get to know you</p>
                                        <form>
                                            <div>
                                                <Label>Full Name</Label>
                                                <Input
                                                    type="text"
                                                    name="fullName"
                                                    value={form.fullName}
                                                    onChange={handleChange}
                                                // bsSize="lg"
                                                // placeholder='Enter full name'
                                                // style={{fontSize: "50px",}}
                                                />
                                            </div>
                                            <div className='mt-3'>
                                                <Label>User Name</Label>
                                                <Input
                                                    type="text"
                                                    name="userName"
                                                    value={form.userName}
                                                    onChange={handleChange}
                                                // bsSize="lg"
                                                // placeholder='Enter full name'
                                                // style={{fontSize: "50px",}}
                                                />
                                            </div>
                                            <div className='mt-3'>
                                                <Label>Email Address</Label>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                // placeholder='example@gmail.com'
                                                // bsSize="lg"
                                                />
                                            </div>
                                            <div className='mt-3'>
                                                <Label>Enter Password</Label>
                                                <Input
                                                    type="password"
                                                    placeholder=''
                                                    name="password"
                                                    value={form.password}
                                                    onChange={handleChange}
                                                // bsSize="lg"
                                                />
                                            </div>                                            <Button
                                                className='mt-3'
                                                block
                                                color="dark"
                                                // style={{ backgroundColor: "black" }}
                                                size="lg"
                                            >
                                                Sign Up
                                            </Button>
                                            <p className="small fw-bold mt-1 pt-1 mb-0">Already  have an account? <a href="#!"
                                                className="link-primary" onClick={() => navigate("/teacher/sign-in")}>Login as teacher</a>
                                            </p>
                                        </form>
                                    </div>
                                </Row>
                            </div>
                            {/* <!-- End --> */}

                        </div>
                    </div>
                    {/* <!-- End --> */}


                    {/* <!-- The image half --> */}
                    <div className="col-md-6 d-none d-md-flex bg-images">

                    </div>



                </div>
            </div>
        </div>
    )
}
