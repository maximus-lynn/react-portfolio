import React from 'react';
import { withRouter } from 'react-router';

import './Footer.css';


class Footer extends React.Component {
    scrollToTop() {
        window.scroll({top: 0, left: 0, behavior: 'smooth' });
    }

    render() {
        const location = this.props.location.pathname;
        let mailMe;
        
        if (location === '/') {
            mailMe = (
                <div className="footer__container">
                    <h4 className="footer__heading">
                        NEED A HAND? <br/>
                        WELL I HAVE TWO.                         
                    </h4>
                    <a href="mailto:max.r.k.lynn@gmail.com" 
                       className="footer__button">
                       MAIL ME
    
                       <i className="icon icon-arrow-top-left"></i>
                       <i className="icon icon-arrow-top-right"></i>
                       <i className="icon icon-arrow-bottom-left"></i>
                       <i className="icon icon-arrow-bottom-right"></i>
                    </a>
                </div>
            )
        }

        return (
            <footer className="footer">
                { mailMe }
                <div className="footer__up"
                     onClick={this.scrollToTop}>
                    <i className="icon-arrow-up"></i>
                </div>     
            </footer>
        );
    }
}

export default withRouter(Footer);