import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'wouter'
import { header, welcome, word, color, name, cnpj, nav, navlink, navicon, navtext, navsoon } from './styles'

const DrawerPanel = ({ username, userdata, options }) => {
	const [highlightBoxWidth, setHighlightBoxWidth] = useState(0)
	const highlightBox = useCallback(htmlNode => {
		if (htmlNode) setHighlightBoxWidth(htmlNode.getBoundingClientRect().width)
	}, [username])
	return (
		<>
			<div style={header}>
				<label style={welcome}>
					Olá,&nbsp;
					<span style={word}>
						<span style={color(highlightBoxWidth)}></span>
						<span style={name} ref={highlightBox}>
							{username}
						</span>
					</span>
				</label>
				<label style={cnpj}>{userdata}</label>
			</div>
			<div style={nav}>
				{options.map(({ path, onClick, icon, text, soon }, index) =>
					<Link style={navlink} to={path} onClick={onClick} key={index}>
						<div style={navicon}>{icon}</div>
						<label style={navtext}>
							{text}
							{soon && <label style={navsoon}>&nbsp;(breve)</label>}
						</label>
					</Link>
				)}
			</div>
		</>
	)
}

DrawerPanel.propTypes = {
	username: PropTypes.string.isRequired,
	userdata: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default DrawerPanel