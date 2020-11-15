import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from './src/themes/theme'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    position: relative;
    font-family: ${theme.fonts.main};
    font-size: 16px;
    font-weight: 400;

    //* siempre: footer bottom */
    min-height: 100vh; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    overflow-x: hidden;

    @media ${theme.breakpoints.xs} {
      font-size: 15px;
    }
  }

  /* input, button, textarea, select {
    font: inherit;
  } */

  /* button, a {
    text-decoration: none;
  } */

  input, button, textarea, a {
    &:focus, &:hover, &:active, &:visited {
      outline: none;
	    -webkit-tap-highlight-color: transparent; /* prevents the blue! */
    }
  }

`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    {element}
  </ThemeProvider>
)