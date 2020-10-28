import React from 'react';
import { Link } from 'react-router-dom';
import CompLog from '/imports/ui/components/CompLog';

const Header = () => {

    const hiddenMenu = () => {
    //    document.querySelector('.nav-items').classList.toggle('hidden');

        let hiddenStairs = document.querySelectorAll('.hidden-stairs');

        Array.from(hiddenStairs).forEach(element => {

            element.classList.toggle('hidden');


        });
       
       

    }

    return (
        <header>
            {/* Menu slidebar */}
            <div className="container-banner">
            <img onClick={hiddenMenu} className="logo" src="/src/images/LogoPlayzFini.png"  alt="Mplayz" />  
            <span className="upload"><Link to="/upload">Upload</Link></span>
            </div>
            <nav className="menu">
                <ul onClick={hiddenMenu} >
                    <li className="hidden-stairs hidden">Info</li>
                    <li className="hidden-stairs hidden"><Link to="/accountprofil">Account</Link></li>
                    <li className="hidden-stairs hidden">Contact</li>
                    <li className="hidden-stairs hidden"><CompLog/></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;