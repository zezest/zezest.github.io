import React from 'react'

import Layout from 'components/Layout/404'
import SEO from 'components/seo'

import NotFound from 'views/404'

const NotFoundPage = () => (
  <Layout>
    <SEO title="페이지를 찾을 수 없습니다." />
    <NotFound />
  </Layout>
)

export default NotFoundPage
