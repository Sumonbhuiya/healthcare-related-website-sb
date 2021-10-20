import React from 'react';
import ContactHeader from '../../Components/ContactHeader/ContactHeader';
import ContactInfo from '../../Components/ContactInfo/ContactInfo';

const Contact = () => {
    return (
        <div>
            {/* contact head  */}
            <div className="p-3 bg-secondary">
                <h1 className="text-dark">WELCOME TO <span className="text-primary">FAMILY CHECK</span> <br /></h1>
            </div>
            {/* call components  */}
            <ContactHeader></ContactHeader>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Contact;