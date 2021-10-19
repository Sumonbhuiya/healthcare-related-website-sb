import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const ContactInfo = () => {
    return (
        <div className="bg-info bg-gradient">
            <Container className=" pt-5">
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card.Img className="rounded-circle w-25" style={{ height: "120px" }} variant="top" src="https://logodix.com/logo/1242319.png" />
                        <Card.Body>
                            <Card.Title className="text-white fs-3 fw-bold">PHONE CONTACT</Card.Title>
                            <Card.Text className="text-white fst-italic fs-5">
                                Need help to specialist doctor!
                            </Card.Text>
                            <Card.Text className="text-white fs-5">
                                Custom Services post type allows you display a variety of medical services for a large hospital as well as
                            </Card.Text>
                            <Card.Text className="text-white fw-lighter">
                                Saturday – Thursday 08:00 am – 10:00 pm
                            </Card.Text>
                            <Card.Text className="text-primary">
                                +98 987 654 321
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col>
                        <Card.Img className="rounded-circle w-25" style={{ height: "120px" }} variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Comment_font_awesome.svg/1200px-Comment_font_awesome.svg.png" />
                        <Card.Body>
                            <Card.Title className="text-white fs-3 fw-bold">EMAIL ADDRESS</Card.Title>
                            <Card.Text className="text-white fst-italic fs-5">
                                Need any doctor information!
                            </Card.Text>
                            <Card.Text className="text-white fs-5">
                                Custom Services post type allows you display a variety of medical services for a large hospital as well as
                            </Card.Text>
                            <Card.Text className="text-white fw-lighter">
                                #We are happy to answer any questions
                            </Card.Text>
                            <Card.Text className="text-primary">
                                support@familycare.com
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
                <hr />
            </Container>
            <div className="pb-4 px-3">
                <h1 className="text-white">You are always <span className="fw-bold">important for us</span> <br /></h1>
                <p className="text-white fst-italic fs-5">Those who think they have no time for exercise will sooner or later have to find time for illness</p>
            </div>
        </div>
    );
};

export default ContactInfo;