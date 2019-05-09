import React from 'react'

import { MarkdownWrap } from './styled'

const MarkdownPageComponent = ({
  html,
  children
}) => {
  return (
    <MarkdownWrap dangerouslySetInnerHTML={{__html: html}}>
      {/* {children} */}
    </MarkdownWrap>
  )
}

export default MarkdownPageComponent
