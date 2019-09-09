import React from 'react'
import PropTypes from 'prop-types'
import { primaryColor } from '../../Theme/variables'

export const Warning = ({ size = 24, color = primaryColor, strokeWidth = 2, onClick = null }) =>
	<svg onClick={onClick} width={size} height={size} viewBox='0 0 24 24' fill='none' stroke={color} strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round'>
		<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
		<line x1="12" y1="9" x2="12" y2="13"></line>
		<line x1="12" y1="17" x2="12" y2="17"></line>
	</svg>

Warning.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string,
	strokeWidth: PropTypes.number,
	onClick: PropTypes.func
}