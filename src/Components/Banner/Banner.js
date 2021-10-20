import React from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';

const Banner = () => {
    // home page banner 
    return (
        <div className=" bg-light">
            <Container>
                <Row lg={2} xs md sm={1} className="align-items-center py-5">
                    <Col lg={8}>
                        <Row lg={2} xs md sm={1} className="align-items-center py-2">
                            <Col>
                                <Row className="pb-4">
                                    <Col>
                                        <h2 className="text-start">Choose the best for your health!</h2>
                                    </Col>
                                </Row>
                                <Row className="pb-4">
                                    <Col xs={4} lg={3} md sm={3}>
                                        <Card.Img className="rounded-circle" src="https://inmedical.sdemo.site/wp-content/uploads/2017/02/item-infor-1-style-5-1.jpg" />
                                    </Col>
                                    <Col xs={8} lg={9} md sm={9} className="align-items-center">
                                        <Card.Title className="text-start">Advanced diagnostic method</Card.Title>
                                        <Card.Text className="text-start text-muted">
                                            The ability to be able to look inside our bodies in superb clarity has had a major impact upon...
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={4} lg={3} md sm={3}>
                                        <Card.Img className="rounded-circle" src="https://inmedical.sdemo.site/wp-content/uploads/2016/12/item-infor-3-style-5-1.jpg" />
                                    </Col>
                                    <Col xs={8} lg={9} md sm={9}>
                                        <Card.Title className="text-start">Pediatric and family center</Card.Title>
                                        <Card.Text className="text-start text-muted">
                                            The average wait time to see a doctor at our hospital as provided by patient reviews is 5 minutes.
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={12}>
                                <Card.Img variant="top" src="https://inmedical.sdemo.site/wp-content/uploads/2016/12/choose-doctor-1.png" />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4} sm={12} className="">
                        <Card className="bg-primary bg-gradient">
                            <Card.Body className="p-4">
                                <Card.Title className="fs-4 text-white">OPENING HOURS</Card.Title>
                            </Card.Body>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td className="text-white">Day</td>
                                        <td className="text-white">Time</td>
                                    </tr>
                                    <tr>
                                        <td className="text-white">Saturday – Wednesday</td>
                                        <td className="text-white">08:00 – 20:00</td>
                                    </tr>
                                    <tr>
                                        <td className="text-white">Thursday</td>
                                        <td className="text-white">09:00 – 17:00</td>
                                    </tr>
                                    <tr>
                                        <td className="text-white">Friday</td>
                                        <td className="text-white">08:00 – 16:00</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2" className="text-white">For Emergency Patient and visitor 24/7 open.</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row >
            </Container>
        </div >
    );
};

export default Banner;