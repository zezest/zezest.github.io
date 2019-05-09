import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/seo'

const AllBlogPosts = ({ data }) => {
  const { edges } = data.allMarkdownRemark
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
                <p>{post.fields.date}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default AllBlogPosts

export const pageQuery = graphql`
  query AllBlogPostsPageQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/devlog/" } }
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            date(formatString: "YYYY년 MM월 DD일")
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
