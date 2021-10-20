import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const AmbulanceDetail = (props) => {
    const { from, price, date, time, driver, a_img, d_img, d_contact, d_description } = props.service;
    return (
        <>
            <Col lg={8}>
                {/* ambulance and driver information */}
                <Row xs lg={2} md sm={1} className="align-items-center p-2">
                    <Col lg={4} md sm={12}>
                        <Card.Img className="rounded w-75 pb-2" src={d_img} />
                        <Card.Text className="text-center text-muted">
                            <Col className="text-primary">Driver</Col>
                        </Card.Text>
                    </Col>
                    <Col xs lg={8} md sm={12} className="align-items-center">
                        <Card.Title className="text-start text-primary"><span className="text-dark fw-bold">Name: </span>{driver}</Card.Title>
                        <Card.Text className="text-start text-muted">
                            <Col className="text-primary"><span className="text-dark fw-bold">Contact: </span>{d_contact}</Col>
                            <Col className="text-primary pt-2"><span className="text-dark fw-bold">From: </span><i className="fas fa-car-side text-warning"></i> {from} <span className="text-muted">( <i className="fas fa-money-bill-alt text-success"></i> {price})</span></Col>
                            <Row lg={1} xs md sm={1} className="align-items-center pt-2">
                                <Col lg={6} sm={6}>
                                    <Card.Text className="text-start text-muted">
                                        <i className="text-danger far fa-calendar"></i> {date}
                                    </Card.Text>
                                </Col>
                                <Col lg={6} sm={6}>
                                    <Card.Text className="text-start text-muted">
                                        <i className="text-danger far fa-clock"></i> {time}
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Col className="text-muted pt-2"><span className="text-dark fw-bold">More Information About {driver}: </span>{d_description}</Col>
                        </Card.Text>
                    </Col>
                </Row>
            </Col>
            <Col lg={4} sm={12} className="align-items-center">
                <Card.Img className="rounded w-75 pb-2" src={a_img} />
                <Card.Text className="text-center text-muted">
                    <Col className="text-primary">Ambulance</Col>
                </Card.Text>
            </Col>
        </>
    );
};

export default AmbulanceDetail;