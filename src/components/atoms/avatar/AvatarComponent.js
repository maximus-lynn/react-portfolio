import React from 'react';
import { NavLink } from 'react-router-dom';

// Component Image
import avatarImg from './imgs/avatar.png';

import './avatar.scss';

class Avatar extends React.Component {
    render() {
        let avatarHtml = <img className="avatar" src={avatarImg} alt="Maxwell Lynn"/>;

        if (this.props.header) {
            avatarHtml = (
                <NavLink to="/"
                         className="avatar--header">
                    <img className="avatar" src={avatarImg} alt="Maxwell Lynn"/>
                </NavLink>
            )
        }


        return (
            <React.Fragment>
                {avatarHtml}
            </React.Fragment>
        );
    }
    
}

export default Avatar;