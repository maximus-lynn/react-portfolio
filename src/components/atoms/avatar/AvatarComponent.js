import React from 'react';

// Component Image
import avatar from './images/avatar.png';

import './avatar.scss';

const Avatar = () => {
    return (
        <img className="avatar" src={avatar} alt="Maxwell Lynn"/>
    );
}

export default Avatar;