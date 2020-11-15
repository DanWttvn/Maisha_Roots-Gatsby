import React, { useState } from 'react'
import Styled, { Dialog, Cross } from './styles'

const Modal = ({ children, styles, open }) => {
  const [isOpen, setIsOpen] = useState(open || true)

  return (
    <Styled styles={{ display: isOpen ? 'flex' : 'none' }}>
      <Dialog styles={styles}>
        <Cross onClick={setIsOpen.bind(undefined, false)}/>
        {children}
      </Dialog>
    </Styled>
  )
}

export default Modal
