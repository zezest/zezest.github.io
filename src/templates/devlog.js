import React from 'react'
import { graphql } from 'gatsby'
import hex2rgba from 'hex2rgba'
import styled from 'styled-components'

import Layout from 'components/Layout'
import SEO from 'components/seo'
import MarkdownPage from 'components/MarkdownPage'
import PostList from 'components/PostList'

import { media } from 'src/theme'

const Wrap = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0px 20px 5rem;

  ${media.greaterThan('xxlarge')} {
    max-width: 1260px;
  }
  
  ${media.greaterThan('medium')} {
    width: 90%;
    justify-content: space-between;
  }
`

const Post = styled.article`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  justify-content: flex-start;
  align-items: stretch;
  max-width: 700px;
`

const Title = styled.h1`
  margin-bottom: 15px;
  line-height: 35px;
`

const Date = styled.p`
  padding-bottom: 25px;
  margin-bottom: 30px;
  transition: color 500ms ease;
`

const DevLog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        keywords={[`test`]} />
        
      <Wrap>
        <Post>
          <Title>{post.frontmatter.title}</Title>
          <Date>{post.fields.date}</Date>
          
          <MarkdownPage html={post.html} />
        </Post>

        <PostList list={posts} active={post.id} />
      </Wrap>
    </Layout>
  )
}

export const pageQuery = graphql`
  query TemplateDevLogMarkdown($slug: String!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: 10
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
            date(formatString: "YYYY.MM.DD")
          }
          frontmatter {
            title
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 500)
      frontmatter {
        title
      }
      fields {
        date(formatString: "YYYY년 MM월 DD일")
        slug
      }
    }
  }
`

export default DevLog