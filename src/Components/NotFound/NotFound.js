import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center py-5 not-found">
            {/* not found page  */}
            <img style={{ height: "150px" }} src="https://jatheon.com/wp-content/uploads/2018/03/404-image.png" alt="" />
            <p className="py-5 fs-3 text-danger">Page not found</p>
            <br />
            <div className="pb-5">
                <NavLink to="/home" className="text-decoration-none text-dark fs-4">Go to <button className="bg-dark text-white rounded">Home</button></NavLink>
            </div>
        </div>
    );
};

export default NotFound;