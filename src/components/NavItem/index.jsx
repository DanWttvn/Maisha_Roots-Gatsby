import React, { useState } from 'react'
import Styled, { SubItemsWrapper } from './styles'
import { Link } from 'gatsby'


const NavItem = ({ children, subItemsData, isActive, sectionId, onClick }) => {
  const [showSub, setShowSub] = useState(false)

  const subItems = subItemsData?.map((x, i) => (
    <Link to={x.url} key={i} style={{ textDecoration: 'none' }}>
      <Styled >{x.name}</Styled>
    </Link>
  ))

  return (
    <Link to={`/#${sectionId}`} style={{ textDecoration: 'none' }}>
      <Styled
        isActive={isActive}
        onClick={onClick}
        onMouseEnter={() => setShowSub(true)}
        onMouseLeave={() => setShowSub(false)}
      >
        {children}
        <SubItemsWrapper showSub={showSub}>
          {subItems}
        </SubItemsWrapper>   
      </Styled>
    </Link>
  )
}

export default NavItem

