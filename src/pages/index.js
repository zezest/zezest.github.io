import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from 'components/Layout'
import Image from 'components/image'
import SEO from 'components/seo'

const IndexPage = ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  const postsData = edges.map(edge => edge.node)
  console.log(postsData)
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      
      <Link to="/page-2/">Go to page 2</Link>

      <ul>
        {postsData.map((post, idx) => {
          return (
            <li key={post.id}>
              <Link to={post.fields.slug}>
                <p>{idx + 1}</p>
                <h1>{post.frontmatter.title}</h1>
                <p>{post.frontmatter.date}</p>
                <p>{post.excerpt}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          id
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
          }
        }
      }
    }
  }
`
