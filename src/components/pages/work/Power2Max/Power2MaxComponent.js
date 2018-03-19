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

    render() {
        return (
            <React.Fragment>
                <WorkHero heroImage={hero} 
                        screenshot={screenshot}>
                </WorkHero>
                
                <Intro title="Power 2 MAx">
                    <p>
                        Power 2 max are creators of a very useful training tool for cycling called a powermeter. 
                        It enables you to see how much power you are outputting whilst cycling.
                    </p>                
                </Intro>

                <TechStack techstack={this.stacks}></TechStack>

                <Intro title="Site Construction">
                    <p>Power 2 Max was put together </p>
                    <p>Working here gave the chance to expand my knowledge of Typescript, Angular 2 and Webpack, building internal tools for secret projects.</p>
                    <p>The Youtube channels all have online shops that have been built in Magento giving me more chance to expand my knowledge of PHP</p>
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