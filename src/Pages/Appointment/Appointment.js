import React from 'react';
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppointmentBanner from '../../Components/AppointmentBanner/AppointmentBanner';

const Appointment = () => {
    return (
        <>
            {/* call appointment banner components  */}
            <AppointmentBanner></AppointmentBanner>
            {/* appointment form  */}
            <div className="bg-light">
                <Container className=" py-5">
                    <Row xs={1} md={2} className="g-1">
                        <Col className="bg-secondary bg-gradient">
                            <Card.Body>
                                <Card.Title className="text-dark fs-2 pb-3 pt-4">Working <span className="text-primary fw-bold">Hours</span></Card.Title>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td className="fw-bold text-dark">Saturday</td>
                                            <td>09:00AM - 05:00PM</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold text-dark">Sunday</td>
                                            <td>09:00AM - 01:00PM</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold text-dark">Monday</td>
                                            <td>11:00AM - 05:00PM</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold text-dark">Tuesday</td>
                                            <td>09:00AM - 03:00PM</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold text-dark">Wednesday</td>
                                            <td>08:00AM - 11:00PM</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold text-dark">Thursday</td>
                                            <td>10:00AM - 02:00PM</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold text-dark">Friday</td>
                                            <td>01:00PM - 04:00PM</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Col>
                        <Col className="bg-secondary">
                            <Card.Body>
                                <Card.Title className="text-dark fs-2 pb-3 pt-4">Book An <span className="text-primary fw-bold">Appointment</span></Card.Title>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Control type="text" placeholder="Name" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicNumber">
                                        <Form.Control type="text" placeholder="Phone" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicServices">
                                        <Form.Select aria-label="Default select example">
                                            <option>Type of Services</option>
                                            <option value="1">Primary</option>
                                            <option value="2">Sexual</option>
                                            <option value="3">Mental</option>
                                            <option value="4">Dental</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicProblem">
                                        <Form.Control type="text" placeholder="Problem" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicTextDate">
                                        <Form.Control type="text" placeholder="Date" required />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        <Link className="text-white text-decoration-none" to="/services"><i className="fas fa-hiking"></i> Submit</Link>
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Appointment;