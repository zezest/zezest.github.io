import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { withTheme } from 'styled-components'

import Header from 'components/Header'
import Footer from 'components/Footer'

import { 
  Main, 
  GlobalStyle } from './styled'

const Layout = ({ 
  children,
  theme,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const isDark = theme.isDark.toString()
  if (isDark !== localStorage.getItem('dark')) return <div></div>
  return (
    <>
      <Header siteTitle={site.siteMetadata.title} />
  
      <Main>{children}</Main>
      
      <Footer />

      <GlobalStyle />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTheme(Layout)
