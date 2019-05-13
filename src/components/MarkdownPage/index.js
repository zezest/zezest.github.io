import React from 'react'
import { withTheme } from 'styled-components'

import parser from 'components/HtmlParser'

import { MarkdownWrap } from './styled'

const MarkdownPageComponent = ({
  html,
}) => {
  return (
    <MarkdownWrap>
      {parser(html)}
    </MarkdownWrap>
  )
}

export default withTheme(MarkdownPageComponent)
