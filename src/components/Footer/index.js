import React from 'react'

import { Footer } from './styled'

const FooterComponent = () => {
  return (
    <Footer>
      <p>Built with <a href="https://www.gatsbyjs.org">Gatsby</a></p>
      <p>Copyright © {new Date().getFullYear()} ZEZE</p>
    </Footer>
  )
}

export default FooterComponent
