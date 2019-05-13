import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode'

import { 
  Header, Logo, 
  RightContent, DarkModeLabel, ModeType } from './styled'
  
const HeaderComponent = ({
  siteTitle,
}) => {
  const themeContext = useContext(ThemeManagerContext)
  const isDark = themeContext.isDark
  return (
    <Header>
      <Logo>
        <Link to="/">
          {siteTitle}
        </Link>
      </Logo>

      <RightContent>
        <p>{isDark ? 'Dark mode' : 'Light mode'}</p>
        <DarkModeLabel>
          <input type="checkbox" onChange={themeContext.toggleDark} checked={isDark} />
          <ModeType isDark={isDark}>
            <div>
              
            </div>
          </ModeType>
        </DarkModeLabel>
      </RightContent>
    </Header>
  )
}

export default (HeaderComponent)
