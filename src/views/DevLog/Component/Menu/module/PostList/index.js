import React from 'react'
import { Link } from 'gatsby'

import { Item } from './styled'

const PostListComponent = ({
  posts, active,
}) => {
  return (
    <ul>
      {posts.map(({ node }) => {
        if (node.id === active) {
          return (
            <Item key={node.id} isActive={true}>
              <p>
                {node.frontmatter.title}
              </p>
            </Item>
          )
        }

        return (
          <Item key={node.id} isActive={false}>
            <Link to={node.fields.slug}>
              {node.frontmatter.title}
            </Link>
          </Item>
        )
      })}

      <Item>
        <Link to="/devlog/all.html">
          ...all posts
        </Link>
      </Item>
    </ul>
  )
}

export default PostListComponent
