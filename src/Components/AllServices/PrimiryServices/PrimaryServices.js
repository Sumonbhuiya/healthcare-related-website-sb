import React from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../../Hooks/useData';
import PrimaryService from '../PrimaryService/PrimaryService';

const PrimaryServices = () => {
    // load data from json 
    const [services] = useData();

    const service = services.filter(service => (service.category === 'primary'));

    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-3 handel-large py-5">
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