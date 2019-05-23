import styled from 'styled-components'
import hex2rgba from 'hex2rgba'

import { media } from 'src/theme'

export const SearchForm = styled.form`
  width: 200px;
  height: 36px;
  margin-right: 20px;
  position: relative;

  ${media.lessThan('medium')} {
    width: 150px;
  }

  ${media.lessThan('small')} {
    display: none;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 32px 0 30px;
  color: ${props => props.theme.text};
  font-size: 16px;
  border: 0;
  border-radius: 3px;
  background-color: ${props => props.theme.placeholder};
  outline: none;
`

export const RemoveBtn = styled.button`
  width: 32px;
  height: 36px;
  border: 0;
  background-color: transparent;
  outline: none;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  
  > svg {
    width: 14px;
    height: 14px;
    fill: ${props => hex2rgba(props.theme.text, 0.95)};
    vertical-align: middle;
  }
`