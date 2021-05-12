import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
    return (
        <footer>
            <div className="footer-a d-flex align-items-center justify-content-center">
                <Row>
                    <Col xs={12} md={12} lg={4}>
                        <img src="https://i.ibb.co/QdQxGnV/phone-app.webp" className="img-fluid" alt="phone-app" border="0" />
                    </Col>
                    <Col xs={12} md={12} lg={4} className="py-4">
                        <h1>TRY THE OLX APP</h1>
                        <p>Buy, sell and find just about anything using the app on your mobile.</p>
                    </Col>
                    <Col xs={12} md={12} lg={4} className="p-5">
                        <p>GET YOUR APP TODAY</p>
                        <div>
                            <img src="https://i.ibb.co/xYMQFzw/appstore-2x.png" alt="Get IOS App" />
                            <img src="https://i.ibb.co/4jC9m83/playstore-2x.png" alt="Get Android App" />
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="footer-b">
                <Container>
                    <Row className="py-1">
                        <Col xs={12} md={6} lg={2}>
                            <ul>
                                <h4>POPULAR CATEGORIES</h4>
                                <li>Cars</li>
                                <li>Flats for rent</li>
                                <li>Jobs</li>
                                <li>Mobile Phones</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} lg={2}>
                            <ul>
                                <h4>TRENDING SEARCHES</h4>
                                <li>Bikes</li>
                                <li>Watches</li>
                                <li>Books</li>
                                <li>Dogs</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} lg={2}>
                            <ul>
                                <h4>ABOUT US</h4>
                                <li>About OLX Group</li>
                                <li>OLX Blog</li>
                                <li>Contact Us</li>
                                <li>OLX for Businesses</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} lg={2}>
                            <ul>
                                <h4>OLX</h4>
                                <li>Help</li>
                                <li>Sitemap</li>
                                <li>Legal &#38; Privacy information</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <ul>
                                <h4>FOLLOW US</h4>
                                <li>
                                    <span>
                                        <FontAwesomeIcon icon={faFacebook} size={'2x'} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faTwitter} size={'2x'} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faYoutube} size={'2x'} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faInstagram} size={'2x'} />
                                    </span>
                                </li>
                                <li>
                                    <img src="https://i.ibb.co/xYMQFzw/appstore-2x.png" alt="Get IOS App" />
                                    <img src="https://i.ibb.co/4jC9m83/playstore-2x.png" alt="Get Android App" />
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer-c">
                <Container>
                    <Row className="p-2 text-center d-flex justify-content-around align-items-center">
                        <Col xs={12} md={6} lg={6}>
                            <ul>
                                <span>Other Countries </span>
                                <li>India</li>-
                                <li>South Africa</li>-
                                <li>Indonesia</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <p><strong>Free Classifieds in Pakistan.</strong>  &copy; 2006-2021 OLX</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}
