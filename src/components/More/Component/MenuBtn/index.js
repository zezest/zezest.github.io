import React from 'react'

import { MoreContext } from '../../Context'
import useMore from '../../Context/useMore'

import { MenuIcon } from './styled'

const MenuBtnComponent = () => {
  const { toggleMenu } = useMore(MoreContext)
  // 3 : 2
  return (
    <MenuIcon viewBox="0 0 18 12" onClick={() => toggleMenu(true)}>
      <path fillRule="evenodd" clipRule="evenodd" d="M0.948305 0H17.0513C17.5733 0 18.0003 0.427 18.0003 0.949V1.051C18.0003 1.573 17.5733 2 17.0513 2H0.948305C0.426305 2 0.000305176 1.573 0.000305176 1.051V0.949C0.000305176 0.427 0.426305 0 0.948305 0ZM17.0513 5H0.948305C0.426305 5 0.000305176 5.427 0.000305176 5.949V6.051C0.000305176 6.573 0.426305 7 0.948305 7H17.0513C17.5733 7 18.0003 6.573 18.0003 6.051V5.949C18.0003 5.427 17.5733 5 17.0513 5ZM17.0513 10H0.948305C0.426305 10 0.000305176 10.427 0.000305176 10.949V11.051C0.000305176 11.573 0.426305 12 0.948305 12H17.0513C17.5733 12 18.0003 11.573 18.0003 11.051V10.949C18.0003 10.427 17.5733 10 17.0513 10Z" />
    </MenuIcon>
  )
}

export default MenuBtnComponent
