import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/seo'

import Home from 'views/Home'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="ZEZE 블로그" keywords={[`blog`, `zeze`, `devlog`]} />
      <Home />
    </Layout>
  )
}

export default IndexPage