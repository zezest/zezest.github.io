import React from 'react'
import { withTheme } from 'styled-components'

import withController from './Controller'

import { compose } from 'utils/compose'

import MDTemp from './Component/MDTemp'
import Menu from './Component/Menu'

import { Wrap, Post, Title, Date } from './styled'

const DevLogComponent = ({
  mdDom, tocs, posts,
  post, 
}) => {
  return (
    <Wrap>
      <Post>
        <Title>{post.frontmatter.title}</Title>
        <Date>{post.fields.date}</Date>
        
        <MDTemp mdRef={mdDom} html={post.html} />
      </Post>

      <Menu posts={posts} tocs={tocs} active={post.id} />
    </Wrap>
  )
}

export default compose(
  withTheme,
  withController,
)(DevLogComponent)
