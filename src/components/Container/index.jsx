import React from 'react'
import Styled from './styles'

const Container = ({ styles, children, isStreched, direction='vertical' }) => {
  return <Styled styles={styles} direction={direction} isStreched={isStreched}>{children}</Styled>
}

Container.displayName = 'Container'

export default Container
