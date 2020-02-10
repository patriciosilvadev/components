import React from 'react'
import { useLocation } from 'wouter'
import Illustration from '../../Illustration/index'
import Button from '../../Button/index'
import { container, svg, title } from './styles'

export const SuccessModal = () => {
	const [, setLocation] = useLocation()
	return (
		<div style={container}>
			<div style={svg}><Illustration type='paymentSuccess' /></div>
			<label style={title}>Cartão cadastrado!</label>
			<Button type='link' cta='Voltar' navigate={() => setLocation('/')} />
		</div>
	)
}