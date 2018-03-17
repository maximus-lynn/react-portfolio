import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

class Navigation extends React.Component {
    toggleMenu() {
        document.querySelector('.hamburger').classList.toggle('open');
        document.querySelector('.navigation').classList.toggle('open');
    }

    render() {
        return (
            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <NavLink className="navigation__link"
                                 onClick={this.toggleMenu}
                                 to="/"
                                 exact>
                            HOME
                        </NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink className="navigation__link"
                              onClick={this.toggleMenu}
                              to="/work">
                            WORK
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;