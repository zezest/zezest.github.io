import styled from 'styled-components'
import { Link } from 'gatsby'
import hex2rgba from 'hex2rgba'

export const Search = styled.div`
  display: flex;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 10px;
  position: relative;
`

export const LogoLink = styled(Link)`
  display: flex;
  width: 50px;
  padding-right: 10px;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.svg`
  width: 20px;
  height: 26px;
  /* 11 : 15 */
  fill: ${props => hex2rgba(props.theme.text, 0.95)};
  stroke: ${props => hex2rgba(props.theme.text, 0.95)};
`

export const Input = styled.input`
  flex: 1;
  margin-right: 10px;
  padding: 0 10px;
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