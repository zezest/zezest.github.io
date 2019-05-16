import styled from 'styled-components'

import { media } from 'src/theme'

export const Wrap = styled.div`
  flex: 0 0 200px;
  margin-left: 40px;
  padding: 20px 0;
  box-sizing: border-box;
  border-left: 1px solid ${props => props.theme.main.list};
  transition: border-left 500ms ease;

  ${media.lessThan('medium')} {
    display: none;
  }

  ${media.greaterThan('largerSidebar')} {
    flex: 0 0 250px;
  }
`

export const Content = styled.div`
  position: fixed;
  height: calc(100vh - 100px);
  margin-right: -999px;
  padding-right: 999px;
`

export const BtnWrap = styled.div`
  height: 30px;
  margin-bottom: 20px;
`

export const Btn = styled.button`
  width: 100px;
  height: 100%;
  color: ${props => props.theme.text};
  font-size: 15px;
  font-weight: ${props => props.isActive ? 700 : 400};
  text-transform: uppercase;
  border: 0;
  background-color: transparent;
  outline: none;
  opacity: ${props => props.isActive ? 1 : 0.6};

  ${media.greaterThan('largerSidebar')} {
    width: 125px;
  }
`