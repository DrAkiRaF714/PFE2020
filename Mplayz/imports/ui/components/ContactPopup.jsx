import React from 'react';
import Contact from '/imports/ui/components/Contact';

const ContactPopup = () => {
    return(
        <div className="container-popup hidden-contact-popup">
            <div className="contact-popup">
                <Contact />
            </div>
        </div>
    )
}

export default ContactPopup;