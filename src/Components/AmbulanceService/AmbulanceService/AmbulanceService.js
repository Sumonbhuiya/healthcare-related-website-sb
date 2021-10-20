import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AmbulanceService.css'

const AmbulanceService = (props) => {
    // load information from json 
    const { id, from, price, date, time, a_img } = props.service;
    return (
        <div className="ambulance-hover">
            {/* ambulance card */}
            <Card className="p-4">
                <Row>
                    <Col xs={12} lg={4} md sm={3}>
                        <Card.Img className="rounded" style={{ height: "" }} src={a_img} />
                    </Col>
                    <Col xs={8} lg={6} md sm={7} className="align-items-center pt-2">
                        <Card.Title className="text-start text-primary">{from}</Card.Title>
                        <Card.Text className="text-start text-muted"><span className="text-dark">Cost: </span>
                            {price} <i className="far fa-money-bill-alt text-success"></i>
                        </Card.Text>
                        <Row lg={1} xs md sm={1} className="align-items-center">
                            <Col lg={6} sm={6}>
                                <Card.Text className="text-start text-muted">
                                    <i className="far fa-calendar text-warning"></i> {date}
                                </Card.Text>
                            </Col>
                            <Col lg={6} sm={6}>
                                <Card.Text className="text-start text-muted">
                                    <i className="far fa-clock text-warning"></i> {time}
                                </Card.Text>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={2} lg={2} md sm={2} className="pt-4">
                        <Button className="bg-secondary rounded px-2 py-1"><Link className="text-white text-decoration-none" to={`/ambulancedetails/${id}`}>View</Link></Button>
                    </Col>
                </Row>
            </Card>
        </div >
    );
};

export default AmbulanceService;