import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/seo'
import Home from 'components/Home'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      
      <Home />
    </Layout>
  )
}

export default IndexPage