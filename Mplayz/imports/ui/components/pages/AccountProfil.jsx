import React from "react";
import Layout from '../layout/_layout';
import EditeAccountPopup from '../EditeAccountPopup'; 
import '../../../../public/src/css/pages/account-profil.css';
import '../../../../public/src/css/utilities/_button.css';



const AccountPorfil = () => {

  const selectionIcones = (e) => {
    e.target.classList.toggle('border-icones');
  }

  const pullEditeProfil = () => {
    const viewEditeProfil = document.querySelector('.hidden-edite-account-profil-popup');
    viewEditeProfil.classList.remove('hidden-edite-account-profil-popup');
  }

  return (
    <Layout>
      <div className="container-profil">
        <div className='fiche-profil'>
          <img className='profil-img' src="../../src/images/catProfil.jpg" alt="" id="profil" />
          <div className="container-profil-ligne">
            {/* demandé le mail de l'utilisateur */}
            <div id="your-account-gmail" className="data-client">acebesvalentin.va@gmail.com</div>
          </div>
          <div className="container-profil-ligne">
            {/* voir pour une modification par popup */}
            <div id="username" className="data-client">AkiRa</div>
          </div>
          <div className="container-links-accounts">
            <div className="img-links">
              <img onClick={selectionIcones} src="../../src/images/social/twitch.svg" aria-label=""></img>
              <img onClick={selectionIcones} src="../../src/images/social/youtube.svg" aria-label=""></img>
              <img onClick={selectionIcones} src="../../src/images/social/twitter.svg" aria-label=""></img>
            </div>
          </div>
          <EditeAccountPopup />
          <button onClick={pullEditeProfil} className="submit-profil-modif button-green button-border-tumble" type="submit"><span className="button">Editer</span><img className="edit" src="../../src/images/icons/edit.svg" alt="" /></button>
        </div>
      </div>
    </Layout>
  )
}

export default AccountPorfil;