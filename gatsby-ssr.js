import React from 'react';
import { ThemeManagerProvider } from './src/context/ThemeContext'

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeManagerProvider>{element}</ThemeManagerProvider>
  )
}