import React from "react";
import '../../../public/src/css/components/account-profil.css';

const AccountPorfil = () => {
    return(
        <div>
            <div className="container-account-profil">
                <img src="" className="img-profil-google" alt=""/>
                <div className="account-google"></div>
                <div className="user-name"></div>
                <div className="container-link-social">
                    <div className="title"></div>
                    <div className="all-link-social">
                        <div className="social">img</div>
                        <div className="social">img</div>
                        <div className="social">img</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountPorfil;