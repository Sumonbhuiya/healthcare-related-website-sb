import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AmbulanceService = (props) => {
    const { id, from, price, date, time, a_img } = props.service;
    return (
        <div>
            <Card className="p-4">
                <Row>
                    <Col xs lg={4} md sm={3}>
                        <Card.Img className="rounded-circle" style={{ height: "100px" }} src={a_img} />
                    </Col>
                    <Col xs lg={6} md sm={7} className="align-items-center">
                        <Card.Title className="text-start text-primary">{from}</Card.Title>
                        <Card.Text className="text-start text-muted"><span className="text-dark">Cost: </span>
                            {price}
                        </Card.Text>
                        <Row lg={1} xs md sm={1} className="align-items-center">
                            <Col lg={6} sm={6}>
                                <Card.Text className="text-start text-muted">
                                    <i className="far fa-calendar"></i> {date}
                                </Card.Text>
                            </Col>
                            <Col lg={6} sm={6}>
                                <Card.Text className="text-start text-muted">
                                    <i className="far fa-clock"></i> {time}
                                </Card.Text>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs lg={2} md sm={2}>
                        <Button className="bg-secondary rounded px-2 py-1"><Link className="text-white text-decoration-none" to={`/ambulancedetails/${id}`}>View</Link></Button>
                    </Col>
                </Row>
            </Card>
        </div >
    );
};

export default AmbulanceService;