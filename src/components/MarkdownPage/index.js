import React from 'react'
import { withTheme } from 'styled-components'

// import parser from 'utils/HtmlParser'

import { MarkdownWrap } from './styled'

const MarkdownPageComponent = ({
  mdRef, html,
}) => {
  return (
    <MarkdownWrap id="markdown" ref={mdRef} dangerouslySetInnerHTML={{ __html: html }} />
  )
  // return (
  //   <MarkdownWrap>
  //     {parser(html)}
  //   </MarkdownWrap>
  // )
}

export default withTheme(MarkdownPageComponent)
