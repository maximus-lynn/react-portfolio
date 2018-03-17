import React from 'react';

const PortfolioItem = () => {
    return (
        <section className="clients">
            <article>
                <img src="http://via.placeholder.com/600x500" alt=""/>
                <header>
                    <h3 className="clients__heading">client one</h3>
                    <p>Description</p>
                </header>
            </article>
        </section>
    );
}

export default PortfolioItem;