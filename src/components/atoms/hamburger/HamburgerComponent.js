import React from 'react';

import './hamburger.css';

class Hamburger extends React.Component {

    render() {
        let open = this.props.open ? 'open' : '';

        return (
            <div className={`hamburger ${open}`}
                 onClick={this.props.toggle}>
                <span className="hamburger__middle"></span>
            </div>
        );
    }
}

export default Hamburger;