import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/seo'

const AllBlogPosts = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
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
  )

  const posts = allMarkdownRemark.edges.map(edge => edge.node)

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      
      <ul>
        {posts.map((post, idx) => {
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