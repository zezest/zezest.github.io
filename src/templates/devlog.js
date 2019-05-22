import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/seo'

import DevLog from 'views/DevLog'

const DevLogTemplate = ({
  data,
}) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} keywords={[`test`]} />
      <DevLog post={post} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query TemplateDevLogMarkdown($slug: String!) {
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

export default DevLogTemplate