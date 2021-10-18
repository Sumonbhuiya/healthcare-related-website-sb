import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';

const Services = () => {
    return (
        <div>
            <div className="p-3 bg-secondary">
                <h1 className="text-dark">MEET <span className="text-primary">OTHER DOCTORS</span> <br /></h1>
                <p className="text-white">Discover better health & wellness by using our doctor ratings & reviews to make your choice.</p>
            </div>
            <Navbar></Navbar>
        </div>
    );
};

export default Services;