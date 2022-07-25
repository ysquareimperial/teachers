import React from 'react'
import { Col, Row } from 'reactstrap'
import { Mail, Bell, User } from 'react-feather'
export default function Navbar() {
    return (
        <div>
            {/* <navbar className='nav'> */}
            <Row className='shadow-sm nav p-2 m-0'>
                <Col md={4}>Logo</Col>
                <Col md={4}>
                    <input type='search' className='search_field' placeholder='Search fro jobs, events and more...' />
                </Col>
                <Col md={4}>
                    <div className='flex-container'>
                        <Mail className='nav-icon' />
                        <Bell className='nav-icon' />
                        <User className='nav-icon' />
                    </div>
                </Col>
            </Row>
            {/* </navbar> */}
        </div>
    )
}
