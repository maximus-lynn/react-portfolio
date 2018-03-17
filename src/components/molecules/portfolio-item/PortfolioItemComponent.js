import React from 'react';
import './Portfolio-item.scss';

import yt from './imgs/yt.jpg';
import macgregor from './imgs/macgreg.jpg';
import controltech from './imgs/controltech.jpg';

const PortfolioItem = () => {
    return (
        <section className="portfolio">
            <article className="portfolio__item">
                <img src={yt} className="portfolio__image" alt=""/>
                <header className="portfolio__content">
                    <div className="portfolio__heading">
                        <h1 className="portfolio__title">YOUNG TALENT</h1>
                        <h6 className="portfolio__subtitle">YT INDUSTRIES</h6>
                    </div>
                </header>
            </article>
            <article className="portfolio__item">
                <img src={macgregor} className="portfolio__image" alt=""/>
                <header className="portfolio__content">
                    <div className="portfolio__heading">
                        <h1 className="portfolio__title">MACGREGOR <br /> SMITH</h1>
                        <h6 className="portfolio__subtitle">LANDSCAPE ARCHITECTURE</h6>
                    </div>
                </header>
            </article>
            <article className="portfolio__item">
                <img src={controltech} className="portfolio__image" alt=""/>
                <header className="portfolio__content">
                    <div className="portfolio__heading">
                        <h1 className="portfolio__title">CONTROLTECH</h1>
                        <h6 className="portfolio__subtitle">BIKE RETAILER</h6>
                    </div>
                </header>
            </article>                        
        </section>
    );
}

export default PortfolioItem;