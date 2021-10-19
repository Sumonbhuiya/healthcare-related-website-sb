import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

const Slider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-photo/woman-white-robe-holding-toothbrush-with-paste_7502-7484.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="text-dark">Make Your <span className="text-danger">Dental</span> <br />Experience A Lot Brighter</h1>
                        <p className="text-dark">With best facilities and better equipments, you are in safe hands.</p>
                        <Button className="px-5" variant="secondary">Stay With Us</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-photo/vaccinated-diverse-people-presenting-shoulder_53876-127150.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-dark">From Simple <span className="text-success">Procedures</span> <br />You Can Be Stay Healthy</h1>
                        <p className="text-dark">With best facilities and better equipments, you are in safe hands.</p>
                        <Button className="px-5" variant="secondary">Stay With Us</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Slider;