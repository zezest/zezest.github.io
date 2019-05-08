/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  )
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      defaultTitle={site.siteMetadata.title}
      titleTemplate={`%s - ${site.siteMetadata.title}`}>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords.length > 0 ? keywords.join(', ') : ''} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      {/* <meta property="og:image" content={defaultImage} /> */}
      {/* <meta property="og:image:secure_url" content={defaultImage} /> */}
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="256" />
      <meta property="og:image:height" content="256" />
      <meta property="og:image:alt" content={metaDescription} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={`${title} - ${site.siteMetadata.title}`} />
      <meta name="twitter:description" content={metaDescription} />
      {/* <meta name="twitter:image" content={defaultImage} /> */}
      <meta name="twitter:domain" content={site.siteMetadata.title} />
      <meta name="twitter:creator" content={site.siteMetadata.author} />

      <link
        href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css"
        rel="stylesheet"
        type="text/css"
      />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `ko`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
