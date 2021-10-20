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
            <Row xs={1} md={2} lg={3} className="g-3 handel-large py-5">
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