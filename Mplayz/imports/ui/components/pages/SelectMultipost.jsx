import React from 'react';
import Layout from '../layout/_layout';
import '../../../../public/src/css/pages/selectMultipost.css';

const SelectMultipost = () => {

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