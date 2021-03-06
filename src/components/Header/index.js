import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'wouter'
import Sticky from './Sticky'
import Icon from '../Icon/index'
import { container, svg, text } from './styles'

const Header = ({ type, title, icon, setIsOpen, navigateTo, hideButton, hideFilter }) => {
	const [, setLocation] = useLocation();

	useEffect(() => {
		if (type !== 'title-only') {
			const headerText = document.getElementById(title).lastChild
			const isEllipsisActive = headerText.offsetWidth < headerText.scrollWidth
			if (isEllipsisActive)
				headerText.style.margin = '0px'
		}
	}, [])
	const component = {
		'icon':
			<>
				<div onClick={() => setIsOpen()}><Icon type={icon || 'ziro'} style={svg(setIsOpen)} /></div>
				<h1 style={text(false)}>{title}</h1>
			</>,
		'icon-link':
			<>
				<div onClick={() => setLocation(navigateTo)}><Icon type={icon || 'ziro'} style={svg(navigateTo)} /></div>
				<h1 style={text(false)}>{title}</h1>
			</>,
		'title-only': <h1 style={text(true)}>{title}</h1>,
		'sticky': <Sticky title={title} />
	}
	if (type === 'sticky') return <Sticky title={title} hideButton={hideButton} hideFilter={hideFilter} />
	return (
		<div style={container(type === 'title-only')} id={title}> {/* header titles must be different if several header are on same page */}
			{component[type]}
		</div>
	)
}

Header.propTypes = {
	type: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
	setIsOpen: PropTypes.func,
	navigateTo: PropTypes.string,
	hideButton: PropTypes.bool,
	hideFilter: PropTypes.bool
}

export default Header