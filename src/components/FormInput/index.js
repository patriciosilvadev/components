import React from 'react'
import PropTypes from 'prop-types'
import InputLabel from '../InputLabel/index'
import Badge from '../Badge/index'
import { alertColor } from '@ziro/theme'
import { labelHeader, error } from './styles'

const FormInput = ({ label, errorMsg, input }) =>
	<div>
		<InputLabel
			styleHeader={labelHeader}
			name={label}
		/>
		{input}
		<label style={error}>
			&nbsp;
			{errorMsg && <Badge type='alert' message={errorMsg} size={12} color={alertColor} />}
		</label>
	</div>

FormInput.propTypes = {
	label: PropTypes.string.isRequired,
	errorMsg: PropTypes.string,
	input: PropTypes.element.isRequired
}

export default FormInput