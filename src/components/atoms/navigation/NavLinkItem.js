import React from 'react';
import { withRouter } from 'react-router'
import './NavLinkItem.css';

class NavLinkItem extends React.Component {

  componentDidMount() {
    // If the item being created is active it'll set the 
    // position of the ball to it.
    if (this.isActive) {
      this.setIndicatorPosition();
    }
  }

  // True if component is the active element.
  get isActive() {
    return this.props.active;
  }

  setIndicatorPosition = () => {
    const position = this._button.offsetLeft + (this._button.offsetWidth / 2);
    this.props.onSetindicatorPosition(position);
  }

  handleMouseEnter = e => {
    this._positionBeforeHover = this.props.indicatorPosition;
    this.setIndicatorPosition();
  }

  handleMouseLeave = e => {
    this.props.onSetindicatorPosition(this._positionBeforeHover);
  }

  changeRoute = () => {
    this.props.history.push(this.props.to)
    this.props.toggle()
  }
  
  render() { 
    const { children } = this.props;

    return (
      <button 
        className="nav__button"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.changeRoute}
        ref={c => this._button = c}>
        {children}
      </button>
    );
  }
}

export default withRouter(NavLinkItem);


