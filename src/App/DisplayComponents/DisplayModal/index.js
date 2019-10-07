import React, { useState } from 'react'
import Modal from '../../../components/Modal/index'
import { container, padding } from '../../../Theme/variables'

export const DisplayModal = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div style={{...container, padding: padding }}>
			<Modal isOpen={isOpen} setIsOpen={() => setIsOpen(false)}>
				<div>
					What is Lorem Ipsum?
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</div>
			</Modal>
			<div onClick={() => setIsOpen(true)}>Open modal</div>
		</div>
	)
}