import React from 'react'
import Styled from './styles'

const Paragraph = ({ children, styles, color }) => {
  return <Styled styles={styles} color={color}>{children}</Styled>
}

export default Paragraph
