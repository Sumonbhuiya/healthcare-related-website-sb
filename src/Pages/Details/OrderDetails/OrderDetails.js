import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OrderDetails = (props) => {
    // load information for servic details page 
    const { name, education, img, category, expert, day, description } = props.service
    return (
        <>
            <Col lg={8}>
                <Row xs lg={2} md sm={1} className="align-items-center py-2">
                    <Col lg={4} md sm={12}>
                        <Card.Img className="rounded w-75 pb-2" src={img} />
                    </Col>
                    <Col xs lg={8} md sm={12} className="align-items-center">
                        <Card.Title className="text-start text-primary"><span className="text-dark fw-bold">Name: </span>{name} <span className="text-muted">({education})</span></Card.Title>
                        <Card.Text className="text-start text-muted">
                            <Col className="text-primary"><span className="text-dark fw-bold">Specialist on: </span>{category} Care</Col>
                            <Col className="text-primary"><span className="text-dark fw-bold">About: </span>{expert} Care</Col>
                            <Col className="text-primary"><span className="text-dark fw-bold">Available on: </span><i className="fas fa-calendar-check text-warning"></i> {day}</Col>
                            <Col className="text-muted"><span className="text-dark fw-bold">More Information About {name}: </span>{description}</Col>
                        </Card.Text>
                    </Col>
                </Row>
            </Col>
            {/* button  */}
            <Col lg={4} sm={12} className="align-items-center">
                <Card.Body className="p-4">
                    <Card.Title className="fs-5 text-primary">8 Slots Available</Card.Title>
                    <Button className="bg-primary rounded px-2 py-2"><Link className="text-white text-decoration-none" to="/appointment"><i className="far fa-calendar-plus text-danger fs-5"></i> Book Appointment</Link></Button>
                </Card.Body>
            </Col>
        </>
    );
};

export default OrderDetails;