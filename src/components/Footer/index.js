import React from 'react'

import { Footer } from './styled'

const FooterComponent = () => {
  return (
    <Footer>
      <p>Copyright © {new Date().getFullYear()} ZEZE</p>
    </Footer>
  )
}

export default FooterComponent
