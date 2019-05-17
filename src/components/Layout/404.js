import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { withTheme } from 'styled-components'

import Header from 'components/Header'
import Footer from 'components/Footer'

import { NotFoundMain, GlobalStyle } from './styled'

const NotFoundLayout = ({ 
  children,
  theme,
}) => {
  const isDark = theme.isDark.toString()
  const savedData = localStorage.getItem('dark')
  if (isDark !== savedData && savedData !== null) return null
  
  return (
    <>
      <Header />
  
      <NotFoundMain>{children}</NotFoundMain>
      
      <Footer />

      <GlobalStyle />
    </>
  )
}

NotFoundLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTheme(NotFoundLayout)
