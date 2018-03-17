import React from 'react';


// Components
import Hamburger from '../../atoms/hamburger/HamburgerComponent';
import Navigation from '../../atoms/navigation/NavigationComponent';

const Header = () => {
    return (
        <header>
            <Hamburger></Hamburger>
            <Navigation></Navigation>
        </header>
    );
}

export default Header;