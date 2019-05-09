import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { withPrefix } from 'gatsby'

import { media } from 'utils/theme'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-family: 'Spoqa Han Sans', 'Sans-serif';
    font-weight: 400;
    box-sizing: border-box;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    /* background: url(${withPrefix('/images/pattern.svg')}) repeat; */
  }

  h1, h2, h3, b, strong {
    font-weight: 700;
  }

  h1 {
    font-size: 2.625rem;
  }

  h2 {
    font-size: 1.625rem;
  }

  h3 {
    font-size: 1.375rem;
  }

  h4 {
    font-size: 1.125rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  i, 
  em {
    font-style: italic;
  }

  tt,
  code {
    padding: 0;
  }
  
  ${media.lessThan('xsmall')} {
    html {
      font-size: 100%;
    }
  }
`

export const Main = styled.main`
  max-width: 550px;
  margin: 0 auto;
  padding: 0px 1.5rem 5rem;
`