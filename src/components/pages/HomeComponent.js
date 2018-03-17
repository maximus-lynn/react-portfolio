import React from 'react';
import Hero from '../molecules/hero/HeroComponent';
import Intro from '../molecules/intro/IntroComponent';
import Skills from '../molecules/skills/SkillsComponent';
import Hobbies from '../molecules/Hobbies/HobbiesComponent';
import PortfolioItem from '../molecules/portfolio-item/PortfolioItemComponent';

const Home = () => {
    return (
        <React.Fragment>
            <Hero></Hero>

            <Intro></Intro>

            <Skills></Skills>

            <Hobbies></Hobbies>

            {/* <PortfolioItem></PortfolioItem> */}
        </React.Fragment>
    );
}

export default Home;