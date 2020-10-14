import React from 'react';
import { Link } from 'react-router-dom';
import CompLog from '/imports/ui/components/CompLog';

const Header = () => {
    return (
        <header>
            {/* Menu slidebar */}
            <img className="logo" src="/src/images/LogoPlayzFini.png"  alt="Mplayz" />
            <nav className="menu">
                <ul>
                    <li>Upload</li>
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