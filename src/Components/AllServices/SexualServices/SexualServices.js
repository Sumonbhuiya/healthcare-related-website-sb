import React from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../../Hooks/useData';
import SexcualService from '../SexcualService/SexcualService';

const SexualServices = () => {
    const [services] = useData();

    const service = services.filter(service => (service.category === 'Sexual'));

    return (
        <div>
            <Row xs md={1} lg={3} className="g-3 w-75 mx-auto py-4">
                {
                    service.map(service => <SexcualService
                        key={service.id}
                        service={service}>
                    </SexcualService>)
                }
            </Row>
        </div>
    );
};

export default SexualServices;