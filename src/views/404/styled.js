import styled, { createGlobalStyle } from 'styled-components'
import { withPrefix } from 'gatsby'
import hex2rgba from 'hex2rgba'

import { media } from 'src/theme'

export const GlobalState = createGlobalStyle`
  body {
    background: ${props => props.theme.main.bg} url(${withPrefix('/images/pattern.svg')}) repeat;
  }
`

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(421px, 1fr));
  width: 100%;

  > div {
    display: flex;
    justify-content: center;
    align-self: stretch;
  }

  ${media.lessThan('mobile')} {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`

export const Icon = styled.div`
  height: 300px;
  align-items: center;
  
  > svg {
    width: 220px;
    height: 77px;
    fill: ${props => hex2rgba(props.theme.text, 0.95)}
  }

  ${media.lessThan('large')} {
    height: 200px;
  }

  ${media.lessThan('mobile')} {
    > svg {
      width: 180px;
      height: 63px;
    }
  }
`

export const Content = styled.div`
  min-height: 300px;
  align-items: center;

  > div {
    > h1 {
      font-size: 34px;
      margin-bottom: 15px;
    }

    > p {
      font-size: 20px;
      line-height: 25px;
    }
  }

  ${media.lessThan('large')} {
    align-items: flex-start;
    min-height: 200px;
    text-align: center;
  }
`