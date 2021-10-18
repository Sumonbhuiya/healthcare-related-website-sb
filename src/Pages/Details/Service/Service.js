import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useData from '../../../Hooks/useData';
import OrderDetails from '../OrderDetails/OrderDetails';

const Service = () => {
    const { serviceId } = useParams();
    const [services] = useData();

    const serviceDetails = services.filter(service => (service.id === parseInt(serviceId)));
    return (
        <div>
            <div className="p-3 bg-secondary">
                <h1 className="text-dark">MAKE AN <span className="text-primary">APPOINTMENT</span> <br /></h1>
                <p className="text-white">Find everything you need to make your trip as pleasant and comfortable as possible.</p>
            </div>
            <Container className="py-4">
                <Row xs lg={2} md sm={1} className="align-items-center py-5">
                    {
                        serviceDetails.map(service => <OrderDetails
                            key={service.id}
                            service={service}>
                        </OrderDetails>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Service;