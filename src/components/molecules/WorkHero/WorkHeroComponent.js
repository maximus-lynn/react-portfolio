import React from 'react';
import './WorkHero.css';

class WorkHero extends React.Component {
    render() {
        return (
          <section className="hero-work">
            <div className="hero-work__image">
                <img src={this.props.heroImage} alt=""/>
            </div>  

            <div className="hero-work__screenshot">
                <img src={this.props.screenshot} alt=""/>
                <img src={this.props.screenshotMobile} alt="" className="hero-work__mobile"/>
            </div>
          </section>
        );
    }
}

export default WorkHero;