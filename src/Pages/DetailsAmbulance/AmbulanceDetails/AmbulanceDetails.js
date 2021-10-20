import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAmbulance from '../../../Hooks/useAmbulance';
import AmbulanceDetail from '../AmbulanceDetail/AmbulanceDetail';

const AmbulanceDetails = () => {
    // load specific data 
    const { ambulancedetailsId } = useParams();
    const [ambulance] = useAmbulance();

    // filter fron json 
    const serviceDetails = ambulance.filter(service => (service.id === parseInt(ambulancedetailsId)));
    return (
        <div>
            {/* header  */}
            <div className="p-3 bg-secondary">
                <h2 className="text-white">DETAILS ABOUT AMBULANCE SERVICES<br /></h2>
                <p className="text-white fst-italic fs-5">See details about specific service!</p>
            </div>
            <Container className="py-4">
                <Row xs lg={2} md sm={1} className="align-items-center pb-2 pt-5">
                    {
                        serviceDetails.map(service => <AmbulanceDetail
                            key={service.id}
                            service={service}>
                        </AmbulanceDetail>)
                    }
                </Row>
            </Container>
            <div className="pb-5">
                <Button className="bg-secondary rounded-pill px-4 py-2"><Link className="text-white text-decoration-none" to="/ambulance"><i className="fas fa-arrow-left text-primary"></i> Go Back</Link></Button>
            </div>
        </div>
    );
};

export default AmbulanceDetails;