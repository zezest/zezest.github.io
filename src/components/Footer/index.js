import React from 'react'

import { Footer } from './styled'

const FooterComponent = () => {
  return (
    <Footer>
      <p>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </Footer>
  )
}

export default FooterComponent
