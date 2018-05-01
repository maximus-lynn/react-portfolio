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
import angular from '../../../../assets/imgs/angular.jpg'; 

// Image Block
import image1 from './imgs/image-one.jpg';
import image2 from './imgs/image-two.jpg';

// Launch CTA
import devices from './imgs/devices.png'


class PlaySportsGroup extends React.Component {
    constructor(props) {
        super(props);
        this.stacks = [html, css, wordpress, js, php, angular]
    }

    componentWillMount() {
        document.title = 'Maxwell Lynn - Playsports Network'
    }    

    render() {
        return (
            <React.Fragment>
                <WorkHero heroImage={hero} 
                        screenshot={screenshot}>
                </WorkHero>
                
                <Intro title="Playsports network">
                    <p>Playsports Network is part of Shift Active Media where I am employed. Our team of developers have the duty to maintain many different websites across Playsports Network</p>
                    <p>This company is globally huge in the sports industry. With Youtube channels for road cycling, mountain biking, E-bikes, swimming and running. Giving viewers a mass range of videos.</p>
                </Intro>

                <TechStack techstack={this.stacks}></TechStack>

                <Intro title="Behind the scenes">
                    <p>From building internal tools to ecommerce shops the developers have a vast amount of diversity here.</p>
                    <p>Working here gave the chance to expand my knowledge of Typescript, Angular 2 and Webpack, building internal tools for secret projects.</p>
                    <p>The Youtube channels all have online shops that have been built in Magento giving me more chance to expand my knowledge of PHP</p>
                </Intro>    

                <ImageBlock image1={image1}
                            image2={image2}>
                </ImageBlock>  

                <LaunchSite devices={devices}
                            link="https://www.playsportsnetwork.com/"></LaunchSite>      
            </React.Fragment>
        );
    }
}

export default PlaySportsGroup;