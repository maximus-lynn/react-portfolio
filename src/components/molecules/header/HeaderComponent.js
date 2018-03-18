import React from 'react';
import { withRouter } from 'react-router';

// Components
import Hamburger from '../../atoms/hamburger/HamburgerComponent';
import Navigation from '../../atoms/navigation/NavigationComponent';
import BackToWork from '../../atoms/BackToWork/BackToWorkComponent';
import Avatar from '../../atoms/avatar/AvatarComponent';

class Header extends React.Component {
    render() {
        const location = this.props.location.pathname;
        let backToWork;
        let avatar;
        
        if (location !== '/' && location !== '/work' ) { 
            backToWork = <BackToWork></BackToWork>
        }

        if (location !== '/') {
            avatar = <Avatar header></Avatar>
        }

        return (
            <header>
                <Hamburger></Hamburger>
                {avatar}
                {backToWork}
                <Navigation></Navigation>
            </header>
        );
    }
}

export default withRouter(Header);