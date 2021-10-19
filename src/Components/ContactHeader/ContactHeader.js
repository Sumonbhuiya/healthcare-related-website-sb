import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const ContactHeader = () => {
    // contact us header banner 
    return (
        <>
            <div className="bg-light">
                <Container>
                    <Row lg={2} xs md sm={1} className="align-items-center pt-5 pb-3">
                        <Col md={12} className="p-3">
                            <Card.Title className="text-center fs-3 fw-bold pb-3">We are ready to help any time.</Card.Title>
                            <Card.Text className="text-start text-muted">
                                In our healthcare service, the doctor & patient interaction plays the most significant role. It’s a significant challenge when it comes to monitoring patients remotely. Many doctor are connect with mobile applications so that they can reach their patients anytime and it’ll also help improve the operating performance of the clinics.
                            </Card.Text>
                            <Card.Text className="text-start text-muted">
                                If you need any help, contact with us quickly. our doctor give you online or offline any kind of suggestions.We lead, shape and fund health and care in England, making sure people have the support, care and treatment they need, with the compassion, respect and dignity they deserve. The new and changing health and care organisations work together with the Department to achieve this common purpose.
                            </Card.Text>
                        </Col>
                        <Col md={12}>
                            <Row className="align-items-center py-5">
                                <Col md={12} className="pb-3">
                                    <Card className="p-4" style={{ boxShadow: '3px 3px 6px rgb(141, 141, 141)' }}>
                                        <Row>
                                            <Col xs lg={4} md sm={3}>
                                                <Card.Img className="rounded-circle w-75" src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/Plugins3_27.jpg" />
                                            </Col>
                                            <Col xs lg={8} md sm={9} className="align-items-center">
                                                <Card.Title className="text-start">24/7 Live Support</Card.Title>
                                                <Card.Text className="text-start text-muted">
                                                    Choose the type of department and your staff along with the time slot
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                                <Col md={12} className="pb-3">
                                    <Card className="p-4" style={{ boxShadow: '3px 3px 6px rgb(141, 141, 141)' }}>
                                        <Row>
                                            <Col xs lg={4} md sm={3}>
                                                <Card.Img className="rounded-circle w-75" src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/Plugins3_27.jpg" />
                                            </Col>
                                            <Col xs lg={8} md sm={9} className="align-items-center">
                                                <Card.Title className="text-start">Need Offline Support</Card.Title>
                                                <Card.Text className="text-start text-muted">
                                                    Choose the type of department and your staff along with the time slot
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row >
                        </Col>
                    </Row >
                </Container>
            </div>
        </>
    );
};

export default ContactHeader;