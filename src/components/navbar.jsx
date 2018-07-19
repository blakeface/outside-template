import React, { Component } from 'react'
import data from '../data/navbar.js'
import cxs from 'cxs/component'
import WebFont from 'webfontloader';

let font = String(data.styles.fontName.replace(/\s/g, '+'))
if (data.styles.fontWeight.length) {
	font += `:${data.styles.fontWeight}`
}
let fontColor = String(data.styles.fontColor)
if (fontColor.split(',').length === 3) fontColor = `rgb(${fontColor})`
if (fontColor.split(',').length === 4) fontColor = `rgba(${fontColor})`

WebFont.load({
  google: {
    families: [font]
  }
});

const StyledNav = cxs('nav')({
	backgroundColor: data.styles.backgroundColor || 'black',
	color: fontColor,
	fontFamily: data.styles.fontName,
	' img': {
		width: '150px',
	},
	display: 'flex',
	flexFlow: 'row noWrap',
	justifyContent: 'space-around',
	alignItems: 'center',
})

export default class Navbar extends Component {
	renderNavItems(side) {
		return data.sections.map((section, i, sections) => {
			// return early for left or right side
			if ( (side == 'left' && i >= Math.ceil(sections.length/2))
				|| (side == 'right' && i < Math.ceil(sections.length/2))
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
			<StyledNav>
				{this.renderNavItems('left')}
				<img src={"assets/images/" + data.image.fileName} alt={data.image.description} />
				{this.renderNavItems('right')}
				{data.sections.length % 2 == 0 ? null : <div className="spacer" />}
			</StyledNav>
		)
	}
}