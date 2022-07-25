import React from 'react'
import { Button, Row, Col, Card, Container } from 'reactstrap'
import './Teachers.css'
import strength from './images/strength.png'
import { Heart, User, FileText, Eye, Search } from 'react-feather'
import Navbar from './Navbar'
export default function Teachers() {
    return (
        <div>
            <Navbar />
            <Container className='mb-5'>
                <Row className='mt-5'>
                    <Col md={6}>
                        <Card className='shadow p-4 index-card' style={{ border: 'none', borderRadius: 20 }}>
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
                                    <button className='events' style={{ float: '' }}>
                                        Find Job events
                                    </button>
                                    <hr />
                                    <button className='events' style={{ float: '' }}>
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
                <Row className='mt-3'>
                    <Col md={9}>
                        <Card className='shadow p-4 index-card' style={{ border: 'none', borderRadius: 20 }}>
                            <p className='card-t m-0 p-0'>Getting started</p>
                            <p className='ways'>Ways to help employers and jobs find you!</p>
                            <Row>
                                <Col md={6}>
                                    <Card className='shadow-sm p-4 index-card' style={{ border: '', borderRadius: 10 }}>
                                        <p className='card-t m-0 p-0'>1. Complete your profile
                                            <User style={{ color: 'grey', marginLeft: 10 }} size='1.5em' />
                                        </p>
                                        <p className='gt-t'>
                                            Adding your photo, work authorization, location, and personal details, provides the basic information all employers need to hire you.
                                        </p>
                                        <button className='events' style={{ float: '' }}>
                                            View Profile
                                        </button>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className='shadow-sm p-4 index-card' style={{ border: '', borderRadius: 10 }}>
                                        <p className='card-t m-0 p-0'>2. Create your resume
                                            <FileText style={{ color: 'grey', marginLeft: 10 }} size='1.5em' />
                                        </p>
                                        <p className='gt-t'>
                                            By creating your resume, you will be able to apply for jobs. The more detail you add, the more jobs you will qualify for.
                                        </p>
                                        <button className='events' style={{ float: '' }}>
                                            View resume
                                        </button>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className='mt-3'>
                                <Col md={6}>
                                    <Card className='shadow-sm p-4 index-card' style={{ border: '', borderRadius: 10 }}>
                                        <p className='card-t m-0 p-0'>3. Set jon preferences
                                            <Eye style={{ color: 'grey', marginLeft: 10 }} size='1.5em' />
                                        </p>
                                        <p className='gt-t'>
                                            fasd fa df  fasd fasdfasdf fadsfsdafas fasdfsdfas fasdfasdfsd fasdfasdfsad fasdfasfsdaf fadfasdfasd fasdfasdfsad fasfasfsad
                                        </p>
                                        <button className='events' style={{ float: '' }}>
                                            View preferences
                                        </button>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className='shadow-sm p-4 index-card' style={{ border: '', borderRadius: 10 }}>
                                        <p className='card-t m-0 p-0'>4. Search jobs and get notified
                                            <Search style={{ color: 'grey', marginLeft: 10 }} size='1.5em' />
                                        </p>
                                        <p className='gt-t'>
                                            Find jobs based on location, position, school type and more. Click the Save Search button to get automatic notifications about new opportunities.
                                        </p>
                                        <button className='events' style={{ float: '' }}>
                                            Search for jobs
                                        </button>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className='shadow p-4 index-card' style={{ border: 'none', borderRadius: 20 }}>
                            <p className='card-t m-0 p-0'>Events</p>
                            <hr />
                            <p className='recent'>Recent events in your area</p>
                            <hr />
                            <button className='events' style={{ float: '' }}>
                                View more
                            </button>
                        </Card>
                        <Card className='shadow p-4 index-card mt-3' style={{ border: 'none', borderRadius: 20 }}>
                            <p className='card-t m-0 p-0'>Favorites</p>
                            <hr />
                            <p className='recent'>fav fav fav</p>
                            <hr />
                            <button className='events' style={{ float: '' }}>
                                View all favorites
                            </button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
