import styled from 'styled-components'
import hex2rgba from 'hex2rgba'

export const SearchForm = styled.form`
  flex: 1;
  width: 100%;
  height: 100%;
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 40px 0 10px;
  color: ${props => props.theme.text};
  font-size: 16px;
  border: 0;
  background-color: ${props => props.theme.placeholder};
  outline: none;
`

export const RemoveBtn = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  background-color: transparent;
  outline: none;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  
  > svg {
    width: 16px;
    height: 16px;
    /* padding: 10px; */
    fill: ${props => hex2rgba(props.theme.text, 0.95)};
    /* box-sizing: content-box; */
  }
`