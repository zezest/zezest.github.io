import styled from 'styled-components'
import { Link } from 'gatsby'
import hex2rgba from 'hex2rgba'

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