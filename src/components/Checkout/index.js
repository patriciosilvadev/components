import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useCard } from './utils/useCard'
import { installmentOptions } from './utils/installmentUtils'
import Header from '../Header/index'
import CreditCard from '../CreditCard/index'
import Form from '../Form/index'
import FormInput from '../FormInput/index'
import InputText from '../InputText/index'
import Dropdown from '../Dropdown/index'
import { Summary } from './Summary/index'
import { SuccessModal } from './ModalSubmit/SuccessModal'
import { ErrorModal } from './ModalSubmit/ErrorModal'
import { container, dual, regulatory, ziro } from './styles'

const Checkout = ({ charge, maxInstallments, seller, sendToBackend }) => {
	const [number, setNumber] = useState('')
	const [cardholder, setCardholder] = useState('')
	const [expiry, setExpiry] = useState('')
	const [cvv, setCvv] = useState('')
	const [installments, setInstallments] = useState('')
	const [brand, numberMaskedCard, numberMaskedInput, expiryMasked, cvvMasked] = useCard(number)
	const state = { number, cardholder, expiry, cvv, installments, brand }
	const validations = [
		{
			name: 'number',
			validation: value => !!value && value.replace(/\s/g, '').length >= 12,
			value: number,
			message: 'Revise número digitado'
		},
		{
			name: 'cardholder',
			validation: value => !!value,
			value: cardholder,
			message: 'Campo obrigatório'
		},
		{
			name: 'expiry',
			validation: value => !!value && value.length === 5,
			value: expiry,
			message: 'Revise campo'
		},
		{
			name: 'cvv',
			validation: value => !!value && value.length >= 3,
			value: cvv,
			message: 'Revise campo'
		},
		{
			name: 'installments',
			validation: value => !!value,
			value: installments,
			message: 'Campo obrigatório'
		}
	]
	return (
		<div style={container}>
			<CreditCard
				number={numberMaskedCard}
				brand={brand}
				cardholder={cardholder}
				expiry={expiry}
				cvv={cvv}
			/>
			<Form
				useModalLayoutOnSubmit={true}
				successComponent={() => <SuccessModal />}
				errorComponent={props => <ErrorModal closeModal={props} />}
				buttonName='Confirmar'
				validations={validations}
				sendToBackend={sendToBackend ? sendToBackend(state) : () => null}
				summary={<Summary charge={charge} installments={installments} seller={seller} />}
				inputs={[
					<FormInput
						name='number'
						label='Número do cartão'
						input={
							<InputText
								value={number}
								onChange={({ target: { value } }) => setNumber(numberMaskedInput(value))}
								placeholder='1234 1234 1234 1234'
								inputMode='numeric'
							/>
						}
					/>,
					<FormInput
						name='cardholder'
						label='Titular do cartão'
						input={
							<InputText
								value={cardholder}
								onChange={({ target: { value } }) => setCardholder(value)}
								placeholder='Fernando(a) da Silva'
							/>
						}
					/>,
					<div style={dual}>
						<FormInput
							name='expiry'
							label='Validade'
							input={
								<InputText
									value={expiry}
									onChange={({ target: { value } }) => setExpiry(expiryMasked(value))}
									placeholder='01/24'
									inputMode='numeric'
								/>
							}
						/>
						<FormInput
							name='cvv'
							label='CVV'
							input={
								<InputText
									value={cvv}
									onChange={({ target: { value } }) => setCvv(cvvMasked(value))}
									placeholder='1111'
									inputMode='numeric'
								/>
							}
						/>
					</div>,
					<FormInput
						name='installments'
						label='Parcelamento'
						input={
							<Dropdown
								readOnly={true}
								value={installments}
								onChange={({ target: { value } }) => setInstallments(value.substring(0, 1))}
								list={installmentOptions(charge, maxInstallments)}
								placeholder='Escolha quantas parcelas'
								onChangeKeyboard={element => element ? setInstallments(element.value.substring(0, 1)) : null}
							/>
						}
					/>
				]}
			/>
			<div style={regulatory}>
				<label style={ziro}>ZIRO: 28.026.371/0001-61</label>
			</div>
		</div>
	)
}

Checkout.propTypes = {
	charge: PropTypes.string.isRequired,
	maxInstallments: PropTypes.string.isRequired,
	seller: PropTypes.string.isRequired,
	sendToBackend: PropTypes.func.isRequired
}

export default Checkout