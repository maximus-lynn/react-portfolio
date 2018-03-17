import React from 'react';
import './Hobbies.scss';

const Hobbies = () => {
    return (
        <section className="hobbies">
            <div className="hobbies__content">
                <h2 className="hobbies__heading">Hobbies</h2>
                <p>
                    Now you’ve heard about my skillset, how about finding out what I do if I’m not coding?
                    I’m very into nature and the environment, because of this I do a lot of cycling, hiking and grow my own vegetables.
                </p>
                <p>
                    When I’m not up a mountain or growing vegetables, I love to cook for my partner and have a
                    cheeky drink or two afterwards.
                </p>
                <p>
                    Something else I’ve put on this list is coding. It’s something that I do in my own time as well as
                    for a living. I enjoy coding and like cycling and hiking I crave the challenges that
                    I encounter.
                </p>
            </div>
            <ul className="hobbies__visuials">
                <li className="hobbies__item">
                    <i className="icon-hike hobbies__icon"></i>
                </li>
                <li className="hobbies__item">
                    <i className="icon-cook hobbies__icon"></i>
                </li>
                <li className="hobbies__item">
                    <i className="icon-beer hobbies__icon"></i>
                </li>
                <li className="hobbies__item">
                    <i className="icon-bike hobbies__icon"></i>
                </li>
                <li className="hobbies__item">
                    <i className="icon-carrot hobbies__icon"></i>
                </li>
                <li className="hobbies__item">
                    <i className="icon-code hobbies__icon"></i>
                </li>
            </ul>
        </section>
    );
}

export default Hobbies;