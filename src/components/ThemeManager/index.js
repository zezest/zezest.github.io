import React, { createContext, useState, useEffect } from 'react'
import { object } from 'prop-types'
import { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from 'src/theme'

const defaultState = {
  isDark: false,
  toggleDark: () => {},
}

const ThemeManagerContext = createContext(defaultState)

const defaultOptions = {
  isDark: false,
}

const ThemeManagerProvider = ({ 
  children, options,
}) => {
  const newOptions = Object.assign({}, defaultOptions, options)
  const [isDark, setIsDark] = useState(newOptions.isDark)

  const toggleDark = () => {
    const toggledTheme = !isDark
    setIsDark(toggledTheme)
    window.localStorage.setItem('dark', JSON.stringify(toggledTheme))
  }

  useEffect(() => {
    const localStorageTheme = window.localStorage.getItem('dark')
    const latestTheme = localStorageTheme && JSON.parse(localStorageTheme)

    if (latestTheme !== null) {
      setIsDark(latestTheme)
    }
  }, [])

  const currentTheme = isDark ? darkTheme : lightTheme
  const theme = { ...currentTheme, isDark }

  return (
    <ThemeManagerContext.Provider value={[isDark, toggleDark]}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeManagerContext.Provider>
  )
}

ThemeManagerProvider.defaultProps = {
  options: {},
}

ThemeManagerProvider.propTypes = {
  options: object,
}

export {
  ThemeManagerProvider,
  ThemeManagerContext,
}