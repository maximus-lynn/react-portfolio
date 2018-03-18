import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.navItem = document.querySelector('.navigation__item');
    }

    moveBall(event) {
        const item = document.querySelectorAll('.navigation__item');
        const length = item.length;
        const itemCenter = (100 / length) / 2;

        const element = event.target ? event.target : event;

        const index = Array.prototype.indexOf.call(item, element.parentElement) + 1;
        let ballPosition = (100 / length) / 2 * index + itemCenter;

        if (index === 1) {
            ballPosition = itemCenter;
        }

        document.querySelector('.navigation__ball').style.left = ballPosition + '%';
    }

    toggleMenu() {
        document.querySelector('.hamburger').classList.toggle('open');
        document.querySelector('.navigation').classList.toggle('open');
    }

    render() {
        // this.moveBall(this.props.navItem);

        return (
            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <NavLink className="navigation__link"
                                 onMouseOver={(event) => { this.moveBall(event) }}
                                 onClick={this.toggleMenu}
                                 to="/"
                                 exact>
                            HOME
                       </NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink className="navigation__link"
                                 onMouseOver={(event) => { this.moveBall(event) }}
                                 onClick={this.toggleMenu}
                                 to="/work">
                            WORK
                        </NavLink>
                    </li>
                    <li className="navigation__ball-container">
                        <span className="navigation__ball"></span>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;