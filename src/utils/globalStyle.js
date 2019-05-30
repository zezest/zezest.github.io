import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { withPrefix } from 'gatsby'
import hex2rgba from 'hex2rgba'

import { media } from 'utils/theme'

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'NanumSquare';
    font-weight: 700;
    src: local('NanumSquareEB'),
      url(${withPrefix('fonts/NanumSquareEB.woff2')}) format('woff2'),
      url(${withPrefix('fonts/NanumSquareEB.woff')}) format('woff'),
      url(${withPrefix('fonts/NanumSquareEB.ttf')}) format('truetype');
  }
  @font-face {
    font-family: 'NanumSquare';
    font-weight: 400;
    src: local('NanumSquareR'),
      url(${withPrefix('fonts/NanumSquareR.woff2')}) format('woff2'),
      url(${withPrefix('fonts/NanumSquareR.woff')}) format('woff'),
      url(${withPrefix('fonts/NanumSquareR.ttf')}) format('truetype');
  }

  * {
    box-sizing: border-box;
  }

  html {
    color: ${props => props.theme.text};
    font-family: 'NanumSquare', 'Sans-serif';
    font-weight: 400;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    background-color: ${props => props.theme.main.bg};
    transition: background-color 66ms ease;
  }

  h1, h2, h3, h4, b, strong {
    color: ${props => props.theme.text};
    font-weight: 700;
  }

  h1 {
    font-size: 1.925rem;
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
  
  h5 {
    font-size: 1rem;
  }

  h6 {
    font-size: 0.975rem;
  }

  p,
  li {
    color: ${props => hex2rgba(props.theme.text, 0.9)};
    word-break: break-word;
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

  input[type=search]::-ms-clear {
    display: none;
    width : 0;
    height: 0;
  }
  input[type=search]::-ms-reveal {
    display: none;
    width : 0;
    height: 0;
  }

  input[type=search]::-webkit-search-decoration,
  input[type=search]::-webkit-search-cancel-button,
  input[type=search]::-webkit-search-results-button,
  input[type=search]::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
  
  ${media.lessThan('xsmall')} {
    html {
      font-size: 100%;
    }
  }
`

export default GlobalStyle