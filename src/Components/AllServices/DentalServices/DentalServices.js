import React from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../../Hooks/useData';
import DentalService from '../DentalService/DentalService';

const DentalServices = () => {
    // load data from hooks
    const [services] = useData();

    const service = services.filter(service => (service.category === 'Dental'));

    return (
        <div>
            <Row xs md={1} lg={3} className="g-3 w-75 mx-auto py-5">
                {
                    service.map(service => <DentalService
                        key={service.id}
                        service={service}>
                    </DentalService>)
                }
            </Row>
        </div>
    );
};

export default DentalServices;