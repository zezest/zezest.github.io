import React, { useState, useRef, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import buildToc from 'utils/toc'

export default DevLogComponent => ({ ...props }) => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query DevLogPosts {
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
      }
    `
  )

  const [tocs, setToc] = useState([])
  const mdDom = useRef(null)
  const posts = allMarkdownRemark.edges

  useEffect(() => {
    const newToc = new buildToc(mdDom.current, {
      selector: 'h1,h2,h3,h4',
    })

    setToc(newToc)
  }, [props.theme.isDark])

  const state = {
    mdDom, 
    tocs,
    posts,
  }

  return <DevLogComponent {...props} {...state} />
}