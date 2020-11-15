import React, { useState } from 'react'
import Styled, {  Wrapper } from './styles'

const Title = ({ firstPart, secordPart, styles }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Styled styles={styles}>

      <Wrapper content={firstPart} isVisible={isVisible}>
        {firstPart}
      </Wrapper>

      <Wrapper content={secordPart} isVisible={isVisible}>
        {secordPart}
      </Wrapper>

      {/* //todo: ver como visible */}
      <button onClick={() => setIsVisible(!isVisible)}>VISIBLE</button>

    </Styled>
  )
}

export default Title
