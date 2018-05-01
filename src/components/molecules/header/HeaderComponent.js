import React from 'react';
import { withRouter } from 'react-router';

// Components
import Hamburger from '../../atoms/hamburger/HamburgerComponent';
import Navigation from '../../atoms/navigation/Nav';
import BackToWork from '../../atoms/BackToWork/BackToWorkComponent';
import Avatar from '../../atoms/avatar/AvatarComponent';

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = { open: false }
    }

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
                <Hamburger 
                    toggle={()=>this.setState({open: !this.state.open})} 
                    open={this.state.open}>
                </Hamburger>
                {avatar}
                {backToWork}
                <Navigation
                    toggle={()=>this.setState({open: !this.state.open})} 
                    open={this.state.open}>
                </Navigation>
            </header>
        );
    }
}

export default withRouter(Header);