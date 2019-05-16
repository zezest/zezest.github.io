const SIZES = {
  xsmall: { min: 0, max: 599 },
  small: { min: 600, max: 779 },
  medium: { min: 780, max: 979 },
  large: { min: 980, max: 1279 },
  xlarge: { min: 1280, max: 1339 },
  xxlarge: { min: 1340, max: Infinity },

  // Sidebar/nav related tweakpoints
  largerSidebar: { min: 1100, max: 1339 },
  sidebarFixed: { min: 2000, max: Infinity },

  // Topbar related tweakpoints
  expandedSearch: { min: 1180, max: Infinity },

  mobile: { min: 420, max: Infinity },
}

const baseTheme = {
  note: '#ffe564',
  error: '#ff6464',
  white: '#ffffff',
  black: '#000000',
}

module.exports = {
  lightTheme: {
    ...baseTheme,
    main: {
      bg: '#F5F8F8',
      title: '#3b6ef9',
      list: '#e6eeee',
    },
    hero: {
      bg: '#3b6ef9',
      text: '#F5F8F8',
    },
    codeBg: '#282c34',
    darker: '#20232a',
    textHighlight: '#3b6ef9',
    title: '#1a1a1a',
    text: '#333', // very dark grey / black substitute
    subtle: '#6d6d6d', // light grey for text
    divider: '#000', // opacity 0.2
  },
  darkTheme: {
    ...baseTheme,
    main: {
      bg: '#3f3f4c',
      title: '#bf9fe0',
      list: '#4b4b5a',
    },
    hero: {
      bg: '#bf9fe0',
      text: '#3f3f4c',
    },
    codeBg: '#282c34',
    darker: '#20232a',
    textHighlight: '#bf9fe0',
    title: '#b3b8bc',
    text: '#f7f7f8',
    subtle: '#e9ebec',
    divider: '#fff', // opacity 0.2
  },
  media: {
    between(smallKey, largeKey, excludeLarge = false) {
      if (excludeLarge) {
        return `@media (min-width: ${SIZES[smallKey].min}px) and (max-width: ${SIZES[largeKey].min - 1}px)`
  
      } else {
        if (SIZES[largeKey].max === Infinity) {
          return `@media (min-width: ${SIZES[smallKey].min}px)`
  
        } else {
          return `@media (min-width: ${SIZES[smallKey].min}px) and (max-width: ${SIZES[largeKey].max}px)`
        }
      }
    },
  
    greaterThan(key) {
      return `@media (min-width: ${SIZES[key].min}px)`;
    },
  
    lessThan(key) {
      return `@media (max-width: ${SIZES[key].min - 1}px)`
    },
  
    size(key) {
      const size = SIZES[key]
  
      if (size.min == null) {
        return this.lessThan(key)
  
      } else if (size.max == null) {
        return this.greaterThan(key)
  
      } else {
        return this.between(key, key)
      }
    },
  }
}