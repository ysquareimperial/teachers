import React from "react"
import { useNavigate } from "react-router-dom";
import { Button, Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, } from "reactstrap"
import "./LandinStyle.css";


function Navigation() {
    const navigate = useNavigate()
    return (
        <div>
            <Navbar
                // color="light"
                expand="md"
                fixed="top"
                light
                style={{ backgroundColor: "lightgray" }}
            >
                <NavbarBrand href="/" className="Navlogo" >
                    TutorSocially
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar className="mainNavItems">
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem className="NavItem" onClick={() => navigate("/employer/sign-up")}>
                            <div >Get Hired</div>
                        </NavItem>
                        <NavItem className="NavItem" onClick={() => navigate("/employer/sign-in")}>
                            <div>Post Jobs</div>
                        </NavItem>
                        <NavItem className="NavItem">
                            <div>Support</div>
                        </NavItem>
                        <NavItem className="NavItem">
                            <div>Faq</div>
                        </NavItem>
                        <NavItem className="NavItem">
                            <div>About us</div>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <Button className="" outline >Near Wallet</Button>
                        {/* <a class="btn-0" href="#">Wallet</a> */}
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation