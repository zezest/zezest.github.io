import React, { createContext, useState } from 'react'

const MoreContext = createContext([{}, () => {}])

const MoreProvider = ({ children }) => {
  const [state, setState] = useState({
    active: false,
    keyword: '',
  })

  return (
    <MoreContext.Provider value={[state, setState]}>
      {children}
    </MoreContext.Provider>
  )
}

export {
  MoreContext,
  MoreProvider,
}