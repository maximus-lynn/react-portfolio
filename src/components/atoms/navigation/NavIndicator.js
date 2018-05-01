import React, { Component } from 'react';
import './NavIndicator.css';

export default class NavIndicator extends Component {

  render() {

    const { position } = this.props;

    const style = {
    	transform: `translate(${position}px)`
    }

    return (
      <span 
      	className="nav__indicator" 
      	style={style} />
    );
  }
}
