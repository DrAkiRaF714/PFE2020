import React from "react";
import Layout from '../layout/_layout';
import '../../../../public/src/css/pages/account-profil.css';

const AccountPorfil = () => {

    selectionIcones = (e) => {
        e.target.classList.toggle('border-icones');
    }

    return(
        <Layout>
            <div className="container-profil">
              <div id="profil">
                  <img src="" alt="" id="profil"/>
                  
                  <div className="container-profil-ligne">
                      {/* demandé le mail de l'utilisateur */}
                    <div id="account-gmail">Account mail Google</div>
                    <div id="your-account-gmail">**************</div>
                  </div>
                <div className="container-profil-ligne">
                    <div className="username">Your user name</div>
                    {/* voir pour une modification par popup */}
                    <input type="text" name="usenameProfil" id="username-profil"/>
                  </div>
                  <div className="container-links-accounts">
                      <h3 className="links-selected">Selected links accounts</h3>
                      <div className="img-links">
                        <img onClick={selectionIcones} src="../../src/images/social/twitch.png" aria-label=""></img>
                        <img onClick={selectionIcones} src="../../src/images/social/youtube.png" aria-label=""></img>
                        <img onClick={selectionIcones} src="../../src/images/social/twitter.png" aria-label=""></img>
                      </div>
                  </div>
              </div> 
            </div>

        </Layout>
    )
}

export default AccountPorfil;