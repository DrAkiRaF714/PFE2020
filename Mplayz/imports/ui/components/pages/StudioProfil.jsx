import React from 'react';
import Layout from '../layout/_layout';
import '../../../../public/src/css/pages/studioProfil.css';

const StudioProfil = () => {
    return (
        <Layout>
            <img src="../../src/images/catProfil.jpg" aria-label="Image de profil"></img>
            <div className="posted-videos">
                <div className="principal-img-upload">
                    <img src="../../src/images/catProfil.jpg" aria-label=""></img>
                </div>
                <div className="container-uploads">
                    <h2>Nom de la vidéo</h2>
                    <div className="uploads">
                        <p>Liens publiés</p>
                        <img src="../../src/images/social/twitch.png" aria-label=""></img>
                        <img src="../../src/images/social/youtube.png" aria-label=""></img>
                        <img src="../../src/images/social/twitter.png" aria-label=""></img>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default StudioProfil;