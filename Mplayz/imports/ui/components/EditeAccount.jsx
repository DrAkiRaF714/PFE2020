import { Meteor } from 'meteor/meteor';
import React, { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import '../../../public/src/css/components/edite-account-profil.css';


const EditeAccount = () => {

    const [userName, setuserName] = useState('');

    const handleChange = useCallback((event) => {
        switch (event.target.name) {
            case 'userName':
                setuserName(event.target.value);
                break;
            // no default
        }
    }, []);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();

        Meteor.call('jokes.create', { userName }, (error) => {
            if (error) {
                toast.error(error.reason);
            } else {
                toast.success('Changement de nom avec succés');
                setuserName('');
            }
        });
    }, [userName]);

    return (
        <>
            <h1 className="settings-profil">Parametre de compte</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nom</label>
                <input type="text" name="userName" value={userName}
                    onChange={handleChange} id="settings-name" />
                <div className="container-settings-links">
                    <div className="line-settings-links">
                        <img src="" alt="twitch" />
                        <div className="settings-links-account">
                            <span className="text-links-accounts"></span>
                            <img className="icons-links" src="" alt="icons-links" />
                        </div>
                    </div>
                    <div className="line-settings-links">
                        <img src="" alt="youtube" />
                        <div className="settings-links-account">
                            <span className="text-links-accounts"></span>
                            <img className="icons-links" src="" alt="icons-links" />
                        </div>
                    </div>
                    <div className="line-settings-links">
                        <img src="" alt="twitter" />
                        <div className="settings-links-account">
                            <span className="text-links-accounts"></span>
                            <img className="icons-links" src="" alt="icons-links" />
                        </div>
                    </div>
                </div>
                <button className="submit-profil-modif button-green button-border-tumble" type="submit">
                    <span className="button">Editer</span>
                    <img className="edit" src="../../src/images/icons/edit.svg" alt="" />
                </button>
            </form>
        </>
    )
}

export default EditeAccount;