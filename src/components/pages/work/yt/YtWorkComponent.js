// NOTE: When I introduce ButterCMS 
// These static files will be replaced
// by one template. 
import React from 'react';

import Intro from '../../../molecules/Intro/IntroComponent';
import WorkHero from '../../../molecules/WorkHero/WorkHeroComponent';
import TechStack from '../../../molecules/TechStack/TechStackComponent';

import hero from './imgs/hero.jpg';
import screenshot from './imgs/yt-macbook.png';

// Tech Stack 
import html from './imgs/html.jpg'; 
import css from './imgs/css.jpg'; 
import wordpress from './imgs/wordpress.jpg'; 
import js from './imgs/js.jpg'; 


class YtWork extends React.Component {
    constructor(props) {
        super(props);
        this.stacks = [html, css, wordpress, js]
    }

    render() {
        return (
            <React.Fragment>
                <WorkHero heroImage={hero} 
                        screenshot={screenshot}>
                </WorkHero>

                <Intro title="Young Talent">
                    Hi there, Welcome to my portfolio. 
                    I am a Bath based web developer with 8 years experience in the industry, spread across digital agencies to SAAS companies. Below are the skills that I have learnt in my time:
                </Intro>

                <TechStack techstack={this.stacks}></TechStack>

                <Intro title="Typography">
                    Hi there, Welcome to my portfolio. 
                    I am a Bath based web developer with 8 years experience in the industry, spread across digital agencies to SAAS companies. Below are the skills that I have learnt in my time:
                </Intro>            
            </React.Fragment>
        );
    }
}

export default YtWork;