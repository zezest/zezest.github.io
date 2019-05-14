import React from 'react'
import { Link } from 'gatsby'

import {
  Wrap, List, Item } from './styled'

const PostListComponent = ({
  list, active,
}) => {
  return (
    <Wrap>
      <List>
        {list.map(item => {

          return (
            <Item isActive={item.node.id === active}>
              <Link to={item.node.fields.slug}>
                {item.node.frontmatter.title}
              </Link>
            </Item>
          )
        })}
      </List>
    </Wrap>
  )
}

export default PostListComponent
