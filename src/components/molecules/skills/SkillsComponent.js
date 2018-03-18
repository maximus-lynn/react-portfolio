import React from 'react';

// Images
import angular from './imgs/angular.jpg'; 
import javascript from './imgs/js.jpg'; 
import htmlCss from './imgs/html-css.jpg'; 
import php from './imgs/php.jpg'; 
import others from './imgs/others.jpg'; 

import './skills.scss';

const Skills = () => {
    return (
        <div className="skills">
            <section className="skills__container">
                <div className="skills__title">
                    <h2 className="skills__heading">MY SKILLS</h2>
                </div>

                <section className="skills__content">
                    <article className="skills__article">
                        <div className="skills__image">
                            <img src={angular} alt=""/>
                        </div>                    
                        <header className="skills__desc skills__desc--frameworks">
                            <h4 className="skills__header">JS frameworks</h4>
                            <p>Javascript framworks are something that really excite me. I got introduced to Angular when I started working at Figr in 2015.</p>
                            <p>It wasn’t until I started working at Felinesoft and Shift Active Media that I had the chance to learn Angular 2. Opening up the world to Typescript and Web pack.</p>
                            <p>Having worked primarily with Angular I decided that it was time to build a project in React. Leading to my decision to build this website in React. You can view the code <a href="https://github.com/maximus-lynn/react-portfolio">here</a>.</p>
                        </header>
                    </article>

                    <article className="skills__article alt">
                        <div className="skills__image">
                            <img src={javascript} alt=""/>
                        </div>                    
                        <header className="skills__desc skills__desc--javascript">
                            <h4 className="skills__header alt">Javascript</h4>
                                <p>
                                    Now we are talking, Javascript is something that I love and it opens up so many boxes for the
                                    web. I believe it has a very exciting future and I want to commit myself to learning every
                                    aspect of this beautiful but loosely typed language.
                                </p>
                                <p>
                                    I have had a lot of experience with Javascript from writing sliders to interactive whiteboards.
                                </p>
                        </header>
                    </article>  

                    <article className="skills__article">
                        <div className="skills__image">
                            <img src={htmlCss} alt=""/>
                        </div>                                          
                        <header className="skills__desc">
                            <h4 className="skills__header">HTML & CSS</h4>
                            <p>
                                My first tongues, HTML and CSS, these languages are where my love for development came
                                from. Helping a family friend build his website to promote his business gave me a huge insight
                                into what this industry was about.
                            </p>
                            <p>
                                BEM and Atomic Design principles are important in my workflow. I believe they create a
                                combination that really helps support good practices across one’s SCSS.
                            </p>
                            <p>    
                                On large scale projects I have learnt using Foundation as a CSS Framework is extremely useful
                                for quick turn arounds for deadlines. If time wasn’t an issue, I would create my own.
                            </p>
                        </header>                      
                    </article> 

                    <article className="skills__article">
                        <div className="skills__image">
                            <img src={php} alt=""/>
                        </div>                    
                        <header className="skills__desc skills__desc--php">
                            <h4 className="skills__header">PHP</h4>
                            <p>
                                I am very keen on learning as much as I can. I believe that coding is more about learning the
                                principles behind the language rather than focusing on one area, this is why I learnt and still am
                                learning PHP.                                
                            </p>
                            <p>
                                In my current role we have built multiple ecommerce platforms for our clients using PHP. I have
                                been given the task of incorporating my front end code into these platforms
                                growing my knowledge of the language.
                            </p>
                        </header>
                    </article>

                    <article className="skills__article">
                        <div className="skills__image">
                            <img src={others} alt=""/>
                        </div>                    
                        <header className="skills__desc">
                            <h4 className="skills__header">Other Technologies</h4>                          
                            <p>
                                There are so many tools that I’ve worked with, the logos to the right are a few examples of
                                these. I try almost everything out just to give myself a better knowledge of what there is. I think
                                this is important so when the time comes you know the right tool for that situation.
                            </p>
                            <p>                            
                                I’ve added React to the right, although I haven’t worked on any client websites using React I
                                took the opportunity to build this portfolio in React to broaden my knowledge of the frameworks.
                            </p>
                            <p>
                                Something that I have omitted is that I am familiar with quite a few templating engines
                                such as Twig, Mustache and Pug.  
                            </p>
                        </header>
                    </article>                     
                </section>
            </section>
        </div>
    );
}

export default Skills;