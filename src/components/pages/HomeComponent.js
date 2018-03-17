import React from 'react';
import Hero from '../molecules/hero/HeroComponent';
import Intro from '../molecules/intro/IntroComponent';
import Skills from '../molecules/skills/SkillsComponent';
import Hobbies from '../molecules/Hobbies/HobbiesComponent';
import WorkItem from '../molecules/WorkItem/WorkItemComponent';

const Home = () => {
    return (
        <React.Fragment>
            <Hero></Hero>

            <Intro title="About me">
                Hi there, Welcome to my portfolio. <br/>
                I am a Bath based web developer with 8 years experience in the industry, spread across digital agencies to SAAS companies. Below are the skills that I have learnt in my time:
            </Intro>

            <Skills></Skills>

            <Hobbies></Hobbies>

            <WorkItem></WorkItem>
        </React.Fragment>
    );
}

export default Home;