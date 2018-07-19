/** Here's the shape
{
	sections: [Array]
	image: {
		fileName: 'string',
		description: 'string'
	},
	styles: {
		background: {
			color: 'string' (see note on color)
		},
		font: {
			color: 'string' (see note on color)
			name: 'string'(see not on name)
			fallback: 'string' (not required)
			italic: boolean (true or false)
			weight: 'string'
		}
	}
}

* FONTS ARE FROM GOOGLE FONTS: https://fonts.google.com

* COLORS CAN BE:
hex ex: '#4286f4'
rgb ex: '66, 134, 244'
rgba ex: '66, 134, 244, 0.5'
word ex: 'red', 'green', 'blue', ...

*/

const data = {
	// SECTION HEADERS
	sections: [
		'About',
		'Services',
		'Connect'
	],

	// IMAGE DETAILS
	image: {
		fileName: 'navimage.png',
		description: 'company logo',
	},

	// SECTION STYLES
	styles: {
		backgroundColor: 'black',
		fontColor: 'white',
		fontName: 'Roboto', // Google Fonts
		fontWeight: '' // 100 - 900
	}

}

export default data