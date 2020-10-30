import React from 'react';

import '../../../../public/src/css/layout/footer.css';
import '../../../../public/src/css/utilities/_animations.css'

const Footer = () => {
    return(
        <footer className='box-shadow-windows-up'>
            <div >
                <div className="log"></div>
                <div className="contact-phone">Contact Phone</div>
                <div className="contact-adresse">Contact Adresse</div>
                <div className="contact-comp"></div>
            </div>
        </footer>
    )
}
export default Footer;