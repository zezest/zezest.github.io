import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/seo'

import DevLogList from 'views/DevLogList'

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
      <SEO title="DEVLOG" keywords={[`gatsby`, `application`, `react`]} />
      
      <DevLogList posts={posts} />
    </Layout>
  )
}

export default AllBlogPosts