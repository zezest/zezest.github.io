import React from 'react';

import { ThemeManagerProvider } from './src/context/ThemeContext'
import GlobalStyle from './src/utils/globalStyle'

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