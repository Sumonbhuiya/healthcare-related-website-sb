import React from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../../Hooks/useData';
import PrimaryService from '../PrimaryService/PrimaryService';

const PrimaryServices = () => {
    const [services] = useData();

    const service = services.filter(service => (service.category === 'primary'));

    return (
        <div>
            <Row xs md={1} lg={3} className="g-3 w-75 mx-auto py-4">
                {
                    service.map(service => <PrimaryService
                        key={service.id}
                        service={service}>
                    </PrimaryService>)
                }
            </Row>
        </div>
    );
};

export default PrimaryServices;