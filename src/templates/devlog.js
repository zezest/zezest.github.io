import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/seo'
import MarkdownPage from 'components/MarkdownPage'

const DevLog = ({ data }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout>
      <SEO
        title={`${post.frontmatter.title} - ZEZE's blog`}
        keywords={[`test`]} />
        
      <h1>{post.frontmatter.title}</h1>
      <p>{post.fields.date}</p>
      
      <MarkdownPage html={post.html} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query TemplateDevLogMarkdown($slug: String!) {
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