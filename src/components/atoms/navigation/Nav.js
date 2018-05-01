import React from 'react';
import { withRouter } from 'react-router';

import NavLinks from './NavLinks';
import NavLinkItem from './NavLinkItem';
import NavIndicator from './NavIndicator';

import './Nav.css';

const routes = [
	{
		name: "HOME",
		route: "/"
	},
	{
		name: "WORK",
		route: "/work"
	}
]

class Navigation extends React.Component { 
	state = {
		indicatorPosition: 20
    }
    
	handleSetindicatorPosition = position => {
		this.setState({
			indicatorPosition: position
		});
	}

    get navLinks() {
		const { indicatorPosition } = this.state;

		return routes.map( navDataItem => {
			const { name, route } = navDataItem;

			return(
			<NavLinkItem 
	    		to={route}
	    		key={route}
				active={route === window.location.pathname}
				toggle={this.props.toggle}
				indicatorPosition={indicatorPosition}
	    		onSetindicatorPosition={this.handleSetindicatorPosition}>
	    		{name}
	    	</NavLinkItem>
			)
		})	
	} 

	render() {
		const { indicatorPosition } = this.state
		let open = this.props.open ? 'open' : '';
		
		return (
			<div className={`nav ${open}`}>
				<div className="nav__container">			
					<NavLinks>
						{this.navLinks}
					</NavLinks>

					{ indicatorPosition !== null ?
						<NavIndicator 
							position={indicatorPosition} /> : null }				
				</div>
			</div>
		);
	}

}

export default withRouter(Navigation);