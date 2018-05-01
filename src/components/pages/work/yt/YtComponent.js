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
import screenshot from './imgs/macbook.png';

// Tech Stack 
import html from '../../../../assets/imgs/html.jpg';  
import css from '../../../../assets/imgs/css.jpg'; 
import wordpress from '../../../../assets/imgs/wordpress.jpg'; 
import js from '../../../../assets/imgs/js.jpg'; 

// Image Block
import image1 from './imgs/image-one.jpg';
import image2 from './imgs/image-two.jpg';

// Launch CTA
import devices from './imgs/devices.png'


class YoungTalent extends React.Component {
    constructor(props) {
        super(props);
        this.stacks = [html, css, wordpress, js]
    }
    componentWillMount() {
        document.title = 'Maxwell Lynn - Young Talent'
    }    
    render() {
        return (
            <React.Fragment>
                <WorkHero heroImage={hero} 
                        screenshot={screenshot}>
                </WorkHero>
                
                <Intro title="Young Talent">
                    <p>YT Industries asked Shift Active Media the company that I am working for currently to build them a microsite to promote the release of their new website.</p>
                    <p>When we found out that YT stands for Young Talent our team decided to play on this by showing extreme examples of peoples young talent. This ranged from a Sister Nun who entered Ironman to Office MMA fighters.</p>
                </Intro>

                <TechStack techstack={this.stacks}></TechStack>

                <Intro title="Site Construction">
                    <p>As the lead front end developer on the project I was given the challenge to bring this beast to life. </p>
                    <p>We knew we wanted large facials of the talented people with a before and after state activated by hover events. It turned out to be quite a complex reveal and I was very proud to have done it using just CSS and HTML.</p>
                    <p>As well as the front end work I also hooked this into Wordpress using Custom Advanced Fields, making the whole website content manageable. Lastly the website was too small for a CSS framework so everything was coded from scratch.</p>
                </Intro>    

                <ImageBlock image1={image1}
                            image2={image2}>
                </ImageBlock>  

                {/*
                <LaunchSite devices={devices}
                            link="http://findyouryoungtalent.com">
                </LaunchSite>       
                */}
            </React.Fragment>
        );
    }
}

export default YoungTalent;