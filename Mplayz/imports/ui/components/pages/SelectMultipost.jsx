import React, { useEffect } from "react";
import Layout from '../layout/_layout';
import { useTracker } from 'meteor/react-meteor-data';
import { toast } from 'react-toastify';
import '../../../../public/src/css/pages/selectMultipost.css';

const SelectMultipost = ({history}) => {

    const userId =  useTracker(() => Meteor.userId(), []);
    useEffect(() => {
        if (!userId) history.push('/')
        toast.error('Vous n\'êtes pas connecté');
    }, [userId]);

    selectionIcones = (e) => {
        e.target.classList.toggle('border-icones');
    }

  
    return (
        <Layout>
            <h1>Choisissez vos plateformes d'upload</h1>
            <div className="platforms">
                <img onClick={selectionIcones} src="../../src/images/social/twitch.png" aria-label=""></img>
                <img onClick={selectionIcones} src="../../src/images/social/youtube.png" aria-label=""></img>
                <img onClick={selectionIcones} src="../../src/images/social/twitter.png" aria-label=""></img>
            </div>
        </Layout>
    )
}

export default SelectMultipost;