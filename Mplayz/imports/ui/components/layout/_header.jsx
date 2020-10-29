import React from 'react';
import { Link } from 'react-router-dom';
import CompLog from '/imports/ui/components/CompLog';

const Header = () => {

    const hiddenMenu = () => {
        const hiddenStairs = document.querySelectorAll('.hidden-stairs');
        Array.from(hiddenStairs).forEach(element => {
            element.classList.toggle('hidden');    
        });
    }

    const pullContact = () => {
        const viewContact = document.querySelector('.hidden-contact-popup');        
        viewContact.classList.remove('hidden-contact-popup');
    }

    return (
        <header>
            {/* Menu slidebar */}
            <div className="container-banner">
                <img onClick={hiddenMenu} className="logo" src="/src/images/LogoPlayzFini.png"  alt="Mplayz" />  
                <span className="upload"><Link to="/upload">UPLOAD</Link></span>
            </div>
            <nav className="menu">
                <ul >
                    <li className="hidden-stairs hidden"><Link to="/">HOME</Link></li>
                    <li className="hidden-stairs hidden"><Link to="/accountprofil">ACCOUNT</Link></li>
                    <li className="hidden-stairs hidden">INFO</li>
                    <li onClick={pullContact} className="hidden-stairs hidden">CONTACT</li>
                    <li className="hidden-stairs hidden"><CompLog/></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;