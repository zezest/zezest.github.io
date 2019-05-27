import React from 'react'
import { Link } from 'gatsby'

import { 
  Wrap, Title, 
  List, Item, ItemHeader } from './styled'

const AllBlogPosts = ({
  posts,
}) => {
  return (
    <Wrap>
      <Title>dev list</Title>

      <List>
        {posts.map((post, idx) => {
          return (
            <Item key={post.id}>
              <Link to={post.fields.slug}>
                <div>
                  <ItemHeader>
                    <h1>{post.frontmatter.title}</h1>
                    <p>{post.fields.date}</p>
                  </ItemHeader>
                </div>
              </Link>
            </Item>
          )
        })}
      </List>
    </Wrap>
  )
}

export default AllBlogPosts