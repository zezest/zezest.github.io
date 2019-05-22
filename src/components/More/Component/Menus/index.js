import React from 'react'
import { Link } from 'gatsby'

import { MoreContext } from '../../Context'
import useMore from '../../Context/useMore'

import { List, Menu } from './styled'

const MenuLink = ({
  children,
}) => {
  const { toggleMenu } = useMore(MoreContext)
  return (
    <Menu>
      <Link 
        to="/devlog/all.html"
        onClick={() => toggleMenu(false)}>
        {children}
      </Link>
    </Menu>
  )
}

const MenusComponent = () => {
  
  return (
    <List>
      <MenuLink>devlog</MenuLink>
    </List>
  )
}

export default MenusComponent
