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
                    <div className="card-photo">
                        <Card.Img className="p-4 rounded image-setup" variant="top" src={img} />
                        <Card.Body className="px-4 pt-0">
                            <Card.Title className="fs-4 name">{name} <small className="fs-6">({education})</small></Card.Title>
                        </Card.Body>
                    </div>
                    <div className="card-details">
                        <Card.Text>
                            <Col className="text-primary category">{category} Care</Col>
                        </Card.Text>
                        <Card.Text>
                            <Col className="details">{description.slice(0, 100)}...</Col>
                        </Card.Text>
                        <Button className="handel-button px-4 py-2"><Link className="text-white text-decoration-none" to={`/service/${id}`}>View Details</Link></Button>
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default SomeService;