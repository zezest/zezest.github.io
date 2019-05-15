import React, { useEffect, useState, useRef } from 'react'
import { withTheme } from 'styled-components'
import { graphql } from 'gatsby'

import buildToc from 'utils/toc'

import Layout from 'components/Layout'
import SEO from 'components/seo'
import MarkdownPage from 'components/MarkdownPage'
import PostMenu from 'components/PostMenu'

import { Wrap, Post, Title, Date } from './styled'

const DevLog = ({
  data, theme,
}) => {
  const [tocs, setToc] = useState([])
  const mdDom = useRef(null)
  const posts = data.allMarkdownRemark.edges
  const post = data.markdownRemark

  useEffect(() => {
    const isDark = theme.isDark.toString()
    if (isDark === localStorage.getItem('dark')) {

      const newToc = new buildToc(mdDom.current, {
        selector: 'h1,h2,h3,h4',
      })

      setToc(newToc)
    }
  }, [theme.isDark])

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        keywords={[`test`]} />
        
      <Wrap>
        <Post>
          <Title>{post.frontmatter.title}</Title>
          <Date>{post.fields.date}</Date>
          
          <MarkdownPage mdRef={mdDom} html={post.html} />
        </Post>

        <PostMenu posts={posts} tocs={tocs} active={post.id} />
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
      timeToRead,
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

export default withTheme(DevLog)