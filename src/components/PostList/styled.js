import styled, { css } from 'styled-components'
import hex2rgba from 'hex2rgba'

import { media } from 'src/theme'

export const Wrap = styled.div`
  flex: 0 0 200px;
  margin-left: 40px;
  padding: 20px 0;
  box-sizing: border-box;
  border-left: 1px solid ${props => hex2rgba(props.theme.main.list, 1)};
  transition: border-left 500ms ease;

  ${media.lessThan('medium')} {
    display: none;
  }

  ${media.greaterThan('largerSidebar')} {
    flex: 0 0 300px;
  }
`

export const List = styled.ul`
  
`

export const Item = styled.li`
  border-left: 3px solid transparent;
  padding-left: 20px;
  line-height: 20px;
  transition: color 500ms ease, border-left 400ms ease;

  & + li {
    margin-top: 10px;
  }

  ${props => props.isActive ? css`
    font-weight: 700;
    border-color: ${props.theme.textHighlight};

  ` : css`
    &:hover {
      color: ${hex2rgba(props.theme.text, 0.65)};
      transition: color 100ms ease;
    }
  `}
`