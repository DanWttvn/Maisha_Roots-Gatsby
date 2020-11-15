import React from 'react'
import { H3, H4 } from './styles'

const Subtitle = ({ children, styles, color, small }) => {
  return (
    <>
      {small
        ? <H4 color={color} styles={styles}>{children}</H4>
        : <H3 color={color} styles={styles}>{children}</H3>
      }
    </>
  )
}

export default Subtitle
