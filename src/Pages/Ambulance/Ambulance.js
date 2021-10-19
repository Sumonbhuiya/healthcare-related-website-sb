import React from 'react';
import AmbulanceServices from '../../Components/AmbulanceService/AmbulanceServices/AmbulanceServices';

const Ambulance = () => {
    return (
        <div>
            <div className="p-3 bg-secondary">
                <h1 className="text-dark">OUR QUICK TRANSPORT <span className="text-primary">SYSTEM</span> FOR YOU <br /></h1>
                <p className="text-white fst-italic fs-5">See details, that may help you to make your choice!</p>
            </div>
            <AmbulanceServices></AmbulanceServices>
        </div>
    );
};

export default Ambulance;