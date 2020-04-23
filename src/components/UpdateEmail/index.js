import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header/index'
import Form from '../Form/index'
import FormInput from '../FormInput/index'
import InputText from '../InputText/index'
import { containerWithPadding } from '@ziro/theme'

const UpdateEmail = ({ row, sendToBackend, navigateTo = '/conta' }) => {
	const [pass, setPass] = useState('')
	const [newEmail, setNewEmail] = useState('')
	const state = { row, pass, newEmail }
	const validations = [
		{
			name: 'pass',
			validation: value => !/^.{0,5}$/g.test(value), // tests for min length of 6 char
			value: pass,
			message: 'Mínimo 6 caracteres'
		}, {
			name: 'newEmail',
			validation: value => /^\S+@\S+\.\S+$/g.test(value), // tests for pattern a@b.c
			value: newEmail,
			message: 'Formato inválido'
		}
	]
	return (
		<div style={containerWithPadding}>
			<Header type='icon-link' icon='back' navigateTo={navigateTo} title='Trocar Email' />
			<Form
				validations={validations}
				sendToBackend={sendToBackend ? sendToBackend(state) : () => null}
				inputs={[
					<FormInput name='pass' label='Senha atual' input={
						<InputText
							value={pass}
							onChange={({ target: { value } }) => setPass(value)}
							placeholder='Sua senha atual'
							type='password'
						/>
					} />,
					<FormInput name='newEmail' label='Novo email' input={
						<InputText
							value={newEmail}
							onChange={({ target: { value } }) => setNewEmail(value ? value.toLowerCase() : '')}
							placeholder='Seu novo email'
							inputMode='email'
							autoComplete='email'
						/>
					} />
				]}
			/>
		</div>
	)
}

UpdateEmail.propTypes = {
	sendToBackend: PropTypes.func.isRequired,
	navigateTo: PropTypes.string
}

export default UpdateEmail