import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { ThemeManagerProvider } from 'components/ThemeManager'
import Header from 'components/Header'
import Footer from 'components/Footer'

import { GlobalStyle } from './styled'

export default LayoutComponent => {
  return ({ ...props }) => {
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

    return (
      <ThemeManagerProvider>
        <>
          <Header siteTitle={site.siteMetadata.title} />
          <LayoutComponent {...props} />
          <Footer />
          <GlobalStyle />
        </>
      </ThemeManagerProvider>

    )
  }
}
