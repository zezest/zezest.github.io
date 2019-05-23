import React from 'react'

import withController from './Controller'

import { Main } from './styled'

const Layout = ({ children }) => (
  <Main>{children}</Main>
)

export default withController(Layout)
