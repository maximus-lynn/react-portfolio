import React, { Component } from 'react';
import './NavLinks.css';

export default class NavLinks extends Component {

  render() {

    const { children } = this.props;

    return (
        <nav className="nav__links"> 
            {children}
        </nav>
    );
  }
}
