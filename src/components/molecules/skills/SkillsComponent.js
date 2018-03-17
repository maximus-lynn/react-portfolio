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
                            <p>Having worked primarily with Angular I decided that it was time to build a project in React. Leading to my decision to build this website. You can see my code on GitHub here.</p>
                        </header>
                    </article>

                    <article className="skills__article alt">
                        <div className="skills__image">
                            <img src={javascript} alt=""/>
                        </div>                    
                        <header className="skills__desc skills__desc--javascript">
                            <h4 className="skills__header alt">Javascript</h4>
                            <p>Javascript framworks are something that really excite me. I got introduced to Angular when I started working at Figr in 2015.</p>
                            <p>It wasn’t until I started working at Felinesoft and Shift Active Media that I had the chance to learn Angular 2. Opening up the world to Typescript and Web pack.</p>
                        </header>
                    </article>  

                    <article className="skills__article">
                        <div className="skills__image">
                            <img src={htmlCss} alt=""/>
                        </div>                                          
                        <header className="skills__desc">
                            <h4 className="skills__header">HTML & CSS</h4>
                            <p>Javascript framworks are something that really excite me. I got introduced to Angular when I started working at Figr in 2015.</p>
                            <p>It wasn’t until I started working at Felinesoft and Shift Active Media that I had the chance to learn Angular 2. Opening up the world to Typescript and Web pack.</p>
                        </header>                      
                    </article> 

                    <article className="skills__article">
                        <div className="skills__image">
                            <img src={php} alt=""/>
                        </div>                    
                        <header className="skills__desc skills__desc--php">
                            <h4 className="skills__header">PHP</h4>
                            <p>Javascript framworks are something that really excite me. I got introduced to Angular when I started working at Figr in 2015.</p>
                            <p>It wasn’t until I started working at Felinesoft and Shift Active Media that I had the chance to learn Angular 2. Opening up the world to Typescript and Web pack.</p>
                        </header>
                    </article>

                    <article className="skills__article">
                        <div className="skills__image">
                            <img src={others} alt=""/>
                        </div>                    
                        <header className="skills__desc">
                            <h4 className="skills__header">Other Technologies</h4>
                            <p>Javascript framworks are something that really excite me. I got introduced to Angular when I started working at Figr in 2015.</p>
                            <p>It wasn’t until I started working at Felinesoft and Shift Active Media that I had the chance to learn Angular 2. Opening up the world to Typescript and Web pack.</p>
                            <p>Having worked primarily with Angular I decided that it was time to build a project in React. Leading to my decision to build this website. You can see my code on GitHub here.</p>
                        </header>
                    </article>                     
                </section>
            </section>
        </div>
    );
}

export default Skills;