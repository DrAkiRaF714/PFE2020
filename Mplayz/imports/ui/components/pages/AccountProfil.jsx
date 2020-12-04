import React, { useEffect, useState } from "react";
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { toast } from 'react-toastify';
import Layout from '../layout/_layout';
import EditeAccount from '../EditeAccount';
import '../../../../public/src/css/pages/account-profil.css';
import '../../../../public/src/css/utilities/_button.css';



const AccountPorfil = ({history}) => {

  const [user, setuser] = useState({
    "services": {
      "google": {
        "email":"",
        "picture":"",
      }
    },

  });

  const userId =  useTracker(() => Meteor.userId(), []);
  useEffect(() => {
      if (!userId) history.push('/')
      toast.error('Vous n\'êtes pas connecté');
  }, [userId]);
 

  const [ready, userPublication] = useTracker(() => {
    const publication = Meteor.subscribe("user");
    console.log(publication);
    return [
      publication.ready(),
      Meteor.users.findOne()
    ]
  }, []);

  useEffect(() => {
    if (ready) {
      setuser(userPublication);
      console.log(userPublication);
    }
  }, [ready, userPublication]);


  const selectionIcones = (e) => {
    e.target.classList.toggle('border-icones');
  }

  const OpenEditeProfil = () => {
    const viewEditeProfil = document.querySelector('.hidden-edite-account-profil-popup');
    viewEditeProfil.classList.remove('hidden-edite-account-profil-popup');
  }


  return (
    <Layout>
      <div className="container-profil">
        <div className='fiche-profil'>
          <img className='profil-img' src={user.services.google.picture} alt="" id="profil" />
          <div className="container-profil-ligne">
            {/* demandé le mail de l'utilisateur */}
            <div id="your-account-gmail" className="data-client">{user.services.google.email}</div>
          </div>
          <div className="container-profil-ligne">
            {/* voir pour une modification par popup */}
            <div id="username" className="data-client">{user.username}</div>
          </div>
          <div className="container-links-accounts">
            <div className="img-links">
              <img onClick={selectionIcones} src="../../src/images/icons/Twitch-violet.svg" aria-label=""></img>
              <img onClick={selectionIcones} src="../../src/images/social/youtube.svg" aria-label=""></img>
              <img onClick={selectionIcones} src="../../src/images/social/twitter.svg" aria-label=""></img>
            </div>
          </div>
          <EditeAccount user={user} />
          <button onClick={OpenEditeProfil} className="submit-profil-modif button-green button-border-tumble" type="submit"><span className="button">Editer</span><img className="edit" src="../../src/images/icons/edit.svg" alt="" /></button>
        </div>
      </div>
    </Layout>
  )
}

export default AccountPorfil;