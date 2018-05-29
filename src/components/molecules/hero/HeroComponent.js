import React from 'react';

// Comnponents
import Avatar from '../../atoms/avatar/AvatarComponent';
import Scroll from '../../atoms/scroll/ScrollComponent';
import './hero.css';

const Hero = () => {
    return (
        <section>
            <article className="hero">
                <header className="hero__content">
                    <Avatar></Avatar>
                    <p className="hero__title">Web developer</p>
                    <h1 className="hero__heading">MAXWELL ROBERT KENWAY LYNN</h1>
                </header>

                <Scroll></Scroll>
            </article>
        </section>
    );
}

export default Hero;