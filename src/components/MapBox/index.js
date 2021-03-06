import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import { primaryColor } from '@ziro/theme'
import { container } from './styles'
import 'mapbox-gl/dist/mapbox-gl.css'

const MapBox = ({ apiToken, center = [-46.638279672833505,-23.529533748594474], zoom = 14 }) => {
	useEffect(() => {
		mapboxgl.accessToken = apiToken || process.env.MAPBOX_API
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: center,
			zoom: zoom
		})
		new mapboxgl.Marker({ color: primaryColor }).setLngLat(center).addTo(map)
	}, [])
	return <div style={container} id='map'></div>
}

MapBox.propTypes = {
	apiToken: PropTypes.string,
	center: PropTypes.array,
	zoom: PropTypes.number
}

export default MapBox