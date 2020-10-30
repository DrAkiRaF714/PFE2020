import React from 'react';
import Contact from '/imports/ui/components/Contact';
import '../../../public/src/css/components/contact-popup.css';

const ContactPopup = () => {

    const closePopup = () => {
        document.querySelector('.container-popup').classList.add('hidden-contact-popup');
    }

    return(
        <div className="container-popup hidden-contact-popup">
            <div className="contact-popup box-shadow-windows native-radius">
                <img onClick={closePopup} className="close-popup box-shadow-windows" src="../../src/images/icons/close.jpg" />
                <Contact />
            </div>
        </div>
    )
}

export default ContactPopup;