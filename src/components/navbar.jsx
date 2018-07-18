import React, { Component } from 'react';
import data from '../data/navbar.js'
import styles from '../stylesheets/navbar.css';

export default class Navbar extends Component {

	renderNavItems(side) {
		return data.sections.map((section, i, sections) => {
			// return early for left or right side
			if ( (side == 'left' && i + 1 <= Math.ceil(sections.length/2))
				|| (side == 'right' && i + 1> Math.ceil(sections.length/2))
			) {
				return;
			}
			else {
				return <a key={i}>{section}</a>
			}
		})
	}

	render() {
		return (
			<nav className={styles.nav}>
				{this.renderNavItems('left')}
				<img src={"assets/images/" + data.image.fileName} alt={data.image.description} />
				{this.renderNavItems('right')}
			</nav>
		)
	}
}