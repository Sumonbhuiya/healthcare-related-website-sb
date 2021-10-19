import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const AppointmentBanner = () => {
    // appointment section header banner 
    return (
        <div className="bg-info bg-gradient">
            <Container className=" p-5">
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card.Body>
                            <Card.Title className="text-white fs-2 pb-2">Technology at your service!</Card.Title>
                            <Card.Text className="text-white fst-italic fs-5">
                                Adopting popular patient engagement technologies could be the key to ramping up clinic operations and driving an organization closer toward patient-centered care,
                            </Card.Text>
                            <Card.Text className="text-white fs-5 fst-italic">
                                according to a new report from the Medical Group Management Association (MGMA).
                            </Card.Text>
                        </Card.Body>
                    </Col>

                    <Col sm={12}>
                        <Card.Img variant="top" src="https://i.ibb.co/Bjy3Fb8/device-1-2.png" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AppointmentBanner;