import React from 'react';
import CompLog from '/imports/ui/components/CompLog';
import '../../../../public/src/css/layout/header.css';

const Header = () => {
    return (
        <header>
    
            <img className="logo" src="/src/images/LogoPlayzFini.png"  alt="Mplayz" />
  
            <ul>
                <li>Upload</li>
                <li>Info</li>
                <li>Contact</li>               
            </ul>
            <CompLog/>
        </header>
    )
}

export default Header;