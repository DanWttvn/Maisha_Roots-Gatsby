import React from 'react'
import Styled from './styles'

const Text = ({ children, onClick, styles, isBlack, isHighlighted, href }) => {
  //todo: routing para dentro y fuera
  if(href) console.log('hacer un ruting')
  
  return (
    <Styled styles={styles} isBlack={isBlack} isHighlighted={isHighlighted} onClick={onClick} >
      {children}
    </Styled>
  )
}

export default Text
