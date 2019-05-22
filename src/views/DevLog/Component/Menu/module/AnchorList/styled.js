import styled, { css } from 'styled-components'
import hex2rgba from 'hex2rgba'

const space = 20

export const Item = styled.li`
  border-left: 4px solid transparent;
  padding-left: ${props => (props.level * space) + 16}px;
  font-size: 13px;
  line-height: 20px;

  & + li {
    margin-top: 5px;
  }

  ${props => props.isActive ? css`
    border-color: ${props.theme.textHighlight};

    > a {
      color: ${props.theme.text};
      font-weight: 700;
      cursor: default;
    }

  ` : css`
    > a {
      color: ${props => hex2rgba(props.theme.text, 0.6)};
      
      &:hover {
        color: ${props => hex2rgba(props.theme.text, 0.8)};
      }
    }
  `}
`