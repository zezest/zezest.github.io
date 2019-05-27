import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from 'components/Header'
import Footer from 'components/Footer'

import { Wrap, GlobalStyle } from './styled'

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
      <Wrap>
        <Header siteTitle={site.siteMetadata.title} />
        <LayoutComponent {...props} />
        <Footer />
        <GlobalStyle />
      </Wrap>
    )
  }
}
