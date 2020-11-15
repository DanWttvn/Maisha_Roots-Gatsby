import React from 'react'
import { ButtonA, ButtonB } from './styles'


const Button = ({ children, onClick, theme = 'A', styles }) => {
  let Styled

  switch (theme) {
    case 'B':
      Styled = ButtonB
      break

    default:
      Styled = ButtonA
  }

  return <Styled onClick={onClick} styles={styles}>{children}</Styled>
}

Button.displayName = 'Button'

export default Button
