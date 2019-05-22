import React from 'react'

import { MoreProvider } from './Context'

import MenuBtn from './Component/MenuBtn'
import Panel from './Component/Panel'

const MoreComponent = () => {
  return (
    <MoreProvider>
      <MenuBtn />
      <Panel />
    </MoreProvider>
  )
}

export default MoreComponent
