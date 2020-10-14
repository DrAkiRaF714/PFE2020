import React from 'react';
import CompLog from '/imports/ui/components/CompLog';

import '../../../../public/src/css/layout/header.css';
import '../../../../public/src/css/utilities/_fonts.css';

const Header = () => {
    return (
        <header>
            {/* Menu slidebar */}
            <img className="logo" src="/src/images/LogoPlayzFini.png"  alt="Mplayz" />
            <nav className="menu">
                <ul>
                    <li>Upload</li>
                    <li>Info</li>
                    <li>Contact</li>
                    <li><CompLog/></li>        
                </ul>
            </nav>
        </header>
    )
}

export default Header;