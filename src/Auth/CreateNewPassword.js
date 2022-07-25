import React from 'react'
import { Row, Col, Card } from 'reactstrap'
// import './signin.css'
// import { Mail, Unlock } from 'react-feather'
import lb from '../images/sRecord-L&B.png'
import { useNavigate } from 'react-router-dom'
export default function CreateNewPassword() {
    const navigate = useNavigate()
    return (
        <div className='signin-container'>
            <Row className='m-0 p-0'>
                <Col lg={1} md={1}></Col>
                <Col lg={5} md={5} className='signin-row'>
                    <div className='sign-left-col'>
                        <h1 className='sign-heading'>One-Click students reports generator</h1>
                        <p className='sign-para'>Creating high quality and accurate reports.</p>
                        <button className='s-btn' onClick={() => navigate('/sign-up')}>Get Started</button>
                    </div>
                </Col>
                <Col lg={4} md={4} className='text-center middle signin-row'>
                    {/* <h1 className='brand-name'>sRecord</h1> */}
                    <Card className='sign-card shadow text-center'>
                        {/* <img class="card-img-top img-circle rounded-circle" src="https://dummyimage.com/100x100/000/fff" /> */}
                        {/* <User className='card-img-top' size='5em' /> */}
                        <div>
                            <img src={lb} className='sign-logo' alt='sRecord Logo' />
                        </div>
                        <div className='input-wrap'>
                            <h5>Create New Password</h5>
                            <p className='forgot-text'>An email was sent to y*******l@gmail.com with a link to reset your password and get back to your account.</p>
                            <div className="input-group">
                                {/* <div className="input-group-prepend">
                                    <span className="input-group-text span-icon" id=""><Mail /></span>
                                </div> */}
                                <input type="password" className="" placeholder="new password" />
                            </div>
                            <div className="input-group mt-3">
                                {/* <div className="input-group-prepend">
                                    <span className="input-group-text span-icon" id=""><Unlock /></span>
                                </div> */}
                                <input type="email" className="" placeholder="confirm password" />
                            </div>
                        </div>
                        <div className='send-email-div'>
                            <button className='action-btn' onClick={() => navigate('/home')}>Save and sign in</button>
                        </div>
                        {/* <hr></hr> */}
                    </Card>
                    <button className='login-btn'><span className='signup' onClick={() => navigate('/sign-up')}>Create new account</span> | <span className='signup' onClick={() => navigate('/sign-in')}>Sign in</span></button>
                </Col>
                <Col md={2}></Col>
            </Row>
        </div>
    )
}
