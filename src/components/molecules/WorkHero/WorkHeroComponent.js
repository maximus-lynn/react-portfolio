import React from 'react';
import './WorkHero.scss';

class WorkHero extends React.Component {
    render() {
        return (
          <section className="hero-work">
              <img className="hero-work__image" src={this.props.heroImage} alt=""/>

              <div className="hero-work__screenshot">
                <img src={this.props.screenshot} alt=""/>
                <img src={this.props.screenshotMobile} alt="" className="hero-work__mobile"/>
              </div>
          </section>
        );
    }
}

export default WorkHero;