import styled from 'styled-components'
import hex2rgba from 'hex2rgba'

import { media } from 'src/theme'

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
`

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  border-radius: 5px;
  background-color: ${props => props.theme.hero.bg};
  position: relative;
  overflow: hidden;

  > h1,
  > p {
    display: inline-block;
    color: ${props => props.theme.hero.text};
    font-weight: 700;
    z-index: 1;
  }

  > h1 {
    margin-bottom: 20px;
  }

  > svg {
    fill: none;
    stroke: ${props => hex2rgba(props.theme.hero.text, 0.2)};
    position: absolute;
    z-index: 0;
  }
  
  ${media.greaterThan('medium')} {
    height: calc(100vw / 2);
    max-height: 700px;

    > h1 {
      font-size: 65px;
    }

    > p {
      font-size: 22px;
    }

    > svg {
      width: 110%;
      right: -40%;
      bottom: -10%;
    }
  }

  ${media.lessThan('medium')} {
    height: 400px;

    > h1 {
      font-size: 55px;
    }

    > p {
      font-size: 20px;
    }

    > svg {
      width: 100%;
      right: -38%;
      bottom: 6%;
    }
  }
  
  ${media.lessThan('small')} {
    height: 300px;

    > h1 {
      margin-bottom: 12px;
      font-size: 38px;
    }

    > p {
      font-size: 16px;
    }

    > svg {
      width: 100%;
      right: -30%;
      bottom: 8%;
    }
  }
`

export const Title = styled.h2`
  margin-bottom: 15px;
  font-size: 20px;
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
      min-height: 210px;
    }
  }
`

export const ItemHeader = styled.div`
  margin-bottom: 20px;

  h1 {
    margin-bottom: 10px;
    font-size: 20px;
  }

  p {
    font-size: 15px;
  }
`