import React from 'react'
import PropTypes from 'prop-types'
import { primaryColor } from '../../Theme/variables'

export const Elo = ({ size = 50, color = primaryColor }) =>
	<svg viewBox='80 0 620 480' width={size + 20} height={size}>
		<path d='m170.45 186.15c6.7-2.199 13.9-3.5 21.4-3.5 32.6 0 59.8 23.2 66 53.9l46.2-9.4c-10.6-52.3-56.8-91.6-112.2-91.6-12.7 0-24.9 2.1-36.3 5.9l14.9 44.7zm-54.5 149.7l31.2-35.3c-14.459-12.799-22.727-31.189-22.7-50.5 0-20.1 8.8-38.1 22.7-50.4l-31.2-35.3c-23.7 21-38.6 51.601-38.6 85.7s14.9 64.8 38.6 85.8zm141.8-72.3c-6.3 30.7-33.4 53.8-66 53.8-7.5 0-14.7-1.2-21.4-3.5l-15 44.7c11.4 3.8 23.6 5.9 36.3 5.9 55.4 0 101.5-39.301 112.2-91.5l-46.1-9.4zm200 31.599c-7.6 7.4-18 11.9-29.398 11.801-7.802-0.101-15.102-2.5-21.2-6.399l-15.3 24.399c10.5 6.601 22.8 10.5 36.1 10.699 19.4 0.301 37-7.3 49.9-19.898l-20.102-20.602zm-27.7-99.199c-38.5-0.601-70.3 30.199-70.898 68.8-0.2 14.5 4 28 11.3 39.2l126.5-54.1c-7.099-30.5-34.2-53.4-66.9-53.9m-41.9 74.199c-0.2-1.6-0.3-3.3-0.2-5 0.4-22.699 19.1-40.898 41.8-40.5 12.4 0.2 23.3 5.801 30.8 14.601l-72.4 30.899zm148.5-105.7v134.9l23.398 9.7-11.099 26.6-23.1-9.6c-5.2-2.3-8.7-5.7-11.4-9.6-2.6-4-4.5-9.4-4.5-16.7v-135.3h26.701zm84.4 62.3c4.102-1.4 8.5-2.101 13-2.101 19.9 0 36.5 14.101 40.302 32.9l28.198-5.7c-6.5-31.899-34.698-55.899-68.5-55.899-7.698 0-15.198 1.3-22.1 3.6l9.1 27.2zm-33.199 91.399l19.1-21.5c-8.5-7.5-13.9-18.5-13.9-30.8s5.4-23.2 13.9-30.8l-19.1-21.5c-14.5 12.8-23.602 31.5-23.602 52.3s9.102 39.501 23.602 52.3zm86.5-44.099c-3.802 18.7-20.4 32.9-40.302 32.9-4.6 0-8.898-0.7-13-2.102l-9.1 27.301c7 2.301 14.4 3.601 22.2 3.601 33.8 0 62-24 68.5-55.9l-28.298-5.8z' fill={color} />
	</svg>

Elo.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string
}