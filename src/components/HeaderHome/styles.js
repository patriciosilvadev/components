import { fontTitle, fontSizeSmall, primaryColor } from '@ziro/theme'

export const

container = {
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	alignItems: 'center',
	justifyItems: 'end',
	margin: '0 auto 30px'
},

link = whiteText => ({
	fontFamily: fontTitle,
	fontSize: fontSizeSmall,
	color: whiteText ? 'white' : primaryColor,
	textDecoration: 'underline'
})