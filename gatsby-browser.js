import 'core-js/es6/map'
import 'core-js/es6/set'

import React from 'react'
import smoothscroll from 'smoothscroll-polyfill'

import { ThemeManagerProvider } from './src/context/ThemeContext'

export const onClientEntry = async () => {
  smoothscroll.polyfill()
}

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeManagerProvider>{element}</ThemeManagerProvider>
  )
}

