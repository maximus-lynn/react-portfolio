import React from 'react';
import './Portfolio-item.scss';

const PortfolioItem = () => {
    return (
        <section className="portfolio">
            <article className="portfolio__item">
                <img src="http://via.placeholder.com/400x535" className="portfolio__image" alt=""/>
                <header className="portfolio__content">
                    <div className="portfolio__heading">
                        <h1 class="portfolio__title">YOUNG TALENT</h1>
                        <p className="portfolio__subtitle">YT INDUSTRIES</p>
                    </div>
                </header>
            </article>
            <article className="portfolio__item">
                <img src="http://via.placeholder.com/400x535" className="portfolio__image" alt=""/>
                <header className="portfolio__content">
                    <div className="portfolio__heading">
                        <h1 class="portfolio__title">client one</h1>
                        <p className="portfolio__subtitle">Description</p>
                    </div>
                </header>
            </article>
            <article className="portfolio__item">
                <img src="http://via.placeholder.com/400x535" className="portfolio__image" alt=""/>
                <header className="portfolio__content">
                    <div className="portfolio__heading">
                        <h1 class="portfolio__title">client one</h1>
                        <p className="portfolio__subtitle">Description</p>
                    </div>
                </header>
            </article>                        
        </section>
    );
}

export default PortfolioItem;