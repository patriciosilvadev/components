import React from 'react'
import { motion } from 'framer-motion';

import TooltipHelp from '../../../components/TooltipHelp'

const container = {
  display: "grid",
  justifyItems: "center",
  gridGap: "15px 0",
  maxWidth: window.innerWidth > 500 ? "385px" : window.innerWidth - 15,
  margin: "0 auto",
  padding: "30px 0",
}

export const DisplayTooltipHelp = () => {
  const title = 'Seu titulo aqui';
  const body = 'Aqui é colocado todo o texto desejado, seja de informação ou de suporte'
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={container}>
      <label key='text'>Clique na ajuda para abrir</label>
      {'  '}
      <TooltipHelp illustration='chatting' title={title} body={body} iconColor='#2D9CDB' iconSize={30} supportButton />
      <label>
      Obs: Caso for utilizar supportButton a Tooltip não deve ser declarada dentro de uma tag label.
      </label>
    </motion.div>
  )
    
}