import React from 'react'
import smoothscroll from 'smoothscroll-polyfill'

import { ThemeManagerProvider } from './src/context/ThemeContext'
import GlobalStyle from './src/utils/globalStyle'

export const onClientEntry = async () => {
  smoothscroll.polyfill()
}

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeManagerProvider>
      <>
        {element}
        <GlobalStyle />
      </>
    </ThemeManagerProvider>
  )
}

