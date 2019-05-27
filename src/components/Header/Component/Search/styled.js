import styled from 'styled-components'
import hex2rgba from 'hex2rgba'

import { media } from 'utils/theme'

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

export const SearchIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${props => hex2rgba(props.theme.text, 0.4)};
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 32px 0 35px;
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


export const Panel = styled.div`
  width: 300px;
  margin-top: 10px;
  padding: 15px 0;
  border-radius: 5px;
  background-color: ${props => props.theme.placeholder};
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow-y: auto;
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
    border-bottom: 1px solid ${props => hex2rgba(props.theme.text, 0.2)};

    &:hover {
      text-decoration: underline;
    }
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

export const NoResult = styled.p`
  padding: 20px 0;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`

export const AlgoliaLink = styled.a.attrs({
  href: 'https://www.algolia.com',
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  display: flex;
  height: 20px;
  padding: 0 20px;
  margin-top: 10px;
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