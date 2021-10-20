import React from 'react';
import { Card, Col, Container, Nav, Row } from 'react-bootstrap';

const Footer = () => {
    // footer section 
    return (
        <div className="bg-dark">
            <Container>
                {/* footer first row */}
                <Row lg={2} xs md sm={1} className="align-items-center pt-5">
                    <Col lg={4} sm={12} className="">
                        <Card.Body className="p-4">
                            <Card.Img variant="top" className="w-75" src="http://myfamilycheck.com/images/logo.png" />
                        </Card.Body>
                        <Container>
                            <Nav className="mx-auto w-75">
                                <Nav.Link href="https://www.facebook.com/"><i className="fab fa-facebook-square fs-3"></i></Nav.Link>
                                <Nav.Link href="https://twitter.com/Twitch"><i className="fab fa-twitter-square fs-3"></i></Nav.Link>
                                <Nav.Link href="https://www.youtube.com/"><i className="fab fa-youtube-square fs-3" ></i></Nav.Link>
                                <Nav.Link href="https://www.linkedin.com/feed/"><i className="fab fa-linkedin fs-3"></i></Nav.Link>
                            </Nav>
                        </Container>
                    </Col>
                    <Col lg={8} sm={12}>
                        <Row lg={2} xs={1} md sm={1} className="align-items-center py-2">
                            <Col sm={12}>
                                <Row className="pb-4">
                                    <Col xs={3} lg={4} md sm={3}>
                                    </Col>
                                    <Col xs={9} lg={8} md sm={9} className="align-items-center">
                                        <Card.Text className="text-start text-white fs-4">
                                            Our services
                                        </Card.Text>
                                        <Card.Text className="text-start text-muted">
                                            About Our Clinic
                                        </Card.Text>
                                        <Card.Text className="text-start text-muted">
                                            Read Our Blogs
                                        </Card.Text>
                                        <Card.Text className="text-start text-muted">
                                            About Us
                                        </Card.Text>
                                        <Card.Text className="text-start text-muted">
                                            Read FAQs
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={12}>
                                <Row className="pb-4">
                                    <Col xs={2} lg={4} md sm={3}>
                                    </Col>
                                    <Col xs={10} lg={8} md sm={9}>
                                        <Card.Text className="text-start text-white fs-4">
                                            Out Contact
                                        </Card.Text>
                                        <Card.Text className="text-start text-muted">
                                            <i className="fas fa-phone-alt text-primary "></i> +880 1784 784333
                                        </Card.Text>
                                        <Card.Text className="text-start text-muted">
                                            <i className="fas fa-envelope text-primary "></i> familycheck@support.com
                                        </Card.Text>
                                        <Card.Text className="text-start text-muted">
                                            <i className="fas fa-map-marker-alt text-primary "></i> Farmgate Panthopot Road, Dhaka-1215
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row >
                {/* footer second row  */}
                <Row lg={2} xs md sm={1} className="align-items-center py-3">
                    <Col lg={4} sm={12} className="">
                        <Card.Body className="py-4">
                            <Card.Text className="text-white">Copyright <i className="far fa-copyright text-primary"></i> 2021 Health Care | SumonBhuiya</Card.Text>
                        </Card.Body>
                    </Col>
                    <Col lg={8}>
                        <Row lg={2} xs={2} md sm={2} className="align-items-center py-2">
                            <Col sm={6}>
                                <Row className="pb-4">
                                    <Col xs lg={4} md sm={3}>
                                    </Col>
                                    <Col xs lg={8} md sm={9} className="align-items-center">
                                        <Card.Text className="text-start text-white">
                                            Terms of Use
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={6}>
                                <Row className="pb-4">
                                    <Col xs lg={4} md sm={3}>
                                    </Col>
                                    <Col xs lg={8} md sm={9}>
                                        <Card.Text className="text-start text-white">
                                            Privacy Statement
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row >
            </Container>
        </div>
    );
};

export default Footer;