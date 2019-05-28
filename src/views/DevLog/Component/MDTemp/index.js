import React from 'react'
import { withTheme } from 'styled-components'

import { MarkdownWrap } from './styled'

const MDTempComponent = ({
  mdRef, html,
}) => {
  return (
    <MarkdownWrap
      ref={mdRef}
      dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default withTheme(MDTempComponent)
