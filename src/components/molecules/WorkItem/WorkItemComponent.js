import React from 'react';
import { NavLink } from 'react-router-dom';

import './WorkItem.scss';

import yt from './imgs/yt.jpg';
import playsports from './imgs/playsport.jpg';
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
                <NavLink to="work/play-sports-network"
                         className="work__link">
                    <img src={playsports} className="work__image" alt=""/>
                    <header className="work__content">
                        <div className="work__header">
                            <h1 className="work__title">PLAYSPORTS <br/> NETWORK</h1>
                            <h6 className="work__subtitle">CYCLING SPORTS MEDIA</h6>
                        </div>
                    </header>
                </NavLink>
            </article>
            <article className="work__item">
                <NavLink to="work/power2max"
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