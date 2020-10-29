import React from 'react';
import Contact from '/imports/ui/components/Contact';
import '../../../public/src/css/components/contact-popup.css';

const ContactPopup = () => {

    const closePopup = () => {
        document.querySelector('.container-popup').classList.add('hidden-contact-popup');
    }

    return(
        <div className="container-popup hidden-contact-popup">
            <div className="contact-popup">
                <img onClick={closePopup} className="close-popup" src="../../" />
                <Contact />
            </div>
        </div>
    )
}

export default ContactPopup;