import styled, { css } from 'styled-components'

export const Header = styled.header`
  display: flex;
  width: 100%;
  max-width: 960px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 1.45rem;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.h1`
`


export const RightContent = styled.div`
  display: flex;
  align-items: center;
  height: 20px;

  > p {
    margin-right: 5px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
  }
`

export const DarkModeLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  width: 34px;
  height: 20px;
  border-radius: 30px;
  background-color: ${props => props.theme.textHighlight};
  position: relative;
  transition: background-color 500ms ease;

  > input[type=checkbox] {
    width: 1px;
    height: 1px;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const ModeType = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: 2px;
  left: ${props => props.theme.isDark ? '16px' : '2px'};
  transition: left 500ms ease;

  > div {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 50%;
    box-shadow: inset 0 0 0 2px ${props => props.theme.main.bg};
    transition: box-shadow 500ms ease;

    &:before {
      content: '';
      width: 100%;
      height: 100%;
      border-radius: 0;
      background-color: ${props => props.theme.main.bg};
      position: absolute;
      top: 0;
      left: 50%;
      
      ${props => props.theme.isDark && css`
        width: 150%;
        border-radius: 50%;
        transform: translate(-10%,-40%) rotate(-35deg);
      `}
      transition: transform 500ms ease, border-radius 500ms ease, background-color 500ms ease;
    }
  }
`