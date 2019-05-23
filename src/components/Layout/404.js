import React from 'react'

import withController from './Controller'

import { NotFoundMain } from './styled'

const NotFoundLayout = ({ children }) => (
  <NotFoundMain>{children}</NotFoundMain>
)

export default withController(NotFoundLayout)
