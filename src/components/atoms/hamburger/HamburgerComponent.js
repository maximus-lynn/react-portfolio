import React from 'react';

import './hamburger.scss';

class Hamburger extends React.Component{
    toggleMenu() {
        document.querySelector('.hamburger').classList.toggle('open');
        document.querySelector('.navigation').classList.toggle('open');
    }

    render() {
        return (
            <div className="hamburger"
                 onClick={this.toggleMenu}>
                <span className="hamburger__middle"></span>
            </div>
        );
    }
}

export default Hamburger;