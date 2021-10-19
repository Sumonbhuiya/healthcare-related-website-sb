import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Feedback = () => {
    // home page feedback section 
    return (
        <div className=" bg-light mt-3 p-4">
            {/* feedback heading  */}
            <div className=" w-75 mx-auto">
                <h1 className="text-dark">PATIENTS <span className="text-primary">SAYS ABOUT US</span> <br /></h1>
                <p className="text-muted fs-5">Our promise is a quality-driven service, and our aim is to ensure affordable access to healthcare services</p>
            </div>
            <Container>
                <Row lg={2} xs md sm={1} className="align-items-center py-5">
                    <Col md={12} className="pb-3">
                        <Card className="p-4" style={{ boxShadow: '3px 3px 6px rgb(141, 141, 141)' }}>
                            <Row>
                                <Col xs lg={3} md sm={3}>
                                    <Card.Img className="rounded-circle w-75" src="https://inmedical.sdemo.site/wp-content/uploads/2017/01/inmedical_doctor_2-1-150x150.jpg" />
                                </Col>
                                <Col xs lg={9} md sm={9} className="align-items-center">
                                    <Card.Title className="text-start">David Sunders</Card.Title>
                                    <Card.Text className="text-start text-muted">
                                        to: Director Manager
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs lg={12} md sm={12} className="align-items-center pt-4">
                                    <Card.Text className="text-start text-muted">
                                        The more prepared you are, the more confident you will be in your plans. Try reviewing differential diagnoses for each of the patients on the schedule the night before and make notes on your patients that are organized just like a case presentation.
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col md={12} className="pb-3">
                        <Card className="p-4" style={{ boxShadow: '3px 3px 6px rgb(141, 141, 141)' }}>
                            <Row>
                                <Col xs lg={3} md sm={3}>
                                    <Card.Img className="rounded-circle w-75" src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/testimonial1-1.jpg" />
                                </Col>
                                <Col xs lg={9} md sm={9} className="align-items-center">
                                    <Card.Title className="text-start">Emma Watson</Card.Title>
                                    <Card.Text className="text-start text-muted">
                                        to: Director Manager
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs lg={12} md sm={12} className="align-items-center pt-4">
                                    <Card.Text className="text-start text-muted">
                                        Need to be open to learning even on a rotation that you are not very interested in. You often disappeared. Also, you need to make sure you review the case with the clinician frequently during the day – especially when you receive new results.
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row >
            </Container>
        </div >
    );
};

export default Feedback;