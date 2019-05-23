import styled from 'styled-components'
import hex2rgba from 'hex2rgba'

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px 0;
`

export const Item = styled.li`
  padding: 0 20px 0 15px;
  position: relative;

  > a {
    display: block;
    padding: 8px 0;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    text-transform: uppercase;
    border-bottom: 1px solid ${props => hex2rgba(props.theme.placeholder, 1)};
  }

  &::before {
    content: '';
    width: 5px;
    background-color: ${props => hex2rgba(props.theme.hero.bg, 0.8)};
    position: absolute;
    top: 5px;
    left: 0;
    bottom: 5px;
  }
`