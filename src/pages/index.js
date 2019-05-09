import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/seo'

const IndexPage = ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  const postsData = edges.map(edge => edge.node)

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      
      <ul>
        {postsData.map((post, idx) => {
          return (
            <li key={post.id}>
              <Link to={post.fields.slug}>
                <p>{idx + 1}</p>
                <h1>{post.frontmatter.title}</h1>
                <p>{post.fields.date}</p>
                <p>{post.excerpt}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: 3
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
  }
`

export default IndexPage