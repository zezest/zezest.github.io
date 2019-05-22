import React from 'react'

import Layout from 'components/Layout/404'
import SEO from 'components/seo'

import NotFound from 'views/404'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not found" />
    <NotFound />
  </Layout>
)

export default NotFoundPage
