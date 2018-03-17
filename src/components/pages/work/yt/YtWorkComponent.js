// NOTE: When I introduce ButterCMS 
// These static files will be replaced
// by one template. 
import React from 'react';

import Intro from '../../../molecules/Intro/IntroComponent';
import WorkHero from '../../../molecules/WorkHero/WorkHeroComponent';
import TechStack from '../../../molecules/TechStack/TechStackComponent';
import ImageBlock from '../../../atoms/ImageBlock/ImageBlockComponent';
import LaunchSite from '../../../molecules/LaunchSite/LaunchSiteComponent';

// Hero
import hero from './imgs/hero.jpg';
import screenshot from './imgs/yt-macbook.png';

// Tech Stack 
import html from './imgs/html.jpg'; 
import css from './imgs/css.jpg'; 
import wordpress from './imgs/wordpress.jpg'; 
import js from './imgs/js.jpg'; 

// Image Block
import image1 from './imgs/image-one.jpg';
import image2 from './imgs/image-two.jpg';

// Launch CTA
import devices from './imgs/devices.png'


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

                <ImageBlock image1={image1}
                            image2={image2}>
                </ImageBlock>  

                <LaunchSite devices={devices}></LaunchSite>      
            </React.Fragment>
        );
    }
}

export default YtWork;