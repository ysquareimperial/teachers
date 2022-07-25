import React from 'react'
import { Row } from "reactstrap"
import "./footer.css"


function Footer() {
    return (
        <div>
            <Row style={{ marginTop: "0px" }}>
                {/* <!-- Site footer --> */}
                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <h6 style={{ color: "lightGrey" }}>About</h6>
                                <p className="text-justify" >TutorSocially  .com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. TutorSocially   focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                            </div>

                            <div className="col-xs-6 col-md-3" style={{ color: "lightGrey" }}>
                                {/* <h6 >Categories</h6>
                                <ul className="footer-links">
                                    <li><a href="#">C</a></li>
                                    <li><a href="#">UI Design</a></li>
                                    <li><a href="#">PHP</a></li>
                                    <li><a href="#">Java</a></li>
                                    <li><a href="#">Android</a></li>
                                    <li><a href="#">Templates</a></li>
                                </ul> */}
                            </div>

                            <div className="col-xs-6 col-md-3" style={{ color: "lightGrey" }}>
                                <h6>Quick Links</h6>
                                <ul className="footer-links">
                                    <li><a href="#">Get Hire</a></li>
                                    <li><a href="#">Post Jobs</a></li>
                                    <li><a href="#">Sopport</a></li>
                                    <li><a href="#">Faq</a></li>
                                    <li><a href="#">About Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="container" style={{ color: "lightGrey" }}>
                        <div className="row">
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by
                                    <a href="#"> TutorSocially   </a>.
                                </p>
                            </div>

                            <div className="col-md-4 col-sm-6 col-xs-12" style={{ color: "lightGrey" }}>
                                <ul className="social-icons">
                                    <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </Row>
        </div>
    )
}

export default Footer