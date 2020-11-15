import React, { useState } from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import Styled, { Bars, Cross, ItemsWrapper } from './styles'
import NavItem from '../../components/NavItem'


export const Navbar = () => {
  const [activeItem, setActiveItem] = useState('who')

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        publicURL
      }
    }
  
  `)

  //todo: en las secciones id={'section1'}
  //todo: que baje

  //* Responsive

  return (
    <Styled>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img style={{ width: 200 }} src={data.logo.publicURL} alt="Maisha Roots logo" />
      </Link>

      {/* <Bars /> */}
      <ItemsWrapper >
        {/* <Cross /> */}
        <NavItem sectionId='who' 
          onClick={setActiveItem.bind(undefined, 'who')} 
          isActive={activeItem === 'who'} 
          subItemsData={[{ name: 'CONÓCENOS', url: '/#know-us' }, { name: 'DÓNDE TRABAJAMOS', url: '/#where' }]}
        >QUIÉNES SOMOS</NavItem>

        <NavItem sectionId='where' onClick={setActiveItem.bind(undefined, 'where')} isActive={activeItem === 'where'} subItemsData={[{ name: 'CONÓCENOS', url: '/#know-us' }, { name: 'DÓNDE TRABAJAMOS', url: '/#where' }]}>DE DONDE VENIMOS</NavItem>


      </ItemsWrapper>
      
    </Styled>
  )
}

export default Navbar
