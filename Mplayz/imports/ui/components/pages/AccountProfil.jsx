import React from "react";
import Layout from '../layout/_layout';
import '../../../../public/src/css/pages/account-profil.css';
import '../../../../public/src/css/utilities/_button.css';


const AccountPorfil = () => {

    selectionIcones = (e) => {
        e.target.classList.toggle('border-icones');
    }

    return(
        <Layout>
            <div className="container-profil">
              <div className='fiche-profil'>
                  <img className='profil-img' src="../../src/images/catProfil.jpg" alt="" id="profil"/>
                  <div className="container-profil-ligne">
                      {/* demandé le mail de l'utilisateur */}
                    <div id="account-gmail">Account mail Google</div>
                    <div id="your-account-gmail">acebesvalentin.va@gmail.com</div>
                  </div>
                <div className="container-profil-ligne">
                    <div className="username">Your user name</div>
                    {/* voir pour une modification par popup */}
                    <input type="text" name="usenameProfil" id="username-profil"/>
                  </div>
                  <div className="container-links-accounts">
                      <h3 className="links-selected">Selected links accounts</h3>
                      <div className="img-links">
                        <img onClick={selectionIcones} src="../../src/images/social/twitch.svg" aria-label=""></img>
                        <img onClick={selectionIcones} src="../../src/images/social/youtube.svg" aria-label=""></img>
                        <img onClick={selectionIcones} src="../../src/images/social/twitter.svg" aria-label=""></img>
                      </div>
                  </div>
                    <button className="submit-profil-modif button-green button-border-tumble" type="submit"><span className="button">Editer</span><img className="edit" src="../../src/images/icons/edit.svg" alt=""/></button>
                </div>
            </div>
        </Layout>
    )
}

export default AccountPorfil;