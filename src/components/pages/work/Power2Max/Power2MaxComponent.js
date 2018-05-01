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
import php from '../../../../assets/imgs/php.jpg'; 
import woo from '../../../../assets/imgs/woo.jpg'; 

// Image Block
import image1 from './imgs/image-one.jpg';
import image2 from './imgs/image-two.jpg';

// Launch CTA
import devices from './imgs/devices.png'


class Power2Max extends React.Component {
    constructor(props) {
        super(props);
        this.stacks = [html, css, wordpress, js, php, woo]
    }
    
    componentWillMount() {
        document.title = 'Maxwell Lynn - Power2max'
    }    

    render() {
        return (
            <React.Fragment>
                <WorkHero heroImage={hero} 
                        screenshot={screenshot}>
                </WorkHero>
                
                <Intro title="Power 2 MAx">
                    <p>
                        Power 2 max are creators of a very useful training tool for cycling called a powermeter. 
                        It enables you to see how much power you are outputting whilst cycling. As a cyclist myself I was very interested in this project. 
                    </p>              
                    <p>I did all of the Front end development and the majority of the PHP to hook up to the CMS, Wordpress for Shift Active Media.</p>  
                </Intro>

                <TechStack techstack={this.stacks}></TechStack>

                <Intro title="Site Construction">
                    <p>Power 2 Max was put together using Wordpress and Woocommerce. Woocommerce is something that I haven't had any experience with and although simple to learn I believe that they can do a lot to improve their plugin.</p>
                    <p>There was a lot of challenges with this build as their product relied on many variations of accessories to be built with it, this was a nice test for my Javascript skills</p>
                    <p>The branding was already a bright green which again gave us challenges with accessibility with certain foregrounds and backgrounds. In my opinion I think we pulled it off nicely</p>
                </Intro>    

                <ImageBlock image1={image1}
                            image2={image2}>
                </ImageBlock>  

                <LaunchSite devices={devices}
                            link="https://www.power2max.com/"></LaunchSite>      
            </React.Fragment>
        );
    }
}

export default Power2Max;