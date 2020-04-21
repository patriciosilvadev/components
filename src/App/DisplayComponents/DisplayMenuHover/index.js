import React from 'react'
import MenuHover from '../../../components/MenuHover'

export const DisplayMenuHover = () =>
	<MenuHover
		options={['Preços', 'Trend', 'Mais']}
		addContainerStyle={{position: 'absolute'}}
	/>