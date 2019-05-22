import React, { useState } from 'react'

export default MenuComponent => {
  return ({ ...props }) => {
    const [tab, setTab] = useState('anchor')    // post, anchor

    const onClickToTab = newTab => {
      setTab(newTab)
    }

    const state = {
      tab,
      onClickToTab,
    }

    return <MenuComponent {...props} {...state} />
  }
}
