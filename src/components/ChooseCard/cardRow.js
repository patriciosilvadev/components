import React, { memo } from 'react'
import { shape, string, func, bool } from 'prop-types'
import { motion } from 'framer-motion'
import { matchCreditCardBrand } from '../Checkout/utils/matchCreditCardBrand'
import { BrandIcon } from './brandIcon'
import { cardContainer, cardNumber } from './styles'
import { useMemo } from 'react'
import Icon from '../Icon'

const visible = { scaleY: 1, height: 70, opacity: 1 }
const invisible = { scaleY: 0, height: 0, opacity: 0 }

const _CardRow = ({ card: { number, status }, isSelected, onClick, onDelete }) => {

    const brand = matchCreditCardBrand(number)
    const animate = useMemo(() => isSelected ? invisible : visible, [isSelected])

    return (
        <motion.div initial={visible} animate={animate} onClick={onClick} whileTap={{ scale: 0.95 }}>
            <div style={cardContainer}>
                <BrandIcon brand={brand}/>
                <div style={{ display: 'grid', alignItems: 'center' }}>
                    <label style={cardNumber}>{number}</label>
                    {status==='pendingApproval' &&
                        <label style={{ fontSize: 10, textAlign: 'center' }}>aprovação pendente</label>}
                    {status==='pendingManualApproval' &&
                        <label style={{ fontSize: 10, textAlign: 'center' }}>aguardando revisão</label>}
                </div>
                { onDelete &&
                    <div style={{ height: '60px', width: '40px', display: 'grid', alignItems: 'center', justifyItems: 'center' }} onClick={e => {
                        onDelete()
                        e.stopPropagation()
                    }}>
                    <Icon type='trash' size={20} />
                    </div>
                }
            </div>
        </motion.div>
    )
}

_CardRow.propTypes = {
    card: shape({ number: string.isRequired, status: string.isRequired }).isRequired,
    onClick: func,
    isSelected: bool,
    onDelete: func
}

export const CardRow = memo(_CardRow)