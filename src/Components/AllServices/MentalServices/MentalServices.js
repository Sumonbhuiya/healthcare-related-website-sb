import React from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../../Hooks/useData';
import MentalService from '../MentalService/MentalService';

const MentalServices = () => {
    // load data from json 
    const [services] = useData();

    const service = services.filter(service => (service.category === 'Mental'));

    return (
        <div>
            <Row xs md={1} lg={3} className="g-3 w-75 mx-auto py-4">
                {
                    service.map(service => <MentalService
                        key={service.id}
                        service={service}>
                    </MentalService>)
                }
            </Row>
        </div>
    );
};

export default MentalServices;