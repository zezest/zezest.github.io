import React from 'react'

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

export default MarkdownPageComponent
