import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useData from '../../Hooks/useData';
import SomeService from '../SomeService/SomeService';
import './SomeService.css'

const SomeServices = () => {
    // load data from json for home page 
    const [services] = useData();

    // find specific data from json 
    const service = services.filter(service => (service.id === 1) || (service.id === 4) || (service.id === 7) || (service.id === 10));

    return (
        <div className="mt-3 rounded">
            <div className="p-3 bg-light w-75 mx-auto">
                <h1 className="text-dark">Our Distinguished <span className="text-primary">Specialists</span> <br /></h1>
                <p>A smile is  a curve that sets everything straight!</p>
            </div>
            <Row xs={1} md={1} lg={2} className="g-5 handel-large pt-4 pb-5">
                {
                    service.map(service => <SomeService
                        key={service.id}
                        service={service}>
                    </SomeService>)
                }
            </Row>
            {/* all services button  */}
            <Button className="bg-danger rounded-pill me-5 px-5 py-2"><Link className="text-white text-decoration-none" to="/services">See All Services</Link></Button>
        </div>
    );
};

export default SomeServices;