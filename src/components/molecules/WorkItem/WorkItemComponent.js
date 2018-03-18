import React from 'react';
import { NavLink } from 'react-router-dom';

import './WorkItem.scss';

import yt from './imgs/yt.jpg';
import macgregor from './imgs/macgreg.jpg';
import controltech from './imgs/controltech.jpg';

const WorkItem = () => {
    return (
        <section className="work">
            <article className="work__item">
                <NavLink to="work/young-talent"
                         className="work__link">
                    <img src={yt} className="work__image" alt=""/>
                    <header className="work__content">
                        <div className="work__header">
                            <h1 className="work__title">YOUNG TALENT</h1>
                            <h6 className="work__subtitle">YT INDUSTRIES</h6>
                        </div>
                    </header>
                </NavLink>
            </article>
            <article className="work__item">
                <NavLink to="work/macgregor-smith"
                         className="work__link">
                    <img src={macgregor} className="work__image" alt=""/>
                    <header className="work__content">
                        <div className="work__header">
                            <h1 className="work__title">MACGREGOR <br /> SMITH</h1>
                            <h6 className="work__subtitle">LANDSCAPE ARCHITECTURE</h6>
                        </div>
                    </header>
                </NavLink>
            </article>
            <article className="work__item">
                <NavLink to="work/control-tech"
                         className="work__link">
                    <img src={controltech} className="work__image" alt=""/>
                    <header className="work__content">
                        <div className="work__header">
                            <h1 className="work__title">CONTROLTECH</h1>
                            <h6 className="work__subtitle">BIKE RETAILER</h6>
                        </div>
                    </header>
                </NavLink>
            </article>                        
        </section>
    );
}

export default WorkItem;