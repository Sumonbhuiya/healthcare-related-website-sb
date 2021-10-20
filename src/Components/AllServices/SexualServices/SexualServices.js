import React from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../../Hooks/useData';
import SexcualService from '../SexcualService/SexcualService';

const SexualServices = () => {
    // load data from hooks
    const [services] = useData();

    const service = services.filter(service => (service.category === 'Sexual'));

    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-3 handel-large py-5">
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