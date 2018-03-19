import React from 'react';
import './Intro.css';

class Intro extends React.Component {
    render() {
        return (
            <section className="intro">
                <h2 className="intro__heading">
                    {this.props.title}
                </h2>
                <p className="intro__para">
                    {this.props.children}
                </p>
            </section>
        );
    }
}

export default Intro;