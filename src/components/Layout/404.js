import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import withController from './Controller'

import { compose } from 'utils/compose'

import Header from 'components/Header'
import Footer from 'components/Footer'

import { NotFoundMain, GlobalStyle } from './styled'

const NotFoundLayout = ({ 
  children,
  theme,
}) => {
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

export default compose(
  withTheme,
  withController,
)(NotFoundLayout)
