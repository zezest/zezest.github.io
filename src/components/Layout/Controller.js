import React, { useState, useEffect } from 'react'

export default LayoutComponent => {
  return ({ ...props }) => {
    const [savedMode, setMode] = useState('')

    useEffect(() => {
      const savedData = localStorage.getItem('dark') || 'false'
      setMode(savedData)
    }, [props.theme.isDark])
    
    const isDark = props.theme.isDark.toString()

    if (isDark !== savedMode && savedMode !== null) return null

    return <LayoutComponent {...props} />
  }
}
