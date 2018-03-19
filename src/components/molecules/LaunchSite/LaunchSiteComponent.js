import React from 'react';
import './LaunchSite.scss';

class LaunchSite extends React.Component {
    render() {
        return (
            <section className="launch">
                <article className="launch__container">
                    <img src={this.props.devices} alt="" className="launch__devices"/>

                    <a className="launch__button"
                       target="_blank"
                       rel="noopener noreferrer"
                       href={this.props.link}>
                        LAUNCH SITE
        
                        <i className="icon icon-arrow-top-left"></i>
                        <i className="icon icon-arrow-top-right"></i>
                        <i className="icon icon-arrow-bottom-left"></i>
                        <i className="icon icon-arrow-bottom-right"></i>                   
                    </a>
                </article>
            </section>
        );
    }
}

export default LaunchSite;