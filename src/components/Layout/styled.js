import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { withPrefix } from 'gatsby'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-family: 'Spoqa Han Sans', 'Sans-serif';
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    background: url(${withPrefix('/images/pattern.svg')}) repeat;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }

  tt,
  code {
    background-color: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    font-family: "SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono",
      "Liberation Mono", Menlo, Courier, monospace;
    padding: 0;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
  }
  pre code {
    background: none;
    line-height: 1.42;
  }
  code:before,
  code:after,
  tt:before,
  tt:after {
    letter-spacing: -0.2em;
    content: " ";
  }
  pre code:before,
  pre code:after,
  pre tt:before,
  pre tt:after {
    content: "";
  }

  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
`

export const Wrap = styled.div`

`