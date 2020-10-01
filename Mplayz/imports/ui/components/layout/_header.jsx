import React from 'react';
import CompLog from '/imports/ui/components/CompLog';

const Header = () => {
    return (
        <header>
    
            <img className="logo" src="/src/images/LogoPlayzFini.png"  alt="Mplayz" />
  
            <ul>
                <li>Upload</li>
                <li>Info</li>
                <li>Contact</li>
                <li><CompLog/></li>
            </ul>
        </header>
    )
}

export default Header;