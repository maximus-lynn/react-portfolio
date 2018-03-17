import React from 'react';
import './TechStack.scss';

class TechStack extends React.Component {
    render() {
        return (
            <section className="tech-stack">
                <div className="tech-stack__container">
                    <h2 className="tech-stack__heading">TECH STACK</h2>

                    <ul className="tech-stack__list">
                        {this.props.techstack.map(function(stack) {
                            return <li className="tech-stack__item" key={stack}>
                                        <img className="tech-stack__image" src={stack} alt=""/>
                                   </li>
                        })}
                    </ul>
                </div>

            </section>
        );
    }
}

export default TechStack;