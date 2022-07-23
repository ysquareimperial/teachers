import React from 'react'
import { Button, Row, Col, Card, Container } from 'reactstrap'
import './Teachers.css'
import strength from './images/strength.png'
import { Heart, User } from 'react-feather'
export default function Teachers() {
    return (
        <div>
            <Container>
                <Row className='mt-3'>
                    <Col md={6}>
                        <Card className='card shadow p-4' style={{ border: 'none', borderRadius: 20 }}>
                            <Row>
                                <Col md={2}>
                                    <User style={{ color: 'rgb(195, 48, 48)', float: '' }} size='4.5em' />
                                </Col>
                                <Col md={6}>
                                    <p className='m-0 user-name'>Yasir Ado Hassan</p>
                                    <p className='m-0 boost'>Boost your profile</p>
                                    <Row className='' style={{ marginTop: 15 }}>
                                        <Col md={6}>
                                            <p className='m-0 set'>Set your job preferences to be visible to employers</p>
                                        </Col>
                                        <Col md={6}>

                                            <p className='m-0 set'>Set up a job search with alerts for new opportunities</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={4}>
                                    <button className='events' style={{float:''}}>
                                        Job events
                                    </button>
                                    <hr />
                                    <button className='events' style={{float:''}}>
                                        Vew favorites
                                    </button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className='card shadow p-4' style={{ border: 'none', borderRadius: 20 }}>
                            <p className='card-t'>Recent activity</p>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className='card shadow p-4' style={{ border: 'none', borderRadius: 20 }}>
                            <p className='card-t m-0 p-0'>Profile strength</p>
                            <Row>
                                <Col><p style={{ fontWeight: 'bold', fontSize: 70, color: 'rgb(195, 48, 48)' }}>0%</p></Col>
                                <Col><p></p><Heart style={{ color: 'rgb(195, 48, 48)', float: 'right' }} size='4.5em' /></Col>
                            </Row>
                            <p className='update m-0 p-0'>
                                Update your profile here
                            </p>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
