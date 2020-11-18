import React from 'react';
import EditeAccount from '../components/EditeAccount';
import '../../../public/src/css/components/edite-account-profil-popup.css';

const EditeAccountPopup = () => {

    const closePopup = () => {
        document.querySelector('.container-popup-edite-account-profil').classList.add('hidden-edite-account-profil-popup');
    }

    return(
        <div className=" container-popup container-popup-edite-account-profil hidden-edite-account-profil-popup">
            <div className="edite-account-popup box-shadow-windows native-radius">
                <img onClick={closePopup} className="close-popup box-shadow-windows" src="../../src/images/icons/close.jpg" />
                <EditeAccount />
            </div>
        </div>
    )
}

export default EditeAccountPopup;