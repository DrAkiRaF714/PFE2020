import React from 'react';
import { Link } from 'react-router-dom';
import CompLog from '/imports/ui/components/CompLog';

const Header = () => {

    const hiddenMenu = () => {
        document.querySelector('.nav-items').classList.toggle('hidden');
    }

    return (
        <header>
            {/* Menu slidebar */}
            <img onClick={hiddenMenu} className="logo" src="/src/images/LogoPlayzFini.png"  alt="Mplayz" />
            <nav className="menu">
                <ul onClick={hiddenMenu} className="nav-items hidden">
                    <li><Link to="/upload">Upload</Link></li>
                    <li>Info</li>
                    <li><Link to="/accountprofil">Account</Link></li>
                    <li>Contact</li>
                    <li><CompLog/></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;