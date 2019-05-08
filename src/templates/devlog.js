import React from 'react'
import { graphql } from 'gatsby'
import parser from 'react-html-parser'

import SEO from 'components/seo'

const DevLog = ({ data }) => {
  const { markdownRemark: post } = data
  
  console.log(data)

  return (
    <div>
      <SEO
        title={`${post.frontmatter.title} - ZEZE's blog`}
        keywords={[`test`]}
      />
      <h1>{post.frontmatter.title}</h1>
      <p>{post.fields.date}</p>
      {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
      <div>{parser(post.html)}</div>
    </div>
  )
}

export const pageQuery = graphql`
  query TemplateDevLogMarkdown($slug: String!) {
    site {
      siteMetadata {
        title
        author
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