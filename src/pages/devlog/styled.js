import styled from 'styled-components'
import hex2rgba from 'hex2rgba'

import { media } from 'src/theme'

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: auto;
  flex-direction: column;
`

export const Title = styled.h2`
  height: 150px;
  padding-top: 40px;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;

  ${media.lessThan('mobile')} {
    height: 35px;
    margin-bottom: 15px;
    padding-top: 0;
    text-align: left;
    line-height: 35px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
`

export const Item = styled.li`

  > a {
    display: flex;
    padding: 20px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    text-align: center;
    border-radius: 5px;

    &:hover {
      background-color: ${props => props.theme.card};
      box-shadow: 0 0 7px 3px ${props => hex2rgba(props.theme.hero.bg, 0.5)};
    }
  }

  ${media.greaterThan('mobile')} {
    > a {
      min-height: 150px;
    }
  }
`

export const ItemHeader = styled.div`

  h1 {
    margin-bottom: 10px;
    font-size: 20px;
  }

  p {
    font-size: 15px;
  }
`