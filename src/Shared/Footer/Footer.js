import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark">
            <Container>
                <Row lg={2} xs md sm={1} className="align-items-center pt-5">
                    <Col lg={4} sm={12} className="">
                        <Card.Body className="p-4">
                            <Card.Title className="fs-4 text-white">FAMILY CARE</Card.Title>
                        </Card.Body>
                    </Col>
                    <Col lg={8}>
                        <Row lg={2} xs md sm={2} className="align-items-center py-2">
                            <Col sm={6}>
                                <Row className="pb-4">
                                    <Col xs lg={4} md sm={3}>
                                    </Col>
                                    <Col xs lg={8} md sm={9} className="align-items-center">
                                        <Card.Text className="text-start text-white">
                                            About Our Hospital
                                        </Card.Text>
                                        <Card.Text className="text-start text-white">
                                            Read Our Blogs
                                        </Card.Text>
                                        <Card.Text className="text-start text-white">
                                            About Us
                                        </Card.Text>
                                        <Card.Text className="text-start text-white">
                                            About Your Comment
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
                                            Get Help
                                        </Card.Text>
                                        <Card.Text className="text-start text-white">
                                            Read FAQs
                                        </Card.Text>
                                        <Card.Text className="text-start text-white">
                                            View All  Dr.
                                        </Card.Text>
                                        <Card.Text className="text-start text-white">
                                            Give Feedback
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row >
                <Row lg={2} xs md sm={1} className="align-items-center py-3">
                    <Col lg={4} sm={12} className="">
                        <Card.Body className="py-4">
                            <Card.Text className="text-white">Copyright © 2021 Health Care | SumonBhuiya</Card.Text>
                        </Card.Body>
                    </Col>
                    <Col lg={8}>
                        <Row lg={2} xs md sm={2} className="align-items-center py-2">
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