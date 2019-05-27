import styled from 'styled-components'
import { Link } from 'gatsby'
import hex2rgba from 'hex2rgba'

import { media } from 'utils/theme'

export const MenuIcon = styled.svg`
  width: 21px;
  height: 14px;
  padding: 10px 10px 10px 0;
  box-sizing: content-box;
  fill: ${props => hex2rgba(props.theme.text, 0.85)};
  position: relative;
  bottom: 2px;

  ${media.greaterThan('small')} {
    display: none;
  }
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.main.bg};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  transform: ${props => props.isActive ? `translateY(0%)` : `translateY(150%)`};
  transition: transform 250ms cubic-bezier(0.770, 0.000, 0.175, 1.000);

  ${media.greaterThan('small')} {
    display: none;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const CloseIcon = styled.svg`
  width: 14px;
  height: 14px;
  padding: 16px 20px;
  box-sizing: content-box;
  fill: ${props => hex2rgba(props.theme.text, 0.85)};

  ${media.greaterThan('small')} {
    display: none;
  }
`

export const Search = styled.div`
  display: flex;
  height: 40px;
  padding: 0 20px 0 10px;
  margin-bottom: 7px;
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

export const SearchForm = styled.form`
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
`

export const Label = styled.label`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.placeholder};
`

export const SearchIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${props => hex2rgba(props.theme.text, 0.4)};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: left 200ms ease;
`

export const Input = styled.input`
  width: ${props => props.value !== '' ? '100%' : 0};
  height: 40px;
  padding: ${props => props.value !== '' ? '0 40px 0 35px' : 0};
  color: ${props => props.theme.text};
  font-size: 16px;
  border: 0;
  background: transparent;
  outline: none;
  transition: width 220ms ease;

  & + svg {
    left: ${props => props.value !== '' ? '10px' : '90%'};
  }

  &:focus {
    width: 100%;
    padding: 0 40px 0 35px;

    & + svg {
      left: 10px;
    }
  }
`

export const RemoveBtn = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  background-color: transparent;
  outline: none;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  
  > svg {
    width: 16px;
    height: 16px;
    /* padding: 10px; */
    fill: ${props => hex2rgba(props.theme.text, 0.95)};
    /* box-sizing: content-box; */
  }
`

export const AlgoliaLink = styled.a.attrs({
  href: 'https://www.algolia.com',
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  display: flex;
  height: 20px;
  padding: 0 20px;
  align-items: center;
  justify-content: flex-end;
`

export const AlgoliaIcon = styled.svg`
  width: 140px;
  height: 20px;

  path {
    /* Search by */
    &:nth-child(1) {
      fill: ${props => props.theme.isDark ? '#FFF' : '#5468FF'};
    }
    /* 네모박스 */
    &:nth-child(2) {  
      fill: #5468FF;
    }
    /* 시계? 아이콘 */
    &:nth-child(3) {  
      fill: #FFF;
    }
    /* algolia */
    &:nth-child(4) {
      fill: ${props => props.theme.isDark ? '#FFF' : '#5D6494'}
    }
  }
`