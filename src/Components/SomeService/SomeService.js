import React from 'react';
import { Button, Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SomeService.css'

const SomeService = (props) => {
    // for home page service data
    const { id, name, img, education, day, description, category } = props.service;
    return (
        <div>
            <Col>
                <Card className="shadow-hover">
                    <Card.Img className="p-4 rounded image-setup" variant="top" src={img} />
                    <Card.Body className="px-4">
                        <Card.Title className="fs-4">{name} <small className="fs-6">({education})</small></Card.Title>
                        <Card.Text>
                            <Col className="text-primary">{category} Care</Col>
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem className="text-primary"><span className="text-dark fw-bold">Availabel on:</span> {day}</ListGroupItem>
                        <ListGroupItem className="text-muted">{description.slice(0, 100)}</ListGroupItem>
                    </ListGroup>
                    <Button className="w-100 bg-dark"><Link className="text-white text-decoration-none" to={`/service/${id}`}>View Details</Link></Button>
                </Card>
            </Col>
        </div>
    );
};

export default SomeService;