import React from 'react';
import { NavLink } from 'react-router-dom';

import './BackToWork.css';

class BackToWork extends React.Component{
    render() {
        return (
            <NavLink className="back-to-work"
                    to="/work">
                <i className="back-to-work__icon icon-back-arrow"></i>
                <h6 className="back-to-work__heading">WORK</h6>
            </NavLink>
        );
    }
}

export default BackToWork;