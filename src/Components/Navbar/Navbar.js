import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    // services page navbar 
    return (
        <div className="bg-light">
            <nav className="py-4">
                <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "orange"
                }}
                    className="text-decoration-none px-3 mx-auto" to="/primary">Primary</NavLink>
                <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "orange"
                }}
                    className="text-decoration-none px-3 mx-auto" to="/sexual">Sexual</NavLink>
                <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "orange"
                }}
                    className="text-decoration-none px-3 mx-auto" to="/mental">Mental</NavLink>
                <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "orange"
                }}
                    className="text-decoration-none px-3 mx-auto" to="/dental">Dental</NavLink>
            </nav>

        </div>
    );
};

export default Navbar;