import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PrimaryService = (props) => {
    // load information from json 
    const { id, name, img, education, day, expert, category } = props.service;
    return (
        <div>
            <Col>
                {/* show information in card  */}
                <Card className="shadow-hover" style={{ height: "580px" }}>
                    <Card.Img className="p-4 rounded" style={{ height: "280px" }} variant="top" src={img} />
                    <Card.Body className="px-4">
                        <Card.Title className="fs-4">{name} <small className="fs-6">({education})</small></Card.Title>
                        <Card.Text>
                            <Col className="text-primary">{category} Care</Col>
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem className="text-primary"><span className="text-dark fw-bold">Availabel on:</span> {day}</ListGroupItem>
                        <ListGroupItem className="text-muted"><span className="text-dark fw-bold">Expart on:</span> {expert}</ListGroupItem>

                    </ListGroup>
                    <Button className="w-100 bg-dark"><Link className="text-white text-decoration-none" to={`/service/${id}`}><i className="text-warning far fa-eye"></i> View Details</Link></Button>
                </Card>
            </Col>
        </div>
    );
};

export default PrimaryService;