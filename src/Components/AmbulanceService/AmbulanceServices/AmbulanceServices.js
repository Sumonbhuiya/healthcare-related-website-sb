import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useAmbulance from '../../../Hooks/useAmbulance';
import AmbulanceService from '../AmbulanceService/AmbulanceService';

const AmbulanceServices = () => {
    // load ambulance data from hooks
    const [ambulance] = useAmbulance();

    return (
        <div>
            <Container>
                <Row lg={2} xs md sm={1} className="align-items-center py-5">
                    <Col md={12} className="pb-3">
                        {
                            ambulance.map(service => <AmbulanceService
                                key={service.id}
                                service={service}>
                            </AmbulanceService>)
                        }

                    </Col>
                    {/* ambulance service another card */}
                    <Col md={12} className="pb-3">
                        <Row className="pb-4">
                            <Col xs lg={12} md sm={12} className="align-items-center">
                                <Card.Title className="fs-3">WANT TO KNOW!</Card.Title>
                                <Card.Text className=" fs-5 pt-2 pb-4 text-muted">
                                    Find everything which need to make you help and comfortable as possible.
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row className="pb-4">
                            <Col xs lg={3} md sm={3}>
                                {/* <i className="fas fa-phone text-white rounded-circle bg-primary w-75 h-75 p-3 fs-1"></i> */}
                                <Card.Img className="p-3 rounded-circle bg-primary w-75" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Font_Awesome_5_solid_car.svg/120px-Font_Awesome_5_solid_car.svg.png" />
                            </Col>
                            <Col xs lg={9} md sm={9} className="align-items-center text-decoration">
                                <Card.Title className="text-start">Mission, Vision, Values</Card.Title>
                                <Card.Text className="text-start text-muted">
                                    Our mission is to provide better care of the sick, investigation into their problems, and further education of those who serve.
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row className="pb-4">
                            <Col xs lg={3} md sm={3}>
                                <Card.Img className="p-3 rounded-circle bg-primary w-75" src="https://www.keypersystems.com/wp-content/uploads/2015/06/automotive-icon.png" />
                            </Col>
                            <Col xs lg={9} md sm={9} className="align-items-center text-decoration">
                                <Card.Title className="text-start">Integrity & Innovations</Card.Title>
                                <Card.Text className="text-start text-muted">
                                    Our discoveries have saved millions of patients’ lives, and many are standard practice in medicine today.
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row className="pb-4">
                            <Col xs lg={3} md sm={3}>
                                <Card.Img className="p-3 rounded-circle bg-primary w-75" src="https://image.flaticon.com/icons/png/128/67/67994.png" />
                            </Col>
                            <Col xs lg={9} md sm={9} className="align-items-center text-decoration">
                                <Card.Title className="text-start">Furthering Patient Care</Card.Title>
                                <Card.Text className="text-start text-muted">
                                    Medic Hospital believes that medical innovation significantly benefits patient care
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs lg={3} md sm={3}>
                                <Card.Img className="rounded-circle bg-primary w-75 p-3" src="https://image.flaticon.com/icons/png/128/67/67907.png" />
                            </Col>
                            <Col xs lg={9} md sm={9} className="align-items-center text-decoration">
                                <Card.Title className="text-start">Model of Healthcare</Card.Title>
                                <Card.Text className="text-start text-muted">
                                    New technologies, new medications and new approaches for treating the sick have changed the way we deliver care.
                                </Card.Text>
                            </Col>
                        </Row>
                    </Col>
                </Row >
            </Container>
        </div>
    );
};

export default AmbulanceServices;