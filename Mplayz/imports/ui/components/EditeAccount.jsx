import { Meteor } from 'meteor/meteor';
import React, { useState, useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import '../../../public/src/css/components/edite-account-profil.css';
import '../../../public/src/css/utilities/_icons.css';


const EditeAccount = ({ user }) => {



    const [userName, setuserName] = useState('');

    useEffect(() => {
        if (user.username !== undefined) {
            setuserName(user.username);
            console.log(userName);
        }
    }, [user]);


    const handleChange = useCallback((event) => {
        switch (event.target.name) {
            case 'userName':
                setuserName(event.target.value);
                break;
            // no default
        }
    }, [userName]);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();

        Meteor.call('user.updateUsername', userName, (error) => {
            if (error) {
                toast.error(error.reason);
            } else {
                toast.success('Changement de nom avec succés');
                closePopup();

            }
        });

    }, [userName]);

    const closePopup = () => {
        document.querySelector('.container-popup-edite-account-profil').classList.add('hidden-edite-account-profil-popup');
    }



    return (
        <div className=" container-popup container-popup-edite-account-profil hidden-edite-account-profil-popup">
            <div className="edite-account-popup box-shadow-windows native-radius">
                <img onClick={closePopup} className="close-popup box-shadow-windows" src="../../src/images/icons/close.jpg" />
                <h1 className="settings-profil">Parametre de compte</h1>
                <form id="param-compte" onSubmit={handleSubmit}>
                    <label htmlFor="name">Nom</label>
                    <input type="text" name="userName" value={userName}
                        onChange={handleChange} id="settings-name" />
                    <div className="container-settings-links">
                        <h2>Gérer vos services et comptes connectés</h2>
                        <div className="line-settings-links">
                            <img className="icons-social-scale"  src="../../src/images/icons/Twitch-violet.svg" alt="twitch" />
                            <div className="settings-links-account">
                                <span className="text-links-accounts">Se connecter</span>
                                <img className="icons-links" src="../../src/images/icons/link.svg" alt="icons-links" />
                            </div>
                        </div>
                        <div className="line-settings-links">
                            <img className="icons-social-scale"  src="../../src/images/icons/youtube.svg" alt="youtube" />
                            <div className="settings-links-account">
                                <span className="text-links-accounts">Se connecter</span>
                                <img className="icons-links" src="../../src/images/icons/link.svg" alt="icons-links" />
                            </div>
                        </div>
                        <div className="line-settings-links">
                            <img className="icons-social-scale"  src="../../src/images/icons/twitter.svg" alt="twitter" />
                            <div className="settings-links-account">
                                <span className="text-links-accounts">Se connecter</span>
                                <img className="icons-links" src="../../src/images/icons/link.svg" alt="icons-links" />
                            </div>
                        </div>
                    </div>
                    <div className="container-button-edit-popup">
                        <button className="submit-profil-modif button-green button-border-tumble" type="submit">
                            <span className="button">Editer</span>
                            <img className="edit" src="../../src/images/icons/edit.svg" alt="" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditeAccount;