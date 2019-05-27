import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/seo'

import Home from 'views/Home'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`blog`, `zeze`, `devlog`]} />
      <Home />
    </Layout>
  )
}

export default IndexPage