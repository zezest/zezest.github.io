/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, keywords, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            description
            image,
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
      <meta property="og:title" content={`${title} - ${site.siteMetadata.title}`} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta property="og:image" content={site.siteMetadata.image} />
      <meta property="og:image:secure_url" content={site.siteMetadata.image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:alt" content={metaDescription} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={`${title} - ${site.siteMetadata.title}`} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={site.siteMetadata.image} />
      <meta name="twitter:domain" content={site.siteMetadata.title} />
      <meta name="twitter:creator" content={site.siteMetadata.author} />

      <meta name="naver-site-verification" content="dcdae359fa38d0743a893e3ce03b3dec33a076fe"/>

    </Helmet>
  )
}

SEO.defaultProps = {
  title: ``,
  lang: `ko`,
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  lang: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
}

export default SEO
